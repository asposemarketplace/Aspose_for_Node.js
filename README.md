##IMPORTANT NOTICE
This SDK is no longer updated because we have created a newer and much improved version of this SDK available at following product wise repositories
* [Aspose.Storage Cloud SDK for Node.js](https://github.com/aspose-total/Aspose.Total-for-Cloud/tree/master/SDKs/Aspose.Storage-Cloud-SDK-for-NodeJS)
* [Aspose.Words Cloud SDK for Node.js](https://github.com/aspose-words/Aspose.Words-for-Cloud/tree/master/SDKs/Aspose.Words-Cloud-SDK-for-NodeJS)
* [Aspose.Cells Cloud SDK for Node.js](https://github.com/aspose-cells/Aspose.Cells-for-Cloud/tree/master/SDKs/Aspose.Cells-Cloud-SDK-for-NodeJS)
* [Aspose.Slides Cloud SDK for Node.js](https://github.com/aspose-slides/Aspose.Slides-for-Cloud/tree/master/SDKs/Aspose.Slides-Cloud-SDK-for-NodeJS)
* [Aspose.Pdf Cloud SDK for Node.js](https://github.com/aspose-pdf/Aspose.Pdf-for-Cloud/tree/master/SDKs/Aspose.Pdf-Cloud-SDK-for-NodeJS)
* [Aspose.BarCode Cloud SDK for Node.js](https://github.com/aspose-barcode/Aspose.BarCode-for-Cloud/tree/master/SDKs/Aspose.BarCode-Cloud-SDK-for-NodeJS)
* [Aspose.Tasks Cloud SDK for Node.js](https://github.com/aspose-tasks/Aspose.Tasks-for-Cloud/tree/master/SDKs/Aspose.Tasks-Cloud-SDK-for-NodeJS)
* [Aspose.Email Cloud SDK for Node.js](https://github.com/aspose-email/Aspose.Email-for-Cloud/tree/master/SDKs/Aspose.Email-Cloud-SDK-for-NodeJS)
* [Aspose.Imaging Cloud SDK for Node.js](https://github.com/aspose-imaging/Aspose.Imaging-for-Cloud/tree/master/SDKs/Aspose.Imaging-Cloud-SDK-for-NodeJS)
* [Aspose.OCR Cloud SDK for Node.js](https://github.com/aspose-ocr/Aspose.OCR-for-Cloud/tree/master/SDKs/Aspose.OCR-Cloud-SDK-for-NodeJS)

You are kindly requested to try our new SDKs and then plan to migrate. We will be more than happy to help and assist you if you face any issues during or after migration. We will however continue to provide support to our existing customers for some time.

---

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
