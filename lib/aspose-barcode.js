var Utils = require('./utils');
var path = require('path');
var fs = require('fs');
var qs = require('querystring');
var AsposeStorage = require('./aspose-storage');

function AsposeBarcode(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

/* Creation Methods */

AsposeBarcode.prototype.save = function(codeText,symbology,imageFormat,options,callback){
    codeText = typeof codeText !== 'undefined' ? codeText : '';
    symbology = typeof symbology !== 'undefined' ? symbology : 'QR';
    imageFormat = typeof imageFormat !== 'undefined' ? imageFormat : 'png';
    options = typeof options !== 'undefined' ? options : '';

    if(codeText === ''){
        throw new Error('Code text not provided.');
    }

    var extra_qry_str = qs.stringify(options);

    var strURI = this.baseURI + 'barcode/generate?text=' + codeText + '&type=' + symbology + '&format=' + imageFormat + '&' + extra_qry_str;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });

};

AsposeBarcode.prototype.save_in_cloud = function(codeText,symbology,fileName,options,callback){
    codeText = typeof codeText !== 'undefined' ? codeText : '';
    symbology = typeof symbology !== 'undefined' ? symbology : 'QR';
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    options = typeof options !== 'undefined' ? options : '';

    if(codeText === '' || fileName === ''){
        throw new Error('Required parameters missing.');
    }

    var extra_qry_str = qs.stringify(options);

    var strURI = this.baseURI + 'barcode/' + fileName + '/generate?text=' + codeText + '&type=' + symbology + '&' + extra_qry_str;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
    console.log(signedURI);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });

};


/* Reader Methods */

AsposeBarcode.prototype.readLocal = function(fileStream,symbology,callback){
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    symbology = typeof symbology !== 'undefined' ? symbology : '';

    if(fileStream === ''){
        throw new Error('File stream not provided.');
    }

    var strURI = this.baseURI + 'storage/file/barcode.png';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var baseURI = this.baseURI;
    var appSID = this.appSID;
    var appKey = this.appKey;

    Utils.UploadFileBinary('PUT',signedURI,fileStream,function(response){
        if(response.Status === 'OK'){

            var strURI = baseURI + 'barcode/recognize?url=' + baseURI + 'storage/file/barcode.png';
            if(symbology == ''){
                strURI = strURI + '&type=' + symbology;
            }

            var signedURI = Utils.Sign(strURI,appSID,appKey);

            Utils.ProcessCommand('POST',signedURI,'',function(data){

                if(typeof callback === 'function'){
                    if(data.Status === 'OK'){
                        callback.call(null,data.Barcodes);
                    } else {
                        throw new Error(data.Message);
                    }
                }
            });

        }
    });
};

AsposeBarcode.prototype.readExternal = function(url,symbology,callback){
    url = typeof url !== 'undefined' ? url : '';
    symbology = typeof symbology !== 'undefined' ? symbology : '';

    if(url === ''){
        throw new Error('External url not defined.');
    }

    var strURI = this.baseURI + 'barcode/recognize?url=' + url;
    if(symbology == ''){
        strURI = strURI + '&type=' + symbology;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){

        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Barcodes);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeBarcode.prototype.read = function(fileName,symbology,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    symbology = typeof symbology !== 'undefined' ? symbology : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'barcode/' + fileName + '/recognize';
    if(symbology == ''){
        strURI = strURI + '?type=' + symbology;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Barcodes);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeBarcode.prototype.readByAlgorithm = function(fileName,algo,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    algo = typeof algo !== 'undefined' ? algo : '';

    if(fileName === '' || algo === ''){
        throw new Error('Missing required parameters.');
    }

    var strURI = this.baseURI + 'barcode/' + fileName + '/recognize';
    if(algo != ''){
        strURI = strURI + '?BinarizationHints=' + algo;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Barcodes);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeBarcode.prototype.readRegion = function(fileName,symbology,x,y,w,h,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    symbology = typeof symbology !== 'undefined' ? symbology : '';
    x = typeof x !== 'undefined' ? x : '';
    y = typeof y !== 'undefined' ? y : '';
    w = typeof w !== 'undefined' ? w : '';
    h = typeof h !== 'undefined' ? h : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(x === '' || y === '' || w === '' || h === ''){
        throw new Error('dimenssions not defined.');
    }

    var strURI = this.baseURI + 'barcode/' + fileName + '/recognize?rectX=' + x + '&rectY=' + y + '&rectWidth=' + w + '&rectHeight=' + h;
    if(symbology == ''){
        strURI = strURI + '&type=' + symbology;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Barcodes);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeBarcode.prototype.readWithChecksum = function(fileName,symbology,checksumValidation,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    symbology = typeof symbology !== 'undefined' ? symbology : '';
    checksumValidation = typeof checksumValidation !== 'undefined' ? checksumValidation : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(checksumValidation === ''){
        throw new Error('checksumValidation not defined.');
    }

    var strURI = this.baseURI + 'barcode/' + fileName + '/recognize?checksumValidation=' + checksumValidation;
    if(symbology == ''){
        strURI = strURI + '&type=' + symbology;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Barcodes);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

AsposeBarcode.prototype.readBarcodeCount= function(fileName,symbology,barcodesCount,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    symbology = typeof symbology !== 'undefined' ? symbology : '';
    barcodesCount = typeof barcodesCount !== 'undefined' ? barcodesCount : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(barcodesCount === ''){
        throw new Error('barcodesCount not defined.');
    }

    var strURI = this.baseURI + 'barcode/' + fileName + '/recognize?barcodesCount=' + barcodesCount;
    if(symbology == ''){
        strURI = strURI + '&type=' + symbology;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Barcodes);
            } else {
                throw new Error(data.Message);
            }
        }
    });

};

module.exports = AsposeBarcode;
