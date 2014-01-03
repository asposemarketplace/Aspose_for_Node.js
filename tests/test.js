var fs = require('fs');
var AsposeCloud = require('../lib/aspose-cloud');
var AsposeStorage = require('../lib/aspose-storage');
var AsposePdf = require('../lib/aspose-pdf');

var AppSID = '****';
var AppKey = '****';

var BaseProductUri = 'http://api.aspose.com/v1.1/';


var config = {'appSID':AppSID,'appKey':AppKey,'baseURI':BaseProductUri};

var aspose = new AsposeCloud(config);
console.log(aspose);

var pdf = new AsposePdf(config);
console.log(pdf);

var storage = new AsposeStorage(config);
console.log(storage);