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

/* Extraction Methods */

AsposePdf.prototype.getImageCount = function(fileName,pageNumber,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : 1;
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '/images';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Images.List.length);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.getImageDefaultSize = function(fileName,pageNumber,imageIndex,imageFormat,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : 1;
	imageIndex = typeof imageIndex !== 'undefined' ? imageIndex : 0;
	imageFormat = typeof imageFormat !== 'undefined' ? imageFormat : 'jpeg';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '/images/' + imageIndex + '?format=' + imageFormat;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		callback.call(null,data);
	});
};

AsposePdf.prototype.getImageCustomSize = function(fileName,pageNumber,imageIndex,imageFormat,imageWidth,imageHeight,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : 1;
	imageIndex = typeof imageIndex !== 'undefined' ? imageIndex : 0;
	imageFormat = typeof imageFormat !== 'undefined' ? imageFormat : 'jpeg';
	imageWidth = typeof imageWidth !== 'undefined' ? imageWidth : 100;
	imageHeight = typeof imageHeight !== 'undefined' ? imageHeight : 100;
	
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '/images/' + imageIndex + '?format=' + imageFormat + '&width=' + imageWidth + '&height=' + imageHeight;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		callback.call(null,data);
	});
};

/* Conversion Methods */

AsposePdf.prototype.convertLocalFile = function(fileStream,imageFormat,callback){
	fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
	imageFormat = typeof imageFormat !== 'undefined' ? imageFormat : '';
	
	if(fileStream === ''){
		throw new Error('file stream not provided.');
	}
		
	if(imageFormat === ''){
		throw new Error('image format missing.');
	}
	
	
	var strURI = this.baseURI + 'pdf/convert?format='+imageFormat;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandStream('PUT',signedURI,fileStream,function(data){

		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
};

AsposePdf.prototype.convert = function(fileName,imageFormat,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	imageFormat = typeof imageFormat !== 'undefined' ? imageFormat : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
		
	if(imageFormat === ''){
		throw new Error('image format missing.');
	}
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '?format='+imageFormat;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
};

AsposePdf.prototype.convertToImage = function(fileName,pageNumber,imageFormat,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : '';
	imageFormat = typeof imageFormat !== 'undefined' ? imageFormat : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(pageNumber === ''){
		throw new Error('page number not defined.');
	}
	
	if(imageFormat === ''){
		throw new Error('image format missing.');
	}
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '?format='+imageFormat;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
};

AsposePdf.prototype.convertToImagebySize = function(fileName,pageNumber,imageFormat,width,height,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : '';
	imageFormat = typeof imageFormat !== 'undefined' ? imageFormat : '';
	width = typeof width !== 'undefined' ? width : '';
	height = typeof height !== 'undefined' ? height : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(pageNumber === ''){
		throw new Error('page number not defined.');
	}
	
	if(imageFormat === '' || width === '' || height === ''){
		throw new Error('required parameter missing.');
	}
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '?format='+imageFormat+'&width='+width+'&height='+height;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		
		if(typeof callback === 'function'){
			callback.call(null,data);
		}
	});
};

/* PDF Document Methods */

AsposePdf.prototype.splitPagesToAnyFormat = function(fileName,from,to,format,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	from = typeof from !== 'undefined' ? from : 0;
	to = typeof to !== 'undefined' ? to : 0;
	format = typeof format !== 'undefined' ? format : 'pdf';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/split?from='+from+'&to='+to+'&format='+format;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('POST',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Result.Documents);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.splitPages = function(fileName,from,to,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	from = typeof from !== 'undefined' ? from : 0;
	to = typeof to !== 'undefined' ? to : 0;
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/split?from='+from+'&to='+to;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('POST',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Result.Documents);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.splitAllPages = function(fileName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/split';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('POST',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Result.Documents);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.removeAllProperties = function(fileName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/documentProperties';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('DELETE',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,true);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.setDocumentProperty = function(fileName,propertyName,propertyValue,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	propertyName = typeof propertyName !== 'undefined' ? propertyName : '';
	propertyValue = typeof propertyValue !== 'undefined' ? propertyValue : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(propertyName === ''){
		throw new Error('propertyName not defined.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/documentProperties/' + propertyName;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var json_data = {'Value':propertyValue};
	
	Utils.ProcessCommand('PUT',signedURI,json_data,function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.DocumentProperty);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.getDocumentProperty = function(fileName,propertyName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	propertyName = typeof propertyName !== 'undefined' ? propertyName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(propertyName === ''){
		throw new Error('propertyName not defined.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/documentProperties/' + propertyName;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.DocumentProperty);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.getDocumentProperties = function(fileName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/documentProperties';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.DocumentProperties.List);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposePdf.prototype.replaceImageUsingFile = function(fileName,pageNumber,imageIndex,imageFilename,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : '';
	imageIndex = typeof imageIndex !== 'undefined' ? imageIndex : '';
	imageFilename = typeof imageFilename !== 'undefined' ? imageFilename : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	if(pageNumber === ''){
		throw new Error('page number not provided.');
	}
	
	if(imageIndex === ''){
		throw new Error('image index not provided.');
	}
	
	if(imageFilename === ''){
		throw new Error('image filename not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '/images/' + imageIndex + '?imageFile=' + imageFilename;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('POST',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		if(data.Status === 'OK'){
			asposeStorage.getFile(fileName, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Message);
		}
	});
};

AsposePdf.prototype.replaceImageUsingStream = function(fileName,pageNumber,imageIndex,imageStream,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : '';
	imageIndex = typeof imageIndex !== 'undefined' ? imageIndex : '';
	imageStream = typeof imageStream !== 'undefined' ? imageStream : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	if(pageNumber === ''){
		throw new Error('page number not provided.');
	}
	
	if(imageIndex === ''){
		throw new Error('image index not provided.');
	}
	
	if(imageStream === ''){
		throw new Error('image stream not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '/images/' + imageIndex;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.UploadFileBinary('POST',signedURI,imageStream,function(data){
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		if(data.Status === 'OK'){
			asposeStorage.getFile(fileName, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Message);
		}
	});
};

AsposePdf.prototype.movePage = function(fileName,pageNumber,newIndexLocation,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : '';
	newIndexLocation = typeof newIndexLocation !== 'undefined' ? newIndexLocation : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	if(pageNumber === ''){
		throw new Error('page number not provided.');
	}
	
	if(newIndexLocation === ''){
		throw new Error('new index location not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber + '/movePage?newIndex=' + newIndexLocation;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('POST',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		if(data.Status === 'OK'){
			asposeStorage.getFile(fileName, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Message);
		}
	});
};

AsposePdf.prototype.deletePage = function(fileName,pageNumber,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	if(pageNumber === ''){
		throw new Error('page number not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages/' + pageNumber;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('DELETE',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		if(data.Status === 'OK'){
			asposeStorage.getFile(fileName, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Message);
		}
	});
};

AsposePdf.prototype.addNewPage = function(fileName,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName + '/pages';
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('PUT',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		if(data.Status === 'OK'){
			asposeStorage.getFile(fileName, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Message);
		}
	});
};

AsposePdf.prototype.createEmptyPdf = function(fileName,callback){
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	
	if(fileName === ''){
		throw new Error('filename not provided.');
	}
	
	var strURI = this.baseURI + 'pdf/' + fileName;
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('PUT',signedURI,'',function(data){
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		if(data.Status === 'OK'){
			asposeStorage.getFile(fileName, '', function(data){
				if(typeof callback === 'function'){
					callback.call(null,data);
				}
			});
		} else {
			throw new Error(data.Message);
		}
	});
};

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
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
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
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
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
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		
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