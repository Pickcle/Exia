var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers');

var handlers = {};
handlers['/'] = requestHandlers.start;
handlers['/start'] = requestHandlers.start;
handlers['/upload'] = requestHandlers.upload;
handlers['/getHtml'] = requestHandlers.getHtml;

server.start(router.route, handlers);
