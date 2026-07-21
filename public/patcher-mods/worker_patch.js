/* Patch worker for AGTTeam patchers - adapted from RomPatcher.js worker_apply.js
   Loads, hashes and patches the ROM entirely off the main thread so the UI stays
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

var romFile=null;
var loadBuffer=null;
var loadFileName=null;
var loadSize=0;

function errorString(error){
	return (error && error.message) ? error.message : String(error);
}

self.onmessage=function(event){
	var data=event.data;

	if(data.action==='reset'){ /* fire-and-forget, no reply */
		romFile=null;
		loadBuffer=null;
		return;
	}

	try{
		/* the ROM is read on the main thread and streamed here in transferred
		   chunks: reading the cloned File from inside the worker proved
		   unreliable (silently stalling reads on Chrome) */
		if(data.action==='load-begin'){
			console.log('[worker_patch] load begin: '+data.fileName+' ('+data.fileSize+' bytes)');
			romFile=null;
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
				var u8=patchedRom._u8array;
				var parts=[];
				for(var i=0;i<u8.length;i+=BLOB_CHUNK_SIZE)
					parts.push(u8.subarray(i, Math.min(i+BLOB_CHUNK_SIZE, u8.length)));
				/* mime type avoids mobile browsers appending .txt to the extension */
				var blob=new Blob(parts, {type:'data:attachment/plain'});
				var fileName=romFile.fileName.replace(/\.([^\.]*?)$/, ' ('+data.patchName+').$1');
				self.postMessage({action:'apply', success:true, blob:blob, fileName:fileName});
			}
		}
	}catch(error){
		self.postMessage({action:data.action, success:false, error:errorString(error)});
	}
};
