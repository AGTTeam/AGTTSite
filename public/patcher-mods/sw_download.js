/* Streams the patched ROM to the browser's download manager: the page hands us
   a MessagePort and metadata, and we answer the matching navigation with a
   ReadableStream fed from that port. This bypasses Blob storage entirely -
   multi-GB blob downloads through object URLs fail intermittently. */

var pendingDownloads = new Map();

self.addEventListener('install', function () {
	self.skipWaiting();
});
self.addEventListener('activate', function (event) {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('message', function (event) {
	var data = event.data;
	if (!data || data.action !== 'prepare-download')
		return; /* keepalive pings from the page land here too */
	/* ports[0] is the control channel to the patch worker, ports[1] acks */
	pendingDownloads.set(data.id, { fileName: data.fileName, fileSize: data.fileSize, port: event.ports[0] });
	/* keep entries around for possible re-requests, but don't grow forever */
	while (pendingDownloads.size > 8)
		pendingDownloads.delete(pendingDownloads.keys().next().value);
	event.ports[1].postMessage({ ready: true });
});

function contentDisposition(fileName) {
	var ascii = fileName.replace(/[^\x20-\x7e]/g, '_').replace(/"/g, "'");
	return 'attachment; filename="' + ascii + '"; filename*=UTF-8\'\'' + encodeURIComponent(fileName);
}

self.addEventListener('fetch', function (event) {
	var url = new URL(event.request.url);
	if (!url.pathname.endsWith('/patcher-mods/download'))
		return;
	var entry = pendingDownloads.get(url.searchParams.get('id'));
	console.log('[sw_download] fetch for id ' + url.searchParams.get('id') + (entry ? '' : ' (unknown, passing to network)'));
	if (!entry)
		return;

	/* the entry stays registered: some browsers request the URL again when the
	   download manager takes over, and each request must get a fresh stream.
	   The patch worker opens a new session per stream port. */
	var channel = new MessageChannel();
	entry.port.postMessage({ stream: true, port: channel.port2 }, [channel.port2]);
	var port = channel.port1;
	var stream = new ReadableStream({
		/* one chunk per pull, so the patch worker only sends data as fast as
		   the download manager writes it to disk */
		pull: function (controller) {
			return new Promise(function (resolve) {
				port.onmessage = function (message) {
					if (message.data.done)
						controller.close();
					else if (message.data.error)
						controller.error(new Error(message.data.error));
					else
						controller.enqueue(new Uint8Array(message.data.chunk));
					resolve();
				};
				port.postMessage({ pull: true });
			});
		},
		cancel: function () {
			port.postMessage({ cancel: true });
		}
	});

	event.respondWith(new Response(stream, {
		headers: {
			'Content-Type': 'application/octet-stream',
			'Content-Length': String(entry.fileSize),
			'Content-Disposition': contentDisposition(entry.fileName)
		}
	}));
});
