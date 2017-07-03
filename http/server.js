var http = require('http')
var url = require('url')
var fs = require('fs')

var responseHead = {
  'content-type': 'text/plain',
  'access-control-allow-origin': '*'
}

http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname
  console.log('received request', pathname)

  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log('xhjLog: error', err)
      response.writeHead(404, responseHead)
    } else {
      response.writeHead(200, responseHead)
      response.write(data.toString())
    }
    response.end()
  })
}).listen(6060)
