/* Loads, hashes and patches the ROM entirely off the main thread so the UI stays
   responsive with multi-GB files. Uses the patcher-mods MarcFile, which falls back
   to WebAssembly memory when a file exceeds Chromium's ~2GiB ArrayBuffer cap. */

self.importScripts(
	'/patcher-mods/MarcFile.js',
	'/patcher-mods/sha256.umd.min.js',
	'/patcher/js/crc.js',
	'/patcher/js/formats/vcdiff.js'
);

var ZIP_MAGIC='\x50\x4b\x03\x04';
var HASH_CHUNK_SIZE=32*1024*1024;
var BLOB_CHUNK_SIZE=256*1024*1024;
var STREAM_CHUNK_SIZE=32*1024*1024;

var romFile=null;
var loadBuffer=null;
var loadFileName=null;
var loadSize=0;
var pendingSave=null;

function errorString(error){
	return (error && error.message) ? error.message : String(error);
}

self.onmessage=function(event){
	var data=event.data;

	if(data.action==='reset'){ /* fire-and-forget, no reply */
		romFile=null;
		loadBuffer=null;
		pendingSave=null;
		return;
	}

	try{
		/* the ROM is read on the main thread and streamed here in transferred
		   chunks: reading the cloned File from inside the worker proved
		   unreliable (silently stalling reads on Chrome) */
		if(data.action==='load-begin'){
			console.log('[worker_patch] load begin: '+data.fileName+' ('+data.fileSize+' bytes)');
			romFile=null;
			pendingSave=null;
			loadFileName=data.fileName;
			loadSize=data.fileSize;
			loadBuffer=_allocLargeBuffer(data.fileSize);
			self.postMessage({action:'load-begin', success:true});

		}else if(data.action==='load-chunk'){
			new Uint8Array(loadBuffer, data.offset, data.chunk.byteLength).set(new Uint8Array(data.chunk));
			self.postMessage({action:'load-chunk', success:true});

		}else if(data.action==='load-end'){
			romFile=new MarcFile(0);
			romFile.fileName=loadFileName;
			romFile.fileType='application/octet-stream';
			romFile.fileSize=loadSize;
			/* explicit length: a wasm-backed buffer is padded to a 64KiB page multiple */
			romFile._u8array=new Uint8Array(loadBuffer, 0, loadSize);
			romFile._dataView=new DataView(loadBuffer, 0, loadSize);
			loadBuffer=null;
			console.log('[worker_patch] load done');
			var isZip=romFile.readString(4).startsWith(ZIP_MAGIC);
			romFile.seek(0);
			self.postMessage({action:'load-end', success:true, isZip:isZip, fileName:romFile.fileName, fileSize:romFile.fileSize});

		}else if(data.action==='sha'){
			console.log('[worker_patch] sha start');
			hashwasm.createSHA256().then(function(hasher){
				var u8=romFile._u8array;
				for(var i=0;i<u8.length;i+=HASH_CHUNK_SIZE){
					hasher.update(u8.subarray(i, Math.min(i+HASH_CHUNK_SIZE, u8.length)));
					self.postMessage({action:'sha', progress:true, percent:Math.floor((i+HASH_CHUNK_SIZE)/u8.length*100)});
				}
				var sha=hasher.digest('hex');
				console.log('[worker_patch] sha done: '+sha);
				self.postMessage({action:'sha', success:true, sha:sha});
			}).catch(function(error){
				console.error('[worker_patch] sha failed', error);
				self.postMessage({action:'sha', success:false, error:errorString(error)});
			});

		}else if(data.action==='apply'){
			console.log('[worker_patch] apply start ('+data.patchBuffer.byteLength+' byte patch, replaceRom='+(!!data.replaceRom)+')');
			var patchFile=new MarcFile(data.patchBuffer);
			patchFile.littleEndian=false;

			var header=patchFile.readString(6);
			if(!header.startsWith(VCDIFF_MAGIC))
				throw new Error('invalid patch file');
			var patch=parseVCDIFF(patchFile);

			var patchedRom=patch.apply(romFile, !!data.validateChecksums);
			console.log('[worker_patch] apply done ('+patchedRom.fileSize+' bytes)');

			if(data.replaceRom){
				/* repair/decrypt step: the result becomes the new source ROM */
				patchedRom.fileName=romFile.fileName;
				romFile=patchedRom;
				self.postMessage({action:'apply', success:true, replaced:true});
			}else{
				/* hold the result; the main thread follows up with save-stream
				   (download service worker) or save-blob (fallback) */
				pendingSave=patchedRom;
				var fileName=romFile.fileName.replace(/\.([^\.]*?)$/, ' ('+data.patchName+').$1');
				self.postMessage({action:'apply', success:true, fileName:fileName, fileSize:patchedRom.fileSize});
			}

		}else if(data.action==='save-stream'){
			/* the service worker opens one stream session per browser request
			   for the download URL (some browsers request it more than once);
			   each session serves the whole ROM chunk by chunk from the start.
			   pendingSave is kept so re-requests stay servable; it is released
			   on reset/load-begin or the next apply. */
			var source=pendingSave;
			if(!source)
				throw new Error('no patched ROM to save');
			var controlPort=data.port;
			var reportedSuccess=false;
			var sessionCount=0;
			controlPort.onmessage=function(message){
				if(!message.data.stream)
					return;
				var streamPort=message.data.port;
				var session=++sessionCount;
				var u8=source._u8array;
				var offset=0;
				console.log('[worker_patch] stream session '+session+' start');
				streamPort.onmessage=function(m){
					if(m.data.cancel){
						console.log('[worker_patch] stream session '+session+' cancelled at '+offset);
						return;
					}
					if(!m.data.pull)
						return;
					if(offset>=u8.length){
						streamPort.postMessage({done:true});
						console.log('[worker_patch] stream session '+session+' done');
						if(!reportedSuccess){
							reportedSuccess=true;
							self.postMessage({action:'save-stream', success:true});
						}
						return;
					}
					var end=Math.min(offset+STREAM_CHUNK_SIZE, u8.length);
					/* copy the chunk out: transferables must own their buffer
					   and the source may live in WebAssembly memory */
					var chunk=new Uint8Array(end-offset);
					chunk.set(u8.subarray(offset, end));
					offset=end;
					streamPort.postMessage({chunk:chunk.buffer}, [chunk.buffer]);
					/* only the latest session drives the UI, and never after
					   success has already been reported */
					if(!reportedSuccess && session===sessionCount)
						self.postMessage({action:'save-stream', progress:true, percent:Math.floor(offset/u8.length*100)});
				};
			};

		}else if(data.action==='save-blob'){
			var source=pendingSave;
			pendingSave=null;
			if(!source)
				throw new Error('no patched ROM to save');
			var u8=source._u8array;
			var parts=[];
			for(var i=0;i<u8.length;i+=BLOB_CHUNK_SIZE)
				parts.push(u8.subarray(i, Math.min(i+BLOB_CHUNK_SIZE, u8.length)));
			/* mime type avoids mobile browsers appending .txt to the extension */
			var blob=new Blob(parts, {type:'data:attachment/plain'});
			self.postMessage({action:'save-blob', success:true, blob:blob});
		}
	}catch(error){
		self.postMessage({action:data.action, success:false, error:errorString(error)});
	}
};
