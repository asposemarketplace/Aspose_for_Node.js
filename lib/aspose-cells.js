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
function AsposeCells(config) {
	this.appSID = config.appSID;
	this.appKey = config.appKey;
	this.baseURI = config.baseURI;
}

/* Worksheet Methods */

AsposeCells.prototype.sortData = function(fileName,worksheetName,cellArea,sortOrder,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellArea = typeof cellArea !== 'undefined' ? cellArea : '';
    sortOrder = typeof sortOrder !== 'undefined' ? sortOrder : '';

    if(fileName === '' || worksheetName === '' || sortOrder === '' || cellArea === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/sort?cellArea=' + cellArea;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,sortOrder,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.copyWorksheet = function(fileName,worksheetName,newName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    newName = typeof newName !== 'undefined' ? newName : '';

    if(fileName === '' || worksheetName === '' || newName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + newName + '/copy?sourcesheet=' + worksheetName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,sortOrder,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.renameWorksheet = function(fileName,worksheetName,newName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    newName = typeof newName !== 'undefined' ? newName : '';

    if(fileName === '' || worksheetName === '' || newName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/Rename?newname=' + newName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,sortOrder,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getCellStyle = function(fileName,worksheetName,cellName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellName = typeof cellName !== 'undefined' ? cellName : 'A1';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/' + cellName + '/style';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Style);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getCell = function(fileName,worksheetName,cellName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellName = typeof cellName !== 'undefined' ? cellName : 'A1';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/' + cellName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Cell);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getColumn = function(fileName,worksheetName,colIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    colIndex = typeof colIndex !== 'undefined' ? colIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/columns/' + colIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Column);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.deleteRow = function(fileName,worksheetName,rowIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    rowIndex = typeof rowIndex !== 'undefined' ? rowIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/rows/' + rowIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                callback.call(null,false);
            }
        }
    });
};

AsposeCells.prototype.getRow = function(fileName,worksheetName,rowIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    rowIndex = typeof rowIndex !== 'undefined' ? rowIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/rows/' + rowIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Row);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getRowsCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/rows';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Rows.RowsCount);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.setCellValue = function(fileName,worksheetName,cellName,valueType,value,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellName = typeof cellName !== 'undefined' ? cellName : '';
    valueType = typeof valueType !== 'undefined' ? valueType : '';
    value = typeof value !== 'undefined' ? value : '';

    if(fileName === '' || worksheetName === '' || cellName === '' || value === '' || valueType === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/' + cellName + '?value=' + value + '&type=' + valueType;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        console.log(data);
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                callback.call(null,false);
            }
        }
    });
};

AsposeCells.prototype.setBackgroundImage = function(fileName,worksheetName,imageFilename,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    imageFilename = typeof imageFilename !== 'undefined' ? imageFilename : '';

    if(fileName === '' || worksheetName === '' || imageFilename === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/Background?imageFile=' + imageFilename;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        console.log(data);
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                callback.call(null,data);
            }
        }
    });
};

AsposeCells.prototype.deleteBackgroundImage = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/Background';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        console.log(data);
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                callback.call(null,data);
            }
        }
    });
};

AsposeCells.prototype.freezePanes = function(fileName,worksheetName,options,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    options = typeof options !== 'undefined' ? options : '';

    if(fileName === '' || worksheetName === '' || options === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/FreezePanes';
    strURI = strURI + '?' + qs.stringify(options);
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        console.log(data);
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                callback.call(null,data);
            }
        }
    });
};

AsposeCells.prototype.unfreezePanes = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === '' ){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/FreezePanes';
    strURI = strURI + '?' + qs.stringify(options);
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        console.log(data);
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                callback.call(null,data);
            }
        }
    });
};

AsposeCells.prototype.calculateFormula = function(fileName,worksheetName,formula,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    formula = typeof formula !== 'undefined' ? formula : 0;

    if(fileName === '' || worksheetName === '' || formula === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/formulaResult?formula='+formula;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Value.Value);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.moveWorksheet = function(fileName,worksheetName,destWorksheetName,position,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    destWorksheetName = typeof destWorksheetName !== 'undefined' ? destWorksheetName : '';
    position = typeof position !== 'undefined' ? position : 'AFTER';

    if(fileName === '' || worksheetName === '' || destWorksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/position';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    json_data = {'DestinationWorksheet':destWorksheetName,'Position':position};

    Utils.ProcessCommand('POST',signedURI,json_data,function(data){

        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                callback.call(null,false);
            }
        }
    });
};

AsposeCells.prototype.unhideWorksheet = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/visible?isVisible=true';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                callback.call(null,false);
            }
        }
    });
};

AsposeCells.prototype.hideWorksheet = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/visible?isVisible=false';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                callback.call(null,false);
            }
        }
    });
};

AsposeCells.prototype.getValidationsCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellIndex = typeof cellIndex !== 'undefined' ? cellIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/validations';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Validations.ValidationList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getMergedCellsCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellIndex = typeof cellIndex !== 'undefined' ? cellIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/mergedCells';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.MergedCells.Count);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getMergedCellByIndex = function(fileName,worksheetName,cellIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellIndex = typeof cellIndex !== 'undefined' ? cellIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/mergedCells/' + cellIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.MergedCell);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getValidationByIndex = function(fileName,worksheetName,validationIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    validationIndex = typeof validationIndex !== 'undefined' ? validationIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/validations/' + validationIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Validation);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getCommentsCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/comments';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Comments.CommentList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getComment = function(fileName,worksheetName,cellName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    cellName = typeof cellName !== 'undefined' ? cellName : '';

    if(fileName === '' || worksheetName === '' || cellName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/comments/' + cellName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Comment.HtmlNote);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getHyperlinkByIndex = function(fileName,worksheetName,hyperlinkIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    hyperlinkIndex = typeof hyperlinkIndex !== 'undefined' ? hyperlinkIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/hyperlinks/' + hyperlinkIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Hyperlink);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getHyperlinksCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/hyperlinks';
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

AsposeCells.prototype.getOleObjectsCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/oleobjects';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.OleObjects.OleObjectList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getPicturesCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/pictures';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Pictures.PictureList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getChartsCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/charts';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Charts.ChartList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getAutoShapesCount = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/autoshapes';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.AutoShapes.AutoShapeList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getCellsCount = function(fileName,worksheetName,offset,count,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    offset = typeof offset !== 'undefined' ? offset : 0;
    count = typeof count !== 'undefined' ? count : 200;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells?offset=' + offset + '&count=' + count;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Cells.CellCount);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getMaxRow = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/maxrow';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.getMaxColumn = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/maxcolumn';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.getColumnsList = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/columns';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Columns);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getRowsList = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells/rows';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){

        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Rows);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getCellsList = function(fileName,worksheetName,offset,count,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    offset = typeof offset !== 'undefined' ? offset : 0;
    count = typeof count !== 'undefined' ? count : 200;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/cells?offset=' + offset + '&count=' + count;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Cells);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

/* Workbook Methods */

AsposeCells.prototype.mergeWorkbook = function(fileName,mergewithFilename,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    mergewithFilename = typeof mergewithFilename !== 'undefined' ? mergewithFilename : '';

    if(fileName === '' || mergewithFilename === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/merge?mergeWith=' + mergewithFilename;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.splitWorkbook = function(fileName,saveFormat,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === '' || saveFormat === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/split?format=' + saveFormat;
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

AsposeCells.prototype.removeWorksheet = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName;
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

AsposeCells.prototype.addWorksheet = function(fileName,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'Created'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.clearModifyPassword = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/writeProtection';
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

AsposeCells.prototype.setModifyPassword = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/writeProtection';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {
        'Password':password
    }

    Utils.ProcessCommand('PUT',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,true);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.unprotectWorkbook = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/protection';
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

AsposeCells.prototype.protectWorkbook = function(fileName,protectionType,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    protectionType = typeof protectionType !== 'undefined' ? protectionType : 'all';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/protection';
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

AsposeCells.prototype.decryptWorkbook = function(fileName,password,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    password = typeof password !== 'undefined' ? password : '';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/encryption';
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

AsposeCells.prototype.encryptWorkbook = function(fileName,encType,password,keyLength,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    encType = typeof encType !== 'undefined' ? encType : 'XOR';
    password = typeof password !== 'undefined' ? password : '';
    keyLength = typeof keyLength !== 'undefined' ? keyLength : '128';

    if(fileName === '' || password === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/encryption';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    var json_data = {
                    'EncryptionType':encType,
                    'KeyLength':keyLength,
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

AsposeCells.prototype.getDefaultStyle = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/defaultStyle';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Style);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getNamesCount = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/names';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Names.Count);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getWorksheetsCount = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Worksheets.WorksheetList.length);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};


AsposeCells.prototype.createWorkbookFromSmartMarkerTemplate = function(fileName,templateFile,dataFile,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    templateFile = typeof templateFile !== 'undefined' ? templateFile : '';
    dataFile = typeof dataFile !== 'undefined' ? dataFile : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(templateFile === ''){
        throw new Error('Filename not defined.');
    }

    if(dataFile === ''){
        throw new Error('dataFile not defined.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '?templatefile=' + templateFile + '&dataFile=' + dataFile;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Workbook);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.createWorkbookFromTemplate = function(fileName,templateFile,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    templateFile = typeof templateFile !== 'undefined' ? templateFile : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(templateFile === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '?templatefile=' + templateFile;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Workbook);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.createEmptyWorkbook = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }


    var strURI = this.baseURI + 'cells/' + fileName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('PUT',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Workbook);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.removeProperties = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties';
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

AsposeCells.prototype.updateProperties = function(fileName,worksheetName,properties,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    properties = typeof properties !== 'undefined' ? properties : '';

    if(fileName === '' || worksheetName === '' || properties === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('POST',signedURI,properties,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.removeProperty = function(fileName,propertyName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('Property name not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties/' + propertyName;
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

AsposeCells.prototype.setProperty = function(fileName,propertyName,propertyValue,callback){
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

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties/' + propertyName;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    json_data = {'Value':propertyValue};

    Utils.ProcessCommand('PUT',signedURI,json_data,function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'Created'){
                callback.call(null,data.DocumentProperty);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

AsposeCells.prototype.getProperty = function(fileName,propertyName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    propertyName = typeof propertyName !== 'undefined' ? propertyName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(propertyName === ''){
        throw new Error('Property name not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties/' + propertyName;
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

AsposeCells.prototype.getProperties = function(fileName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/documentProperties';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.DocumentProperties.DocumentPropertyList);
            } else {
                throw new Error(data.Message);
            }
        }
    });
};

/* Conversion Methods */

AsposeCells.prototype.worksheetToImage = function(fileName,saveFormat,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.oleObjectToImage = function(fileName,saveFormat,worksheetName,oleObjectIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    oleObjectIndex = typeof oleObjectIndex !== 'undefined' ? oleObjectIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/oleobjects/' + oleObjectIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.chartToImage = function(fileName,saveFormat,worksheetName,chartIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    chartIndex = typeof chartIndex !== 'undefined' ? chartIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/charts/' + chartIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.getAutoshapeByIndex = function(fileName,worksheetName,autoshapeIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    autoshapeIndex = typeof autoshapeIndex !== 'undefined' ? autoshapeIndex : 0;

    if(fileName === '' || worksheetName === ''){
        throw new Error('missing required params.');
    }

    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/autoshapes/' + hyperlinkIndex;
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

AsposeCells.prototype.autoshapeToImage = function(fileName,saveFormat,worksheetName,autoshapeIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    autoshapeIndex = typeof autoshapeIndex !== 'undefined' ? autoshapeIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/autoshapes/' + autoshapeIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.pictureToImage = function(fileName,saveFormat,worksheetName,pictureIndex,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';
    pictureIndex = typeof pictureIndex !== 'undefined' ? pictureIndex : 0;

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '/pictures/' + pictureIndex + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.convertLocalFile = function(fileStream,saveFormat,callback){
    fileStream = typeof fileStream !== 'undefined' ? fileStream : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileStream === ''){
        throw new Error('file stream not provided.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }


    var strURI = this.baseURI + 'cells/convert?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandStream('PUT',signedURI,fileStream,function(data){

        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.convertToImage = function(fileName,saveFormat,worksheetName,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';
    worksheetName = typeof worksheetName !== 'undefined' ? worksheetName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }

    if(worksheetName === ''){
        throw new Error('worksheet name missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/worksheets/' + worksheetName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.convert = function(fileName,saveFormat,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('save format missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeCells.prototype.saveAs = function(fileName,options,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    options = typeof options !== 'undefined' ? options : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(options === ''){
        throw new Error('options missing.');
    }


    var strURI = this.baseURI + 'cells/' + fileName + '/saveAs';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('POST',signedURI,options,function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};


module.exports = AsposeCells;