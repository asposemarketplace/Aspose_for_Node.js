[![npm version](https://badge.fury.io/js/asposecloud.svg)](http://badge.fury.io/js/asposecloud)
Aspose Cloud SDK for Node.JS
==================

This repository holds Aspose Cloud SDK / Examples for Node.js platform.

How to Use
==========
```javascript
var AsposeCloud = require('../lib/aspose-cloud');
var AsposeStorage = require('../lib/aspose-storage');
var AsposePdf = require('../lib/aspose-pdf');

var AppSID = '3395ba5c-****';
var AppKey = 'e8dd1b027****';

var BaseProductUri = 'http://api.aspose.com/v1.1/';


var asposeapp = new AsposeCloud({'appSID':AppSID,'appKey':AppKey,'baseURI':BaseProductUri});
console.log(aspose);

var pdf = new AsposePdf(asposeapp);
console.log(pdf);

var storage = new AsposeStorage(asposeapp);
console.log(storage);
```
Start a Free Trail Today
========================
Start a free trial today – all you need is to [sign up](https://cloud.aspose.com/SignUp) with Aspose for Cloud service. Once you have signed up, you are ready to try powerful file processing features offered by Aspose for Cloud.
