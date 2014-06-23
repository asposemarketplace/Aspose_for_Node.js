var Utils = require('./utils');
var path = require('path');
var fs = require('fs');
var AsposeStorage = require('./aspose-storage');

function AsposeTasks(config) {
    this.appSID = config.appSID;
    this.appKey = config.appKey;
    this.baseURI = config.baseURI;
}

/* Resources Methods */

AsposeTasks.prototype.getResources = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/resources';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Resources.ResourceItem);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.getResource = function(fileName, resId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(resId === ''){
        throw new Error('resId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/resources/' + resId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Resource);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.addResource = function(fileName, resourceName, afterResourceId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(resourceName === ''){
        throw new Error('resourceName not defined.');
    }

    if(afterResourceId === ''){
        throw new Error('afterResourceId not defined.');
    }


    var strURI = this.baseURI + 'tasks/' + fileName + '/resources?resourceName='+resourceName+'&afterResourceId='+afterResourceId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'Created'){
                callback.call(null,data.ResourceItem);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.deleteResource= function(fileName, resId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(assignmentId === ''){
        throw new Error('assignmentId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/resources/' + resId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/* Calendar Methods */

AsposeTasks.prototype.getCalendars = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/calendars';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Calendars.List);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.getCalendar = function(fileName, calId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(calId === ''){
        throw new Error('calId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/calendars/' + calId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Calendar);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.deleteCalendar = function(fileName, calId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(calId === ''){
        throw new Error('calId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/calendars/' + calId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/* Assignment Methods */

AsposeTasks.prototype.getAssignments = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/assignments';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Assignments.AssignmentItem);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.getAssignment = function(fileName, assignmentId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(assignmentId === ''){
        throw new Error('assignmentId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/assignments/' + assignmentId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Assignment);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.addAssignment = function(fileName, taskId, resourceId, units, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(taskId === ''){
        throw new Error('taskId not defined.');
    }

    if(resourceId === ''){
        throw new Error('resourceId not defined.');
    }

    if(units === ''){
        throw new Error('units not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/assignments?taskUid='+taskId+'&resourceUid='+resourceId+'&units='+units;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
            /*if(data.Status === 'Created'){
                callback.call(null,data.AssignmentItem);
            } else {
                throw new Error(data.Status);
            }*/
        }
    });
};

AsposeTasks.prototype.deleteAssignment = function(fileName, assignmentId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(assignmentId === ''){
        throw new Error('assignmentId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/assignments/' + assignmentId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/* Conversion Methods */

AsposeTasks.prototype.convert = function(fileName,saveFormat,callback){
    fileName = typeof fileName !== 'undefined' ? fileName : '';
    saveFormat = typeof saveFormat !== 'undefined' ? saveFormat : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(saveFormat === ''){
        throw new Error('image format missing.');
    }


    var strURI = this.baseURI + 'tasks/' + fileName + '?format='+saveFormat;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommandContent('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

/* Document Methods */

AsposeTasks.prototype.getProperties = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/documentProperties';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Properties.List);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.getTasks = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/tasks';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Tasks.TaskItem);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.getTask = function(fileName, taskId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(taskId === ''){
        throw new Error('taskId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/tasks/' + taskId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.Task);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.addTask = function(fileName, taskName, beforeTaskId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(taskName === ''){
        throw new Error('taskName not defined.');
    }

    if(beforeTaskId === ''){
        throw new Error('beforeTaskId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/tasks?taskName='+taskName+'&beforeTaskId='+beforeTaskId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);


    Utils.ProcessCommand('POST',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'Created'){
                callback.call(null,data.TaskItem);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.deleteTask = function(fileName, taskId, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(taskId === ''){
        throw new Error('taskId not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/tasks/' + taskId;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeTasks.prototype.getLinks = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/taskLinks';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.TaskLinks);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.deleteLink = function(fileName, linkIndex, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(linkIndex === ''){
        throw new Error('linkIndex not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/taskLinks/' + linkIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeTasks.prototype.getOutlineCodes = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/outlineCodes';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.OutlineCodes);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.getOutlineCode = function(fileName, outlineCodeIndex, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(outlineCodeIndex === ''){
        throw new Error('outlineCodeIndex not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/outlineCodes/' + outlineCodeIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.OutlineCode);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.deleteOutlineCode = function(fileName, outlineCodeIndex, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(outlineCodeIndex === ''){
        throw new Error('outlineCodeIndex not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/outlineCodes/' + outlineCodeIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};

AsposeTasks.prototype.getExtendedAttributes = function(fileName,callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/extendedAttributes';
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.ExtendedAttributes);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.getExtendedAttribute = function(fileName, attrIndex, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(attrIndex === ''){
        throw new Error('attrIndex not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/extendedAttributes/' + attrIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('GET',signedURI,'',function(data){
        if(typeof callback === 'function'){
            if(data.Status === 'OK'){
                callback.call(null,data.ExtendedAttribute);
            } else {
                throw new Error(data.Status);
            }
        }
    });
};

AsposeTasks.prototype.deleteExtendedAttribute = function(fileName, attrIndex, callback){

    fileName = typeof fileName !== 'undefined' ? fileName : '';

    if(fileName === ''){
        throw new Error('Filename not defined.');
    }

    if(attrIndex === ''){
        throw new Error('attrIndex not defined.');
    }

    var strURI = this.baseURI + 'tasks/' + fileName + '/extendedAttributes/' + attrIndex;
    var signedURI = Utils.Sign(strURI,this.appSID,this.appKey);

    Utils.ProcessCommand('DELETE',signedURI,'',function(data){
        if(typeof callback === 'function'){
            callback.call(null,data);
        }
    });
};


/**
 *
 * @type {AsposeTasks}
 */

module.exports = AsposeTasks;