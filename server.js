var http = require('http');
var url = require('url');

function start(route, handlers) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    var query = url.parse(request.url).query;
    console.log('Request query: ' + query);

    route(pathname, handlers, response, query);

    // response.writeHead(200, {'Content-Tppe': 'text/plain'});
    // response.write(result);
    // response.end();
  }).listen(8080);

  console.log('server started.');
}

exports.start = start;
