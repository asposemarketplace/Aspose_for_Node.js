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
var qs = require('querystring');
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

AsposeWords.prototype.executeMailMergeTemplate = function(fileName,jsonData,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    jsonData = typeof jsonData !== 'undefined' ? jsonData : '';

    if(fileName === '' || jsonData === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/executeTemplate';
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

AsposeWords.prototype.saveAs = function(fileName, options_xml, callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    options_xml = typeof options_xml !== 'undefined' ? options_xml : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(options_xml === ''){
        throw new Error('options_xml not defined.')
    }

    var strURI = this.baseURI + 'words/' + fileName + '/saveAs';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);


    Utils.ProcessCommand('POST',signedURI,options_xml,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.splitDocument = function(fileName, from, to, saveFormat, callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    from = typeof from !== 'undefined' ? from : '';
    to = typeof to !== 'undefined' ? to : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var qry = {};


    var strURI = this.baseURI + 'words/' + fileName + '/split';
    if(from !== '' || from > 0)
    {
        qry['from'] = from;
    }

    if(to !== '' || to > 0)
    {
        qry['to'] = to;
    }

    if(saveFormat !== '' || saveFormat > 0)
    {
        qry['format'] = saveFormat;
    }

    strURI = strURI + '?' + qs.stringify(qry);

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);


    Utils.ProcessCommand('POST',signedURI,options_xml,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

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

AsposeWords.prototype.getPageSetup = function(fileName, sectionID, callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    sectionID = typeof sectionID !== 'undefined' ? sectionID : '';

    if(fileName === '' || sectionID === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/sections/' + sectionID + '/pageSetup';
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

AsposeWords.prototype.updatePageSetup = function(fileName, sectionID, options, callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    sectionID = typeof sectionID !== 'undefined' ? sectionID : '';
    options = typeof options !== 'undefined' ? options : '';

    if(fileName === '' || sectionID === '' || options === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/sections/' + sectionID + '/pageSetup';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,options,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.insertPageNumber = function(fileName, options, callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    options = typeof options !== 'undefined' ? options : '';

    if(fileName === '' || options === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/insertPageNumbers';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,options,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.updateFields = function(fileName, callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/updateFields';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.acceptTrackingChanges = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/revisions/acceptAll';
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

AsposeWords.prototype.rejectTrackingChanges = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/revisions/rejectAll';
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

AsposeWords.prototype.appendDocuments = function(fileName,docList,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    docList = typeof docList !== 'undefined' ? docList : '';

    if(fileName === '' || docList === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/appendDocument';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,docList,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
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

AsposeWords.prototype.getHyperlinksCount = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/hyperlinks';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Hyperlinks.HyperlinkList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getHyperlinks = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/hyperlinks';
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

AsposeWords.prototype.getHyperlink = function(fileName,hyperlinkIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    hyperlinkIndex = typeof hyperlinkIndex !== 'undefined' ? hyperlinkIndex : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(hyperlinkIndex === ''){
        throw new Error('hyperlinkIndex not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/hyperlinks/' + hyperlinkIndex;
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

AsposeWords.prototype.removeAllHeaderFooter = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/headersFooters';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getBookmarksCount = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/bookmarks';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Bookmarks.BookmarkList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getBookmarks = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/bookmarks';
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

AsposeWords.prototype.getBookmark = function(fileName,bookmarkName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    bookmarkName = typeof bookmarkName !== 'undefined' ? bookmarkName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(bookmarkName === ''){
        throw new Error('bookmarkName not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/bookmarks/' + bookmarkName;
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

AsposeWords.prototype.updateBookmark = function(fileName,bookmarkName,bookmarkText,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    bookmarkName = typeof bookmarkName !== 'undefined' ? bookmarkName : '';
    bookmarkText = typeof bookmarkText !== 'undefined' ? bookmarkText : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(bookmarkName === ''){
        throw new Error('bookmarkName not defined.');
    }

    if(bookmarkText === ''){
        throw new Error('bookmarkText not defined.');
    }


    var strURI = this.baseURI + 'words/' + fileName + '/bookmarks/' + bookmarkName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {"Text": bookmarkText};

    Utils.ProcessCommand('POST',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getSections = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/sections';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Sections);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getStats = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/statistics';
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

AsposeWords.prototype.getDocumentProtection = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/protection';
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

AsposeWords.prototype.updateDocumentProtection = function(fileName,options,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    options = typeof options !== 'undefined' ? options : '';

    if(fileName === '' || options === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/protection';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,options,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getSection = function(fileName,sectionID,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    sectionID = typeof sectionID !== 'undefined' ? sectionID : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(sectionID === ''){
        throw new Error('sectionID not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/sections/' + sectionID;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Section);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getParagraphs = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/paragraphs';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Paragraphs);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getParagraph = function(fileName,paraID,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    paraID = typeof paraID !== 'undefined' ? paraID : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(paraID === ''){
        throw new Error('paraID not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/paragraphs/' + paraID;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Paragraph);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getMailMergeFields = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/mailMergeFieldNames';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.FieldNames);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getParagraphRun = function(fileName,paraID,runID,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    paraID = typeof paraID !== 'undefined' ? paraID : '';
    runID = typeof runID !== 'undefined' ? runID : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(paraID === ''){
        throw new Error('paraID not defined.');
    }

    if(runID === ''){
        throw new Error('runID not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/paragraphs/' + paraID + '/runs/' + runID;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Run);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeWords.prototype.getParagraphRunFont = function(fileName,paraID,runID,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    paraID = typeof paraID !== 'undefined' ? paraID : '';
    runID = typeof runID !== 'undefined' ? runID : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(paraID === ''){
        throw new Error('paraID not defined.');
    }

    if(runID === ''){
        throw new Error('runID not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/paragraphs/' + paraID + '/runs/' + runID + '/font';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Font);
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

AsposeWords.prototype.removeWatermark = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'words/' + fileName + '/watermark';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {'Text':text,'RotationAngle':rotationAngle};

    var appKey = this.appKey;
    var appSID = this.appSID;
    var baseURI = this.baseURI;

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
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

AsposeWords.prototype.convertWebpage = function(xml,callback){
    xml = typeof xml !== 'undefined' ? xml : '';

    if(xml === ''){
        throw new Error('xml not defined.');
    }


    var strURI = this.baseURI + 'words/loadWebDocument';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('POST',signedURI,xml,function(data){
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
