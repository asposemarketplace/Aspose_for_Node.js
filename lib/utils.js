var crypto = require('crypto');
var http = require('http');
var url = require('url');

function Utils(){}

Utils.Sign = function(url,appSID,appKey){
	
	if (url.indexOf('?') < 0) {
		url += '?';
	} else {
		url += '&';
	}

	url += 'appSID=' + appSID;

	var signature = crypto.createHmac('sha1', appKey)
		.update(url)
		.digest('base64')
		.replace('=', '');
	url += '&signature=' + signature;

	return url;
};

Utils.ProcessCommand = function(method, request_url, data, callback){
	if (request_url.indexOf('http://') < 0 && request_url.indexOf('https://')) {
		throw new Error('Invalid URL ' + request_url);
	}

	if (request_url.indexOf('&signature=') < 0) {
		throw new Error('URL must be signed');
	}

	request_url = url.parse(request_url);

	var options = {
		method: method,
		protocol: request_url.protocol,
		hostname: request_url.hostname,
		path: request_url.path,
		headers: {
			Accepts: 'application/json'
		}
	};

	if (data) {
		data = JSON.stringify(data);
		options.headers['Content-Type'] = 'application/json';
		options.headers['Content-Length'] = data.length;
	} else {
		options.headers['Content-Length'] = 0;
	}

	var response_buffer = null;
	var request = http.request(options);

	request.on('response', function(response) {
		response.on('data', function(chunk) {
			if (response_buffer) {
				if (typeof (Buffer.concat) === 'function') {
					response_buffer = Buffer.concat([response_buffer, chunk]);
				} else {
					var holder = new Buffer(response_buffer.length + chunk.length);
					response_buffer.copy(holder);
					chunk.copy(holder, response_buffer.length);
					response_buffer = holder;
				}
			} else {
				response_buffer = chunk;
			}
		});

		response.on('end', function() {
			var json = JSON.parse(response_buffer.toString());
			if (typeof callback === 'function') {
				callback.call(null, json);
			}
		});
	});

	if (data) {
		request.end(data);
	} else {
		request.end();
	}
};

Utils.ProcessCommandContent = function(method, request_url, data, callback) {
	if (request_url.indexOf('http://') < 0 && request_url.indexOf('https://')) {
		throw new Error('Invalid URL ' + request_url);
	}

	if (request_url.indexOf('&signature=') < 0) {
		throw new Error('URL must be signed');
	}

	request_url = url.parse(request_url);

	var options = {
		method: method,
		protocol: request_url.protocol,
		hostname: request_url.hostname,
		path: request_url.path,
		headers: {}
	};

	if (data) {
		data = JSON.stringify(data);
		options.headers['Content-Type'] = 'application/json';
		options.headers['Content-Length'] = data.length;
	} else {
		options.headers['Content-Length'] = 0;
	}

	var response_buffer = null;
	var request = http.request(options);

	request.on('response', function(response) {
		response.on('data', function(chunk) {
			if (response_buffer) {
				if (typeof (Buffer.concat) === 'function') {
					response_buffer = Buffer.concat([response_buffer, chunk]);
				} else {
					var holder = new Buffer(response_buffer.length + chunk.length);
					response_buffer.copy(holder);
					chunk.copy(holder, response_buffer.length);
					response_buffer = holder;
				}
			} else {
				response_buffer = chunk;
			}
		});

		response.on('end', function() {
			if (typeof callback === 'function') {
				callback.call(null, response_buffer);
			}
		});
	});

	if (data) {
		request.end(data);
	} else {
		request.end();
	}
};

Utils.UploadFileBinary = function(method, request_url, data, callback) {
	if (request_url.indexOf('http://') < 0 && request_url.indexOf('https://')) {
		throw new Error('Invalid URL ' + request_url);
	}

	if (request_url.indexOf('&signature=') < 0) {
		throw new Error('URL must be signed');
	}

	request_url = url.parse(request_url);

	var options = {
		method: method,
		protocol: request_url.protocol,
		hostname: request_url.hostname,
		path: request_url.path,
		headers: {
			Accepts: 'application/json'
		}
	};

	if (data) {
		options.headers['Content-Length'] = data.length;
	} else {
		options.headers['Content-Length'] = 0;
	}

	var response_buffer = null;
	var request = http.request(options);

	request.on('response', function(response) {
		response.on('data', function(chunk) {
			if (response_buffer) {
				if (typeof (Buffer.concat) === 'function') {
					response_buffer = Buffer.concat([response_buffer, chunk]);
				} else {
					var holder = new Buffer(response_buffer.length + chunk.length);
					response_buffer.copy(holder);
					chunk.copy(holder, response_buffer.length);
					response_buffer = holder;
				}
			} else {
				response_buffer = chunk;
			}
		});

		response.on('end', function() {
			var json = JSON.parse(response_buffer.toString());
			if (typeof callback === 'function') {
				callback.call(null, json);
			}
		});
	});

	if (data) {
		request.end(data);
	} else {
		request.end();
	}
};

Utils.ProcessCommandStream = function(method, request_url, data, callback) {
	if (request_url.indexOf('http://') < 0 && request_url.indexOf('https://')) {
		throw new Error('Invalid URL ' + request_url);
	}

	if (request_url.indexOf('&signature=') < 0) {
		throw new Error('URL must be signed');
	}

	request_url = url.parse(request_url);

	var options = {
		method: method,
		protocol: request_url.protocol,
		hostname: request_url.hostname,
		path: request_url.path,
		headers: {
			Accepts: 'application/json'
		}
	};

	if (data) {
		options.headers['Content-Length'] = data.length;
	} else {
		options.headers['Content-Length'] = 0;
	}

	var response_buffer = null;
	var request = http.request(options);

	request.on('response', function(response) {
		response.on('data', function(chunk) {
			if (response_buffer) {
				if (typeof (Buffer.concat) === 'function') {
					response_buffer = Buffer.concat([response_buffer, chunk]);
				} else {
					var holder = new Buffer(response_buffer.length + chunk.length);
					response_buffer.copy(holder);
					chunk.copy(holder, response_buffer.length);
					response_buffer = holder;
				}
			} else {
				response_buffer = chunk;
			}
		});

		response.on('end', function() {
			if (typeof callback === 'function') {
				callback.call(null, response_buffer);
			}
		});
	});

	if (data) {
		request.end(data);
	} else {
		request.end();
	}
};

module.exports = Utils;