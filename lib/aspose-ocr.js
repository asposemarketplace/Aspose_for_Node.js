var Utils = require('./utils');
var path = require('path');
var fs = require('fs');
var AsposeStorage = require('./aspose-storage');

function AsposeOcr(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

/* Extraction Methods */

AsposeOcr.prototype.extractText = function(filename,language,defaultDict,callback){
    filename = typeof filename !== 'undefined' ? filename : '';
    language = typeof language !== 'undefined' ? language : 'English';
    defaultDict = typeof defaultDict !== 'undefined' ? defaultDict : true;

    if(filename === ''){
        throw new Error('filename not provided.');
    }

    var strURI = this.baseURI + 'ocr/' + filename + '/recognize?language=' + language + '&useDefaultDictionaries=' + defaultDict;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        console.log(data);
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Text);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeOcr.prototype.extractTextFromBlock = function(filename,language,defaultDict,x,y,width,height,callback){
    filename = typeof filename !== 'undefined' ? filename : '';
    language = typeof language !== 'undefined' ? language : 'English';
    defaultDict = typeof defaultDict !== 'undefined' ? defaultDict : true;
    x = typeof x !== 'undefined' ? x : '';
    y = typeof y !== 'undefined' ? y : '';
    width = typeof width !== 'undefined' ? width : '';
    height = typeof height !== 'undefined' ? height : '';

    if(filename === '' || x === '' || y === '' || width === '' || height === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'ocr/' + filename + '/recognize?language=' + language + '&useDefaultDictionaries='
        + defaultDict + '&rectX=' + x + '&rectY=' + y + '&rectWidth=' + width + '&rectHeight=' + height;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        console.log(data);
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Text);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeOcr.prototype.extractTextFromLocal = function(fileStream,language,defaultDict,callback){
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    language = typeof language !== 'undefined' ? language : 'English';
    defaultDict = typeof defaultDict !== 'undefined' ? defaultDict : true;

    if(fileStream === ''){
        throw new Error('filestream not provided.');
    }

    var strURI = this.baseURI + 'ocr/recognize?language=' + language + '&useDefaultDictionaries=' + defaultDict;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.UploadFileBinary('POST',signedURI,fileStream,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Text);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeOcr.prototype.extractTextFromUrl = function(url,language,defaultDict,callback){
    url = typeof url !== 'undefined' ? url : '';
    language = typeof language !== 'undefined' ? language : 'English';
    defaultDict = typeof defaultDict !== 'undefined' ? defaultDict : true;

    if(url === ''){
        throw new Error('Url not provided.');
    }

    var strURI = this.baseURI + 'ocr/recognize?url=' + url + '&language=' + language + '&useDefaultDictionaries=' + defaultDict;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Text);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

module.exports = AsposeOcr;