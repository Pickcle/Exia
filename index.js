var server = require('./server.js');
var router = require('./router.js');
var requestHandler = require('./requestHandler.js');

var handlers = {};
handlers['/'] = requestHandler.start;
handlers['/start'] = requestHandler.start;
handlers['/upload'] = requestHandler.upload;
handlers['/getHtml'] = requestHandler.getHtml;

server.start(router.route, handlers);
