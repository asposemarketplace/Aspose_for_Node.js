var Utils = require('./utils');
var path = require('path');
var fs = require('fs');
var AsposeStorage = require('./aspose-storage');

function AsposePdf(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
	
	this.str_uri_folder = this.baseURI + 'storage/folder';
	this.str_uri_file = this.baseURI + 'storage/file';
	this.str_uri_exist = this.baseURI + 'storage/exist';
	this.str_uri_disc = this.baseURI + 'storage/disc';
}

AsposePdf.prototype.getFormField = function(fileName,fieldName,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	fieldName = typeof fieldName !== 'undefined' ? fieldName : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	if(fieldName === ''){
		throw new Error('fieldName not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/fields/' + fieldName;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Field);
			} else {
				callback.call(null,data);
			}
		}
	});
};

AsposePdf.prototype.getFormFields = function(fileName,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/fields';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data.Fields.List);
			}
		}
	});
};

AsposePdf.prototype.getFormFieldCount = function(fileName,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/fields';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data.Fields.List.length);
			}
		}
	});
};

AsposePdf.prototype.createFromXml = function(pdfFilename,xsltFilename,xmlFilename,callback){
	pdfFilename = typeof pdfFilename !== 'undefined' ? pdfFilename : '';
	xmlFilename = typeof xmlFilename !== 'undefined' ? xmlFilename : '';
	xsltFilename = typeof xsltFilename !== 'undefined' ? xsltFilename : '';
	
	if(pdfFilename === ''){
		throw new Error('pdf filename not provided.');
	}
	
	if(xmlFilename === ''){
		throw new Error('xml filename not provided.');
	}
	
	if(xsltFilename === ''){
		throw new Error('xslt filename not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + pdfFilename + '?templateFile=' + xsltFilename  + '&dataFile=' + xmlFilename + '&templateType=xml';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('PUT',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage(appSID,appKey,baseURI);
		if(data.Status === 'OK'){
			asposeStorage.getFile(pdfFilename, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Message);
		}
	});
	
};

AsposePdf.prototype.createFromHtml = function(pdfFilename,htmlFilename,callback){
	pdfFilename = typeof pdfFilename !== 'undefined' ? pdfFilename : '';
	htmlFilename = typeof htmlFilename !== 'undefined' ? htmlFilename : '';
	
	if(pdfFilename === ''){
		throw new Error('pdf filename not provided.');
	}
	
	if(htmlFilename === ''){
		throw new Error('html filename not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + pdfFilename + '?templateFile=' + htmlFilename + '&templateType=html';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('PUT',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage(appSID,appKey,baseURI);
		if(data.Status === 'OK'){
			asposeStorage.getFile(pdfFilename, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Status);
		}
	});
	
};

AsposePdf.prototype.mergeDocuments = function(sourceFiles,targetFile,callback){
	sourceFiles = typeof sourceFiles !== 'undefined' ? sourceFiles : '';
	targetFile = typeof targetFile !== 'undefined' ? targetFile : '';
	
	if(sourceFiles === '' || sourceFiles.length < 2){
		throw new Error('source files not provied or less than two.');
	}
	
	if(targetFile === ''){
		throw new Error('target pdf not defined.');
	}
	
	var documents = {List:sourceFiles};
	var strURI = this.baseURI + 'pdf/' + targetFile + '/merge';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('PUT',signedURI,documents,function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
	
};

AsposePdf.prototype.appendDocument = function(basePdf,newPdf,startPage,endPage,callback){
	basePdf = typeof basePdf !== 'undefined' ? basePdf : '';
	newPdf = typeof newPdf !== 'undefined' ? newPdf : '';
	startPage = typeof startPage !== 'undefined' ? startPage : 0;
	endPage = typeof endPage !== 'undefined' ? endPage : 0;
	
	if(basePdf === ''){
		throw new Error('base pdf not defined.');
	}
	
	if(newPdf === ''){
		throw new Error('target pdf not defined.');
	}
	
	var strURI = this.baseURI + 'pdf/' + basePdf + '/appendDocument?appendFile=' + newPdf;
	if(startPage > 0){
		strURI = strURI + '&startPage=' + startPage;
	}
	
	if(endPage > 0){
		strURI = strURI + '&endPage=' + endPage;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('POST',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage(appSID,appKey,baseURI);
		
		if(data.Status === 'OK'){
			asposeStorage.getFile(basePdf, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Status);
		}
	});
};

AsposePdf.prototype.getPageCount = function(fileName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data.Pages.List.length);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

module.exports = AsposePdf;