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
function AsposeCells(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

/* Workbook Methods */

AsposeCells.prototype.mergeWorkbook = function(fileName,mergewithFilename,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    mergewithFilename = typeof mergewithFilename !== 'undefined' ? mergewithFilename : '';

    if(fileName === '' || mergewithFilename === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/merge?mergeWith=' + mergewithFilename;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.removeWorksheet = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName;
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

AsposeCells.prototype.addWorksheet = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'Created'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.clearModifyPassword = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/writeProtection';
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

AsposeCells.prototype.setModifyPassword = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/writeProtection';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {
        'Password':password
    }

    Utils.ProcessCommand('PUT',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.unprotectWorkbook = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/protection';
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

AsposeCells.prototype.protectWorkbook = function(fileName,protectionType,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    protectionType = typeof protectionType !== 'undefined' ? protectionType : 'all';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/protection';
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

AsposeCells.prototype.decryptWorkbook = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/encryption';
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

AsposeCells.prototype.encryptWorkbook = function(fileName,encType,password,keyLength,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    encType = typeof encType !== 'undefined' ? encType : 'XOR';
    password = typeof password !== 'undefined' ? password : '';
    keyLength = typeof keyLength !== 'undefined' ? keyLength : '128';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/encryption';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {
                    'EncryptionType':encType,
                    'KeyLength':keyLength,
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

AsposeCells.prototype.getDefaultStyle = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/defaultStyle';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Style);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getNamesCount = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/names';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Names.Count);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getWorksheetsCount = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Worksheets.WorksheetList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};


AsposeCells.prototype.createWorkbookFromSmartMarkerTemplate = function(fileName,templateFile,dataFile,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    templateFile = typeof templateFile !== 'undefined' ? templateFile : '';
    dataFile = typeof dataFile !== 'undefined' ? dataFile : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(templateFile === ''){
        throw new Error('Filename not defined.');
    }

    if(dataFile === ''){
        throw new Error('dataFile not defined.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '?templatefile=' + templateFile + '&dataFile=' + dataFile;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Workbook);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.createWorkbookFromTemplate = function(fileName,templateFile,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    templateFile = typeof templateFile !== 'undefined' ? templateFile : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(templateFile === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '?templatefile=' + templateFile;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Workbook);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.createEmptyWorkbook = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'cells/' + fileName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Workbook);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.removeProperties = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties';
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

AsposeCells.prototype.removeProperty = function(fileName,propertyName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('Property name not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties/' + propertyName;
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

AsposeCells.prototype.setProperty = function(fileName,propertyName,propertyValue,callback){
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

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties/' + propertyName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    json_data = {'Value':propertyValue};

    Utils.ProcessCommand('PUT',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'Created'){
                callback.call(null,data.DocumentProperty);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getProperty = function(fileName,propertyName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('Property name not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties/' + propertyName;
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

AsposeCells.prototype.getProperties = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.DocumentProperties.DocumentPropertyList);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

/* Conversion Methods */

AsposeCells.prototype.worksheetToImage = function(fileName,saveFormat,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.oleObjectToImage = function(fileName,saveFormat,worksheetName,oleObjectIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    oleObjectIndex = typeof oleObjectIndex !== 'undefined' ? oleObjectIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/oleobjects/' + oleObjectIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.chartToImage = function(fileName,saveFormat,worksheetName,chartIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    chartIndex = typeof chartIndex !== 'undefined' ? chartIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/charts/' + chartIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.autoshapeToImage = function(fileName,saveFormat,worksheetName,autoshapeIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    autoshapeIndex = typeof autoshapeIndex !== 'undefined' ? autoshapeIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/autoshapes/' + autoshapeIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.pictureToImage = function(fileName,saveFormat,worksheetName,pictureIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    pictureIndex = typeof pictureIndex !== 'undefined' ? pictureIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/pictures/' + pictureIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.convertLocalFile = function(fileStream,saveFormat,callback){
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileStream === ''){
        throw new Error('file stream not provided.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }


    var strURI = this.baseURI + 'cells/convert?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('PUT',signedURI,fileStream,function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.convertToImage = function(fileName,saveFormat,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.convert = function(fileName,saveFormat,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};


module.exports = AsposeCells;