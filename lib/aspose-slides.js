var Utils = require('./utils');
var path = require('path');
var fs = require('fs');
var qs = require('querystring');
var AsposeStorage = require('./aspose-storage');

function AsposeSlides(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

/* Extraction Methods */

AsposeSlides.prototype.getPlaceholder = function(fileName,slideNumber,placeHolderIndex,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	placeHolderIndex = typeof placeHolderIndex !== 'undefined' ? placeHolderIndex : 0;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/placeholders/' + placeHolderIndex;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Placeholder);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getPlaceholderCount = function(fileName,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/placeholders';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Placeholders.PlaceholderLinks.length);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getFormatScheme = function(fileName,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/theme/formatScheme';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.FormatScheme);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getFontScheme = function(fileName,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/theme/fontScheme';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.FontScheme);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getColorScheme = function(fileName,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/theme/colorScheme';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.ColorScheme);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getShapes = function(fileName,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/shapes';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getShape = function(fileName,slideNumber,shapeIndex,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
    shapeIndex = typeof shapeIndex !== 'undefined' ? shapeIndex : 0;
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/shapes/' + shapeIndex;

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';

        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data);
            }
        }
    });
};

AsposeSlides.prototype.getBackground = function(fileName,slideNumber,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/background';

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';

        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data);
            }
        }
    });
};

AsposeSlides.prototype.deleteBackground = function(fileName,slideNumber,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/background';

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';

        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data);
            }
        }
    });
};

AsposeSlides.prototype.getSlideImageCount = function(fileName,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber + '/images';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Images.List.length);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getImageCount = function(fileName,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/images';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.Images.List.length);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

/* Conversion Methods */

AsposeSlides.prototype.convertToImagebySize = function(fileName,slideNumber,saveFormat,width,height,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : 'jpeg';
	width = typeof width !== 'undefined' ? width : '';
	height = typeof height !== 'undefined' ? height : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(width === '' || height === ''){
		throw new Error('missing required parameters.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	
	if( strURI.search('\\?') > 0 ){
		strURI = strURI + '&format=' + saveFormat + '&width=' + width + '&height=' + height;
	}else{
		strURI = strURI + '?format=' + saveFormat + '&width=' + width + '&height=' + height;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
				callback.call(null,data);
		}
	});
};

AsposeSlides.prototype.convertToImage = function(fileName,slideNumber,saveFormat,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : 'jpeg';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	
	if( strURI.search('\\?') > 0 ){
		strURI = strURI + '&format=' + saveFormat;
	}else{
		strURI = strURI + '?format=' + saveFormat;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
				callback.call(null,data);
		}
	});
};

AsposeSlides.prototype.convert = function(fileName,saveFormat,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : 'pdf';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	
	var strURI = this.baseURI + 'slides/' + fileName;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	
	if( strURI.search('\\?') > 0 ){
		strURI = strURI + '&format=' + saveFormat;
	}else{
		strURI = strURI + '?format=' + saveFormat;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
				callback.call(null,data);
		}
	});
};

AsposeSlides.prototype.convertWithAdditionalSettings = function(fileName,saveFormat,settings,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : 'pdf';
    settings = typeof settings !== 'undefined' ? settings : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'slides/' + fileName;

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';

        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }


    if( strURI.search('\\?') > 0 ){
        strURI = strURI + '&format=' + saveFormat;
    }else{
        strURI = strURI + '?format=' + saveFormat;
    }

    strURI = strURI + qs.stringify(settings);

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeSlides.prototype.convertLocalFile = function(fileStream,saveFormat,callback){
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileStream === ''){
        throw new Error('file stream not provided.');
    }

    if(saveFormat === ''){
        throw new Error('saveFormat missing.');
    }


    var strURI = this.baseURI + 'slides/convert?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('PUT',signedURI,fileStream,function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/* Slides Document Methods */

AsposeSlides.prototype.replaceText = function(fileName,oldText,newText,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	oldText = typeof oldText !== 'undefined' ? oldText : '';
	newText = typeof newText !== 'undefined' ? newText : '';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(oldText === '' || newText === ''){
		throw new Error('missing required parameters.');
	}
	
	var strURI = this.baseURI + 'slides/';
	
	if(slideNumber !== ''){
		strURI = strURI + fileName + '/slides/' + slideNumber + '/replaceText';
	}else{
		strURI = strURI + fileName + '/replaceText';
	}
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	
	if( strURI.search('\\?') > 0 ){
		strURI = strURI + '&oldValue=' + oldText + '&newValue=' + newText + '&ignoreCase=true';
	}else{
		strURI = strURI + '?oldValue=' + oldText + '&newValue=' + newText + '&ignoreCase=true';
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('POST',signedURI,'',function(data){
		
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getAllTextItems = function(fileName,slideNumber,withEmpty,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	withEmpty = typeof withEmpty !== 'undefined' ? withEmpty : false;
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'slides/';
	
	if(slideNumber !== ''){
		strURI = strURI + fileName + '/slides/' + slideNumber + '/textItems';
	}else{
		strURI = strURI + fileName + '/textItems';
	}
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	if(withEmpty){
		if( strURI.search('\\?') > 0 ){
			strURI = strURI + '&withEmpty=' + withEmpty;
		}else{
			strURI = strURI + '?withEmpty=' + withEmpty;
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data.TextItems.Items);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.saveSlideAs = function(fileName,saveFormat,slideNumber,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : 'pdf';
	slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	if( strURI.search('\\?') > 0 ){
		strURI = strURI + '&format=' + saveFormat;
	}else{
		strURI = strURI + '?format=' + saveFormat;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		
		if(typeof callback === 'function'){
			
			callback.call(null,data);
			
		}
	});
};

AsposeSlides.prototype.mergePresentations = function(fileName,mergeList,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'slides/' + fileName + '/merge';

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';
        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var post_data = JSON.stringify(mergeList);

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,post_data,function(data){
        if(typeof callback === 'function'){

            if(data.Status === 'OK'){
                callback.call(null,data.Document);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.splitPresentations = function(fileName,fromSlide,toSlide,destination,saveFormat,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    fromSlide = typeof fromSlide !== 'undefined' ? fromSlide : '';
    toSlide = typeof toSlide !== 'undefined' ? toSlide : '';
    destination = typeof destination !== 'undefined' ? destination : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === '' || fromSlide === '' || toSlide === '' ){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'slides/' + fileName + '/split';

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';
        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    strURI = strURI + qs.stringify({'from':fromSlide,'to':toSlide,'destFolder':destination,'format':saveFormat});

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){

            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.addSlide = function(fileName,position,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === '' ){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'slides/' + fileName + '/slides';

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';
        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    if( strURI.search('\\?') > 0 ){
        strURI = strURI + '&position=' + position;
    }else{
        strURI = strURI + '?position=' + position;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){

            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.cloneSlide = function(fileName,slideNo,position,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    slideNo = typeof slideNo !== 'undefined' ? slideNo : '';
    position = typeof position !== 'undefined' ? position : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === '' || slideNo === '' || position === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'slides/' + fileName + '/slides';

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';
        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    if( strURI.search('\\?') > 0 ){
        strURI = strURI + '&position=' + position + '&SlideToClone=' + slideNo;
    }else{
        strURI = strURI + '?position=' + position + '&SlideToClone=' + slideNo;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){

            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.changeSlidePosition = function(fileName,oldPosition,newPosition,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    oldPosition = typeof oldPosition !== 'undefined' ? oldPosition : '';
    newPosition = typeof newPosition !== 'undefined' ? newPosition : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === '' || oldPosition === '' || newPosition === ''){
        throw new Error('missing required parameters.');
    }

    var strURI = this.baseURI + 'slides/' + fileName + '/slides';

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';
        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    if( strURI.search('\\?') > 0 ){
        strURI = strURI + '&oldPosition=' + oldPosition + '&newPosition=' + newPosition;
    }else{
        strURI = strURI + '?oldPosition=' + oldPosition + '&newPosition=' + newPosition;
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){

            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.createEmptyPresentation = function(fileName,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'slides/' + fileName;

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';
        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){

            if(data.Status === 'OK'){
                callback.call(null,data.Document);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.saveAs = function(fileName,saveFormat,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : 'pdf';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	if( strURI.search('\\?') > 0 ){
		strURI = strURI + '&format=' + saveFormat;
	}else{
		strURI = strURI + '?format=' + saveFormat;
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommandContent('GET',signedURI,'',function(data){
		
		if(typeof callback === 'function'){
			
			callback.call(null,data);
			
		}
	});
};

AsposeSlides.prototype.addCustomProperty = function(fileName,propertyList,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	propertyList = typeof propertyList !== 'undefined' ? propertyList : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(propertyList === ''){
		throw new Error('Property list not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/presentation/documentProperties';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('POST',signedURI,propertyList,function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.setProperty = function(fileName,propertyName,propertyValue,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	propertyName = typeof propertyName !== 'undefined' ? propertyName : '';
	propertyValue = typeof propertyValue !== 'undefined' ? propertyValue : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(propertyName === ''){
		throw new Error('Property name not defined.');
	}
	
	if(propertyValue === ''){
		throw new Error('Property value not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/documentProperties/' + propertyName;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var json_data = {'Value':propertyValue};
	
	Utils.ProcessCommand('PUT',signedURI,json_data,function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,data.DocumentProperty);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.deleteDocumentProperty = function(fileName,propertyName,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	propertyName = typeof propertyName !== 'undefined' ? propertyName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(propertyName === ''){
		throw new Error('Property name not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/documentProperties/' + propertyName;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('DELETE',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,true);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.removeAllProperties = function(fileName,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/documentProperties';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('DELETE',signedURI,'',function(data){
		if(typeof callback === 'function'){
			if(data.Status === 'OK'){
				callback.call(null,true);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getDocumentProperty = function(fileName,propertyName,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	propertyName = typeof propertyName !== 'undefined' ? propertyName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	if(propertyName === ''){
		throw new Error('Property name not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/presentation/documentProperties/' + propertyName;
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data.DocumentProperty);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getDocumentProperties = function(fileName,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/documentProperties';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data.DocumentProperties.List);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.deleteAllSlides = function(fileName,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	var appSID = this.appSID;
	var appKey = this.appKey;
	var baseURI = this.baseURI;
	
	Utils.ProcessCommand('DELETE',signedURI,'',function(data){
		
		var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});
		
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				if(folderName !== ''){
					fileName = folderName + '/' + fileName;
				}
				asposeStorage.getFile(fileName, storageName, function(data){
					
					if(typeof callback === 'function'){
						callback.call(null,data);
					}
				});
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.deleteSlide = function(fileName,slideNumber,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : '';
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(slideNumber === ''){
        throw new Error('slideNumber not defined.');
    }

    var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber;

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';
        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var appSID = this.appSID;
    var appKey = this.appKey;
    var baseURI = this.baseURI;

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){

        var asposeStorage = new AsposeStorage({'appSID':appSID,'appKey':appKey,'baseURI':baseURI});

        if(typeof callback === 'function'){

            if(data.Status === 'OK'){
                if(folderName !== ''){
                    fileName = folderName + '/' + fileName;
                }
                asposeStorage.getFile(fileName, storageName, function(data){

                    if(typeof callback === 'function'){
                        callback.call(null,data);
                    }
                });
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.getSlideCount = function(fileName,folderName,storageName,callback){
	
	fileName = typeof fileName !== 'undefined' ? fileName : '';
	folderName = typeof folderName !== 'undefined' ? folderName : '';
	storageName = typeof storageName !== 'undefined' ? storageName : '';
	
	if(fileName === ''){
		throw new Error('Filename not defined.');
	}
	
	var strURI = this.baseURI + 'slides/' + fileName + '/slides';
	
	if(folderName !== '' || storageName !== ''){
		strURI = strURI + '?';
		if(folderName !== ''){
			strURI = strURI + 'folder=' + folderName;
		}
		
		if(storageName !== ''){
			if( folderName !== '' ){
				strURI = strURI + '&storage=' + storageName;
			}
			else{
				strURI = strURI + 'storage=' + storageName;
			}
		}
	}
	
	var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);
	
	Utils.ProcessCommand('GET',signedURI,'',function(data){
		if(typeof callback === 'function'){
			
			if(data.Status === 'OK'){
				callback.call(null,data.Slides.SlideList.length);
			} else {
				throw new Error(data.Status);
			}
		}
	});
};

AsposeSlides.prototype.getAspectRatio = function(fileName,slideNumber,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber ;

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';

        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Slide.Width / data.Slide.Height);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeSlides.prototype.getComments = function(fileName,slideNumber,folderName,storageName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';
    slideNumber = typeof slideNumber !== 'undefined' ? slideNumber : 1;
    folderName = typeof folderName !== 'undefined' ? folderName : '';
    storageName = typeof storageName !== 'undefined' ? storageName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'slides/' + fileName + '/slides/' + slideNumber ;

    if(folderName !== '' || storageName !== ''){
        strURI = strURI + '?';

        if(folderName !== ''){
            strURI = strURI + 'folder=' + folderName;
        }

        if(storageName !== ''){
            if( folderName !== '' ){
                strURI = strURI + '&storage=' + storageName;
            }
            else{
                strURI = strURI + 'storage=' + storageName;
            }
        }
    }

    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.SlideComments);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

module.exports = AsposeSlides;
