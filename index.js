var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers');

var handlers = {};
handlers['/'] = requestHandlers.start;
handlers['/start'] = requestHandlers.start;
handlers['/upload'] = requestHandlers.upload;
handlers['/getHtml'] = requestHandlers.getHtml;
handlers['/show'] = requestHandlers.show;
handlers['/uploadImg'] = requestHandlers.uploadImg;

server.start(router.route, handlers);
