var Utils = require('./utils');
var path = require('path');
var fs = require('fs');
var AsposeStorage = require('./aspose-storage');

function AsposeWords(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

/* Conversion Methods */

AsposeWords.prototype.convertLocalFile = function(fileStream,saveFormat,callback){
	fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
	saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
	
	if(fileStream === ''){
		throw new Error('file stream not provided.');
	}
		
	if(saveFormat === ''){
		throw new Error('save format missing.');
	}
	
	
	var strURI = this.baseURI + 'words/convert?format='+saveFormat;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandStream('PUT',signedURI,fileStream,function(data){

		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
};

AsposeWords.prototype.convert = function(fileName,saveFormat,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
		
	if(saveFormat === ''){
		throw new Error('save format missing.');
	}
	
	
	var strURI = this.baseURI + 'words/' + fileName + '?format='+saveFormat;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
};

module.exports = AsposeWords;