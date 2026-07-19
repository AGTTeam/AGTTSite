/* MODDED VERSION OF MarcFile.js v20181020 - Marc Robledo 2014-2018 - http://www.marcrobledo.com/license */

function MarcFile(source, onLoad, onError){
	if(typeof source==='object' && source.files) /* get first file only if source is input with multiple files */
		source=source.files[0];

	this.littleEndian=false;
	this.offset=0;
	this._lastRead=null;

	if(typeof source==='object' && source.name && source.size){ /* source is file */
		this.fileName=source.name;
		this.fileType=source.type;
		this.fileSize=source.size;

		var marcFile=this;
		var CHUNK_SIZE=128*1024*1024;
		var fail=function(error){
			console.error('MarcFile: failed to load '+marcFile.fileName+' ('+marcFile.fileSize+' bytes)', error);
			if(onError)
				onError.call(null, error);
		};

		var buffer;
		try{
			buffer=new ArrayBuffer(source.size);
		}catch(error){
			fail(error);
			return;
		}

		var offset=0;
		var readNextChunk=function(){
			if(offset>=source.size){
				marcFile._u8array=new Uint8Array(buffer);
				marcFile._dataView=new DataView(buffer);
				if(onLoad)
					onLoad.call();
				return;
			}
			var end=Math.min(offset+CHUNK_SIZE, source.size);
			source.slice(offset, end).arrayBuffer().then(function(chunk){
				new Uint8Array(buffer, offset, chunk.byteLength).set(new Uint8Array(chunk));
				offset=end;
				readNextChunk();
			}).catch(fail);
		};
		readNextChunk();



	}else if(typeof source==='object' && typeof source.fileName==='string' && typeof source.littleEndian==='boolean'){ /* source is MarcFile */
		this.fileName=source.fileName;
		this.fileType=source.fileType;
		this.fileSize=source.fileSize;

		var ab=new ArrayBuffer(source);
		this._u8array=new Uint8Array(this.fileType);
		this._dataView=new DataView(this.fileType);
		
		source.copyToFile(this, 0);
		if(onLoad)
			onLoad.call();



	}else if(typeof source==='object' && typeof source.byteLength==='number'){ /* source is ArrayBuffer or TypedArray */
		this.fileName='file.bin';
		this.fileType='application/octet-stream';
		this.fileSize=source.byteLength;

		if(typeof source.buffer !== 'undefined')
			source=source.buffer;
		this._u8array=new Uint8Array(source);
		this._dataView=new DataView(source);

		if(onLoad)
			onLoad.call();



	}else if(typeof source==='number'){ /* source is integer (new empty file) */
		this.fileName='file.bin';
		this.fileType='application/octet-stream';
		this.fileSize=source;

		var ab=new ArrayBuffer(source);
		this._u8array=new Uint8Array(ab);
		this._dataView=new DataView(ab);

		if(onLoad)
			onLoad.call();
	}else{
		throw new Error('Invalid source');
	}
}
MarcFile.IS_MACHINE_LITTLE_ENDIAN=(function(){	/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView#Endianness */
	var buffer=new ArrayBuffer(2);
	new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
	// Int16Array uses the platform's endianness.
	return new Int16Array(buffer)[0] === 256;
})();



MarcFile.prototype.seek=function(offset){
	this.offset=offset;
}
MarcFile.prototype.skip=function(nBytes){
	this.offset+=nBytes;
}
MarcFile.prototype.isEOF=function(){
	return !(this.offset<this.fileSize)
}

MarcFile.prototype.slice=function(offset, len){
	len=len || (this.fileSize-offset);

	var newFile;

	if(typeof this._u8array.buffer.slice!=='undefined'){
		newFile=new MarcFile(0);
		newFile.fileSize=len;
		newFile._u8array=new Uint8Array(this._u8array.buffer.slice(offset, offset+len));
	}else{
		newFile=new MarcFile(len);
		this.copyToFile(newFile, offset, len, 0);
	}
	newFile.fileName=this.fileName;
	newFile.fileType=this.fileType;
	newFile.littleEndian=this.littleEndian;
	return newFile;
}


MarcFile.prototype.copyToFile=function(target, offsetSource, len, offsetTarget){
	if(typeof offsetTarget==='undefined')
		offsetTarget=offsetSource;

	len=len || (this.fileSize-offsetSource);

	for(var i=0; i<len; i++){
		target._u8array[offsetTarget+i]=this._u8array[offsetSource+i];
	}
}


MarcFile.prototype.save=function(){
	/* build the blob from smaller views: a single multi-GB part makes the
	   Blob constructor throw, but many smaller parts are stored fine */
	var CHUNK_SIZE=256*1024*1024;
	var parts=[];
	for(var i=0;i<this._u8array.length;i+=CHUNK_SIZE)
		parts.push(this._u8array.subarray(i, Math.min(i+CHUNK_SIZE, this._u8array.length)));

	var blob=new Blob(parts,{type:this.fileType});
	saveAs(blob,this.fileName);
}


MarcFile.prototype.readU8=function(){
	this._lastRead=this._u8array[this.offset];

	this.offset++;
	return this._lastRead
}
MarcFile.prototype.readU16=function(){
	if(this.littleEndian)
		this._lastRead=this._u8array[this.offset] + (this._u8array[this.offset+1] << 8);
	else
		this._lastRead=(this._u8array[this.offset] << 8) + this._u8array[this.offset+1];

	this.offset+=2;
	return this._lastRead >>> 0
}
MarcFile.prototype.readU24=function(){
	if(this.littleEndian)
		this._lastRead=this._u8array[this.offset] + (this._u8array[this.offset+1] << 8) + (this._u8array[this.offset+2] << 16);
	else
		this._lastRead=(this._u8array[this.offset] << 16) + (this._u8array[this.offset+1] << 8) + this._u8array[this.offset+2];

	this.offset+=3;
	return this._lastRead >>> 0
}
MarcFile.prototype.readU32=function(){
	if(this.littleEndian)
		this._lastRead=this._u8array[this.offset] + (this._u8array[this.offset+1] << 8) + (this._u8array[this.offset+2] << 16) + (this._u8array[this.offset+3] << 24);
	else
		this._lastRead=(this._u8array[this.offset] << 24) + (this._u8array[this.offset+1] << 16) + (this._u8array[this.offset+2] << 8) + this._u8array[this.offset+3];

	this.offset+=4;
	return this._lastRead >>> 0
}



MarcFile.prototype.readBytes=function(len){
	this._lastRead=new Array(len);
	for(var i=0; i<len; i++){
		this._lastRead[i]=this._u8array[this.offset+i];
	}

	this.offset+=len;
	return this._lastRead
}

MarcFile.prototype.readString=function(len){
	this._lastRead='';
	for(var i=0;i<len && (this.offset+i)<this.fileSize && this._u8array[this.offset+i]>0;i++)
		this._lastRead=this._lastRead+String.fromCharCode(this._u8array[this.offset+i]);

	this.offset+=len;
	return this._lastRead
}

MarcFile.prototype.writeU8=function(u8){
	this._u8array[this.offset]=u8;

	this.offset++;
}
MarcFile.prototype.writeU16=function(u16){
	if(this.littleEndian){
		this._u8array[this.offset]=u16 & 0xff;
		this._u8array[this.offset+1]=u16 >> 8;
	}else{
		this._u8array[this.offset]=u16 >> 8;
		this._u8array[this.offset+1]=u16 & 0xff;
	}

	this.offset+=2;
}
MarcFile.prototype.writeU24=function(u24){
	if(this.littleEndian){
		this._u8array[this.offset]=u24 & 0x0000ff;
		this._u8array[this.offset+1]=(u24 & 0x00ff00) >> 8;
		this._u8array[this.offset+2]=(u24 & 0xff0000) >> 16;
	}else{
		this._u8array[this.offset]=(u24 & 0xff0000) >> 16;
		this._u8array[this.offset+1]=(u24 & 0x00ff00) >> 8;
		this._u8array[this.offset+2]=u24 & 0x0000ff;
	}

	this.offset+=3;
}
MarcFile.prototype.writeU32=function(u32){
	if(this.littleEndian){
		this._u8array[this.offset]=u32 & 0x000000ff;
		this._u8array[this.offset+1]=(u32 & 0x0000ff00) >> 8;
		this._u8array[this.offset+2]=(u32 & 0x00ff0000) >> 16;
		this._u8array[this.offset+3]=(u32 & 0xff000000) >> 24;
	}else{
		this._u8array[this.offset]=(u32 & 0xff000000) >> 24;
		this._u8array[this.offset+1]=(u32 & 0x00ff0000) >> 16;
		this._u8array[this.offset+2]=(u32 & 0x0000ff00) >> 8;
		this._u8array[this.offset+3]=u32 & 0x000000ff;
	}

	this.offset+=4;
}


MarcFile.prototype.writeBytes=function(a){
	for(var i=0;i<a.length;i++)
		this._u8array[this.offset+i]=a[i]

	this.offset+=a.length;
}

MarcFile.prototype.writeString=function(str,len){
	len=len || str.length;
	for(var i=0;i<str.length && i<len;i++)
		this._u8array[this.offset+i]=str.charCodeAt(i);

	for(;i<len;i++)
		this._u8array[this.offset+i]=0x00;

	this.offset+=len;
}
