var express = require('express')
var fs = require('fs')
var path = require('path')

var app = express()

app.use(express.static('client'))

app.get('/', function (req, res) {
  // res.sendFile('./client/index.html')
  res.send('get')
})

app.post('/file_upload', function (req, res) {
  // console.log(req)
  // fs.writeFileSync(__dirname + '/test.txt', 'test', function (err) {
  //   err && console.log(err)
  //   res.end('end')
  // })
})

app.get('/del', function (req, res) {
  // log(req, res)
  res.send('del' + JSON.stringify(req.query))
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
  console.log('------')
  console.log('app:', req.app)
  console.log('baseUrl:', req.baseUrl)
  console.log('originalUrl:', req.originalUrl)
  console.log('params:', req.params)
  console.log('path:', req.path)
  console.log('protocol:', req.protocol)
  console.log('query:', req.query)
  console.log('router:', req.router)
  console.log('subdomains:', req.subdomains)
  console.log('hostname:', req.hostname)
  console.log('accept:', req.accepts())
  console.log('------')
  // console.log(res.app)
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
