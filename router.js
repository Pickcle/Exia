function route(pathname, handlers, response, postData) {
  console.log('About to route a request for ' + pathname);
  if (typeof handlers[pathname] == 'function') {
    handlers[pathname](response, postData);
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, {'Content-Tppe': 'text/plain'});
    response.write('404 Not Found');
    response.end();
  }
}

exports.route = route;
