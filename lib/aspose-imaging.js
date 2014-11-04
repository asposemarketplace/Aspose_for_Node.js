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
function AsposeImaging(config) {
    this.appSID = config.appSID;
    this.appKey = config.appKey;
    this.baseURI = config.baseURI;
}

/* Converter Methods */

AsposeImaging.prototype.convertTiffToFax = function (fileName, callback) {
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/tiff/' + fileName + '/toFax';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET', signedURI, '', function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.convertLocalFile = function (fileStream, fileName, saveFormat, callback) {
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileStream === '' || fileName === '' || saveFormat === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/saveAs?format=' + saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('GET', signedURI, fileStream, function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};



/* Document Methods */


AsposeImaging.prototype.updatePSDPropertiesLocal = function (fileStream, channelsCount, compressionMethod, callback) {
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    channelsCount = typeof channelsCount !== 'undefined' ? channelsCount : '';
    compressionMethod = typeof compressionMethod !== 'undefined' ? compressionMethod : '';

    if(fileStream === '' || channelsCount === '' || compressionMethod === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/psd?channelsCount=' + channelsCount +
        '&compressionMethod=' + compressionMethod;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET', signedURI, '', function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.updatePSDProperties = function (fileName, channelsCount, compressionMethod, outputPath, callback) {
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    channelsCount = typeof channelsCount !== 'undefined' ? channelsCount : '';
    compressionMethod = typeof compressionMethod !== 'undefined' ? compressionMethod : '';
    outputPath = typeof outputPath !== 'undefined' ? outputPath : '';

    if(fileName === '' || channelsCount === '' || compressionMethod === '' || outputPath === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/psd?channelsCount=' + channelsCount +
        '&compressionMethod=' + compressionMethod + '&output=' + outputPath;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET', signedURI, '', function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.updateJPGPropertiesLocal = function (fileStream, quality, compressionType, callback) {
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    quality = typeof quality !== 'undefined' ? quality : '';
    compressionType = typeof compressionType !== 'undefined' ? compressionType : '';

    if(fileStream === '' || quality === '' || compressionType === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/jpg?quality=' + quality +
        '&compressionType=' + compressionType;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('POST', signedURI, fileStream, function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.updateJPGProperties = function (fileName, quality, compressionType, outputPath, callback) {
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    quality = typeof quality !== 'undefined' ? quality : '';
    compressionType = typeof compressionType !== 'undefined' ? compressionType : '';
    outputPath = typeof outputPath !== 'undefined' ? outputPath : '';

    if(fileName === '' || quality === '' || compressionType === '' || outputPath === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/jpg?quality=' + quality +
        '&compressionType=' + compressionType + '&output=' + outputPath;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET', signedURI, '', function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.updateGIFPropertiesLocal = function (fileStream, bgColorIndex, pxAspectRatio, interlaced, outputPath, callback) {
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    bgColorIndex = typeof bgColorIndex !== 'undefined' ? bgColorIndex : '';
    pxAspectRatio = typeof pxAspectRatio !== 'undefined' ? pxAspectRatio : '';
    interlaced = typeof interlaced !== 'undefined' ? interlaced : '';

    if(fileStream === '' || bgColorIndex === '' || pxAspectRatio === '' || interlaced === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/gif?backgroundColorIndex=' + bgColorIndex +
        '&pixelAspectRatio=' + pxAspectRatio + '&interlaced=' + interlaced;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('POST', signedURI, fileStream, function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.updateGIFProperties = function (fileName, bgColorIndex, pxAspectRatio, interlaced, outputPath, callback) {
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    bgColorIndex = typeof bgColorIndex !== 'undefined' ? bgColorIndex : '';
    pxAspectRatio = typeof pxAspectRatio !== 'undefined' ? pxAspectRatio : '';
    interlaced = typeof interlaced !== 'undefined' ? interlaced : '';
    outputPath = typeof outputPath !== 'undefined' ? outputPath : '';

    if(fileName === '' || bgColorIndex === '' || pxAspectRatio === '' || interlaced === '' || outputPath === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/gif?backgroundColorIndex=' + bgColorIndex +
        '&pixelAspectRatio=' + pxAspectRatio + '&interlaced=' + interlaced + '&output=' + outputPath;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET', signedURI, '', function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.updateBMPPropertiesLocal = function (fileStream, bitsPerPx, hResolution, vResolution, outputPath, callback) {
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    bitsPerPx = typeof bitsPerPx !== 'undefined' ? bitsPerPx : '';
    hResolution = typeof hResolution !== 'undefined' ? hResolution : '';
    vResolution = typeof vResolution !== 'undefined' ? vResolution : '';
    outputPath = typeof outputPath !== 'undefined' ? outputPath : '';

    if(fileStream === '' || bitsPerPx === '' || hResolution === '' || vResolution === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/bmp?bitsPerPixel=' + bitsPerPx + '&horizontalResolution=' + hResolution +
        '&verticalResolution=' + vResolution;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('POST', signedURI, fileStream, function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};

AsposeImaging.prototype.updateBMPProperties = function (fileName, bitsPerPx, hResolution, vResolution, outputPath, callback) {
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    bitsPerPx = typeof bitsPerPx !== 'undefined' ? bitsPerPx : '';
    hResolution = typeof hResolution !== 'undefined' ? hResolution : '';
    vResolution = typeof vResolution !== 'undefined' ? vResolution : '';
    outputPath = typeof outputPath !== 'undefined' ? outputPath : '';

    if(fileName === '' || bitsPerPx === '' || hResolution === '' || vResolution === '' || outputPath === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/bmp?bitsPerPixel=' + bitsPerPx + '&horizontalResolution=' + hResolution +
        '&verticalResolution=' + vResolution + '&output=' + outputPath;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET', signedURI, '', function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }

    });

};


AsposeImaging.prototype.getProperties = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/properties';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

/* Image Methods */

AsposeImaging.prototype.rotateImage = function(fileName, method, outputPath, saveFormat, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    method = typeof method !== 'undefined' ? method : '';
    outputPath = typeof outputPath !== 'undefined' ? outputPath : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === '' || method === '' || outputPath === '' || saveFormat === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/rotateflip?method=' + method + '&outputPath=' + outputPath + '&format=' + saveFormat;

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });

};

AsposeImaging.prototype.cropImage = function(fileName, x, y, width, height, outputPath, saveFormat, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    x = typeof x !== 'undefined' ? x : '';
    y = typeof y !== 'undefined' ? y : '';
    width = typeof width !== 'undefined' ? width : '';
    height = typeof height !== 'undefined' ? height : '';
    outputPath = typeof outputPath !== 'undefined' ? outputPath : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === '' || x === '' || y === '' || width === '' || height === '' || outputPath === '' || saveFormat === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/' + fileName + '/crop?width=' + width + '&height=' + height +
        '&x=' + x + '&y=' + y + '&outputPath=' + outputPath + '&format=' + saveFormat;

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });

};

AsposeImaging.prototype.resizeImage = function(fileStream, newWidth, newHeight, saveFormat, callback){

    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    newWidth = typeof newWidth !== 'undefined' ? newWidth : '';
    newHeight = typeof newHeight !== 'undefined' ? newHeight : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileStream === '' || newWidth === '' || newHeight === '' || saveFormat === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'imaging/resize?newWidth=' + newWidth + '&newHeight=' + newHeight + '&format=' + saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('POST',signedURI,fileStream,function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });

};

/**
 *
 * @type {AsposeImaging}
 */

module.exports = AsposeImaging;
