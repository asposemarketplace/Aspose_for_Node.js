var Utils = require('./utils');
var path = require('path');
var fs = require('fs');

function AsposeStorage(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
	
	this.str_uri_folder = this.baseURI + 'storage/folder';
	this.str_uri_file = this.baseURI + 'storage/file';
	this.str_uri_exist = this.baseURI + 'storage/exist';
	this.str_uri_disc = this.baseURI + 'storage/disc';
}

AsposeStorage.prototype.createFolder = function(folderName,storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
		
	if(folderName === ''){
		throw new Error('Folder name not defined.');
	}
	
	var strURI = this.str_uri_folder + '/' + folderName;
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('PUT',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposeStorage.prototype.deleteFolder = function(folderName,storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
		
	if(folderName === ''){
		throw new Error('Folder name not defined.');
	}
	
	var strURI = this.str_uri_folder + '/' + folderName;
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('DELETE',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposeStorage.prototype.fileExists = function(fileName,storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.str_uri_exist + '/' + fileName;
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposeStorage.prototype.uploadFile = function(filePath,folderName,storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	filePath = typeof filePath !== 'undefined' ? filePath : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	
	if(filePath === ''){
		throw new Error('File path not defined.');
	}
	
	var remoteFilename = path.basename(filePath);
	
	var strURI = this.str_uri_file;
	
	if(folderName === ''){
		strURI = strURI + '/' + remoteFilename;
	} else {
		strURI = strURI + '/' + folderName + '/' + remoteFilename;
	}
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var buffer = fs.readFileSync(filePath);
	
	Utils.UploadFileBinary('PUT',signedURI,buffer,function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposeStorage.prototype.getFile = function(fileName,storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.str_uri_file + '/' + fileName;
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposeStorage.prototype.deleteFile = function(fileName,storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.str_uri_file + '/' + fileName;
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('DELETE',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposeStorage.prototype.getFilesList = function(folderName,storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	
	var strURI = this.str_uri_folder;
	
	if(folderName !== ''){
		strURI = strURI + '/' + folderName;
	}
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposeStorage.prototype.getDiscUsage = function(storageName,callback){
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	var strURI = this.str_uri_disc;
	
	if(storageName !== ''){
		strURI = strURI + '?storage=' + storageName;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
};

module.exports = AsposeStorage;