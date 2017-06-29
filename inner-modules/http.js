var http = require('http')
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/javascript'})
  res.write('response')
  res.end()
}).listen(8080, function () {
  console.log('listening to:8080')
})
