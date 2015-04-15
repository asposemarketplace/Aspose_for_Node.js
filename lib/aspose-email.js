var Utils = require('./utils');
var path = require('path');
var fs = require('fs');
var AsposeStorage = require('./aspose-storage');

function AsposeEmail(config) {
    this.appSID = config.appSID;
    this.appKey = config.appKey;
    this.baseURI = config.baseURI;
}

/* Conversion Methods */

AsposeEmail.prototype.convert = function(fileName,saveFormat,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('image format missing.');
    }


    var strURI = this.baseURI + 'email/' + fileName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/* Email Document Methods */

AsposeEmail.prototype.getEmailProperties = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'email/' + fileName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeEmail.prototype.getEmailProperty = function(fileName,propertyName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('propertyName not defined.');
    }

    var strURI = this.baseURI + 'email/' + fileName + '/properties/' + propertyName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.EmailProperty.Value);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeEmail.prototype.setEmailProperty = function(fileName,propertyName,propertyValue,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';
    propertyValue = typeof propertyValue !== 'undefined' ? propertyValue : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('propertyName not defined.');
    }

    var strURI = this.baseURI + 'email/' + fileName + '/properties/' + propertyName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {'Value':propertyValue};

    Utils.ProcessCommand('PUT',signedURI,json_data,function(data){

        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.EmailProperty.Value);
            } else {
                throw new Error(data);
            }
        }
    });
};

AsposeEmail.prototype.getAttachment = function(fileName,attachmentName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    attachmentName = typeof attachmentName !== 'undefined' ? attachmentName : 1;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'email/' + fileName + '/attachments/' + attachmentName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeEmail.prototype.addAttachment = function(fileName,attachmentName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    attachmentName = typeof attachmentName !== 'undefined' ? attachmentName : 1;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'email/' + fileName + '/attachments/' + attachmentName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/**
 *
 * @type {AsposeEmail}
 */

module.exports = AsposeEmail;