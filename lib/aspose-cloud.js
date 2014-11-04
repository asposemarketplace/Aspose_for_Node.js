var AsposeStorage = require('./aspose-storage');
var AsposePdf = require('./aspose-pdf');
var AsposeStorage = require('./aspose-storage');
var AsposeSlides = require('./aspose-slides');
var AsposeWords = require('./aspose-words');
var AsposeBarcode = require('./aspose-barcode');
var AsposeOcr = require('./aspose-ocr');
var AsposeCells = require('./aspose-cells');
var AsposeEmail = require('./aspose-email');
var AsposeTasks = require('./aspose-tasks');
var AsposeImaging = require('./aspose-imaging');


function AsposeCloud(config){
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

AsposeCloud.prototype.Pdf = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposePdf(config);
}

AsposeCloud.prototype.Storage = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeStorage(config);
}

AsposeCloud.prototype.Slides = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeSlides(config);
}

AsposeCloud.prototype.Words = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeWords(config);
}

AsposeCloud.prototype.Barcode = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeBarcode(config);
}

AsposeCloud.prototype.Ocr = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeOcr(config);
}

AsposeCloud.prototype.Cells = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeCells(config);
}

AsposeCloud.prototype.Email = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeEmail(config);
}

AsposeCloud.prototype.Tasks = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeTasks(config);
}

AsposeCloud.prototype.Imaging = function(){
    var config = {'appSID':this.appSID,'appKey':this.appKey,'baseURI':this.baseURI};
    return new AsposeImaging(config);
}

module.exports = AsposeCloud;
