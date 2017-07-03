var express = require('express')

var app = express()

app.use(express.static('client'))

app.get('/', function (req, res) {
  // res.sendFile('./client/index.html')
  res.send('get')
})

// app.post('/', function (req, res) {
//   res.send('post')
// })

app.get('/del', function (req, res) {
  res.send('del')
})

app.get('/list', function (req, res) {
  res.send('list')
})

app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

var server = app.listen(5051, function () {
  console.log(server.address().address)
  console.log(server.address().port)
})

function log(req, res) {
  console.log(req.app)
  console.log(req.baseUrl)
  console.log(req.originalUrl)
  console.log(req.params)
  console.log(req.path)
  console.log(req.protocol)
  console.log(req.query)
  console.log(req.router)
  console.log(req.subdomains)
  console.log(req.accepts())
  console.log(req.hostname)
  console.log('------')
  console.log(res.app)
  // console.log(res.ap)
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
  // console.log()
}
