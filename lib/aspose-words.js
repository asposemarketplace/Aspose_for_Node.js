/**
 *
 * @type {Utils|exports}
 */
var Utils = require('./utils');
/**
 *
 * @type {exports}
 */
var path = require('path');
/**
 *
 * @type {exports}
 */
var fs = require('fs');
/**
 *
 * @type {AsposeStorage|exports}
 */
var AsposeStorage = require('./aspose-storage');

/**
 *
 * @param config
 * @constructor
 */
function AsposeWords(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

/* MailMerge Methods */

AsposeWords.prototype.executeMailMergewithRegions = function(fileName,jsonData,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    jsonData = typeof jsonData !== 'undefined' ? jsonData : '';

    if(fileName === '' || jsonData === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/executeMailMerge?withRegions=true';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);


    var appKey = this.appKey;
    var appSID = this.appSID;
    var baseURI = this.baseURI;

    Utils.ProcessCommand('POST',signedURI,json_data,function(data){

        var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
        if(data.Status === 'OK'){
            asposeStorage.getFile(data.Document.Filename, '', function(data){
                if(typeof callback === 'function'){
                    callback.call(null,data);
                }
            });
        } else {
            throw new Error(data.Message);
        }
    });
};

AsposeWords.prototype.executeMailMerge = function(fileName,jsonData,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    jsonData = typeof jsonData !== 'undefined' ? jsonData : '';

    if(fileName === '' || jsonData === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/executeMailMerge';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);


    var appKey = this.appKey;
    var appSID = this.appSID;
    var baseURI = this.baseURI;

    Utils.ProcessCommand('POST',signedURI,json_data,function(data){

        var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
        if(data.Status === 'OK'){
            asposeStorage.getFile(data.Document.Filename, '', function(data){
                if(typeof callback === 'function'){
                    callback.call(null,data);
                }
            });
        } else {
            throw new Error(data.Message);
        }
    });
};

/* Document Methods */

AsposeWords.prototype.getDocumentInfo = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Document);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.unprotectDocument = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/protection';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {
        'Password':password
    }

    Utils.ProcessCommand('DELETE',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.protectDocument = function(fileName,protectionType,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    protectionType = typeof protectionType !== 'undefined' ? protectionType : 'all';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/protection';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {
        'ProtectionType':protectionType,
        'Password':password
    }

    Utils.ProcessCommand('POST',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.removeProperty = function(fileName,propertyName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('Property name not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/documentProperties/' + propertyName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.setProperty = function(fileName,propertyName,propertyValue,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';
    propertyValue = typeof propertyValue !== 'undefined' ? propertyValue : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('Property name not defined.');
    }

    if(propertyValue === ''){
        throw new Error('Property value not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/documentProperties/' + propertyName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    json_data = {'Value':propertyValue};

    Utils.ProcessCommand('PUT',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.DocumentProperty);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getProperty = function(fileName,propertyName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('Property name not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/documentProperties/' + propertyName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.DocumentProperty);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getProperties = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/documentProperties';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.DocumentProperties.List);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

/* Builder Methods */

AsposeWords.prototype.replaceText = function(fileName,oldValue,newValue,isMatchCase,isMatchWholeWord,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    oldValue = typeof oldValue !== 'undefined' ? oldValue : '';
    newValue = typeof newValue !== 'undefined' ? newValue : '';
    isMatchCase = typeof isMatchCase !== 'undefined' ? isMatchCase : false;
    isMatchWholeWord = typeof isMatchWholeWord !== 'undefined' ? isMatchWholeWord : true;

    if(fileName === '' || oldValue === '' || newValue === ''){
        throw new Error('missing required parameters.');
    }


    var strURI = this.baseURI + 'words/' + fileName + '/replaceText';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {
        'NewValue' : newValue,
        'OldValue' : oldValue,
        'IsMatchCase' : isMatchCase,
        'IsMatchWholeWord' : isMatchWholeWord
    };

    var appKey = this.appKey;
    var appSID = this.appSID;
    var baseURI = this.baseURI;

    Utils.ProcessCommand('POST',signedURI,json_data,function(data){

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

/**
 *
 * @param fileName
 * @param imageFile
 * @param rotationAngle
 * @param callback
 */

AsposeWords.prototype.insertWatermarkImage = function(fileName,imageFile,rotationAngle,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    imageFile = typeof imageFile !== 'undefined' ? imageFile : '';
    rotationAngle = typeof rotationAngle !== 'undefined' ? rotationAngle : '45.0';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(imageFile === ''){
        throw new Error('watermark image file not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/insertWatermarkImage?imageFile=' + imageFile + '&rotationAngle=' + rotationAngle;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var appKey = this.appKey;
    var appSID = this.appSID;
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

/**
 *
 * @param fileName
 * @param text
 * @param rotationAngle
 * @param callback
 */

AsposeWords.prototype.insertWatermarkText = function(fileName,text,rotationAngle,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    text = typeof text !== 'undefined' ? text : '';
    rotationAngle = typeof rotationAngle !== 'undefined' ? rotationAngle : '45.0';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(text === ''){
        throw new Error('watermark text not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/insertWatermarkText';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {'Text':text,'RotationAngle':rotationAngle};

    var appKey = this.appKey;
    var appSID = this.appSID;
    var baseURI = this.baseURI;

    Utils.ProcessCommand('POST',signedURI,json_data,function(data){
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

/* Extraction Methods */

/**
 *
 * @param fileName
 * @param callback
 */

AsposeWords.prototype.getDrawingObjectList = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/drawingObjects';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.DrawingObjects.List);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

/**
 *
 * @param fileName
 * @param index
 * @param renderFormat
 * @param callback
 */

AsposeWords.prototype.convertDrawingObject = function(fileName,index,renderFormat,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    index = typeof index !== 'undefined' ? index : 0;
    renderFormat = typeof renderFormat !== 'undefined' ? renderFormat : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/drawingObjects/' + index + '?format=' + renderFormat;

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/**
 *
 * @param fileName
 * @param index
 * @param callback
 */

AsposeWords.prototype.getImageData = function(fileName,index,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	index = typeof index !== 'undefined' ? index : 0;
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'words/' + fileName + '/drawingObjects/' + index + '/imageData';
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){

		if(typeof callback === 'function'){
            callback.call(null,data);
		}
	});
};

/**
 *
 * @param fileName
 * @param index
 * @param callback
 */

AsposeWords.prototype.getOleData = function(fileName,index,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	index = typeof index !== 'undefined' ? index : 0;
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'words/' + fileName + '/drawingObjects/' + index + '/oleData';
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
            callback.call(null,data);
		}
	});
};

/**
 *
 * @param fileName
 * @param pageNumber
 * @param callback
 */

AsposeWords.prototype.getText = function(fileName,pageNumber,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : 0;
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'words/' + fileName;
	if(pageNumber > 0){
		strURI = strURI + '/pages/' + pageNumber + '/TextItems';
	} else {
		strURI = strURI + '/TextItems';
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.TextItems.List);
			} else {
				throw new Error(data.Message);
			}
		}
	});
};

/* Conversion Methods */

/**
 *
 * @param fileStream
 * @param saveFormat
 * @param callback
 */

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

/**
 *
 * @param fileName
 * @param saveFormat
 * @param callback
 */

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

/**
 *
 * @type {AsposeWords}
 */

module.exports = AsposeWords;