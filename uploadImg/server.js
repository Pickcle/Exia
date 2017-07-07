var http = require('http');
var url = require('url');
// var formidable = require('formidable');
var util = require('util');

function start(route, handlers) {

  http.createServer(function(request, response) {

    // if (request.url == '/show' && request.method.toLowerCase() == 'post') {
    //   // parse a file upload
    //   var form = new formidable.IncomingForm();
    //   form.parse(request, function(err, fields, files) {
    //     response.writeHead(200, {'content-type': 'text/plain'});
    //     response.write('received upload:\n\n');
    //     response.end(util.inspect({fields: fields, files: files}));
    //   });
    // } else {
      var pathname = url.parse(request.url).pathname;
      console.log('Request for ' + pathname + ' received.');

      route(pathname, handlers, request, response);
    // }

  }).listen(6060);

  console.log('server started.');

}

exports.start = start;

// function start(route, handlers) {
//
//   function onRequest(request, response) {
//     var postData = '';
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + ' received.');
//
//     request.setEncoding('utf-8');
//
//     request.addListener('data', function(postDataChunk) {
//       postData += postDataChunk;
//       console.log('Received POST data chunk' + postDataChunk);
//     })
//
//     request.addListener('end', function() {
//       route(pathname, handlers, response, postData);
//     })
//   }
//
//   http.createServer(onRequest).listen(8080);
//
//   console.log('server started.');
// }
