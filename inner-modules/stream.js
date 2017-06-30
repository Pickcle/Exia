var fs = require('fs')
var zlib = require('zlib')
var file = 'inner-modules/version.txt'
var input = '1.0.0'
var data = ''

var readerStream = fs.createReadStream(file)

readerStream.setEncoding('UTF8')

readerStream.on('data', function (chunk) {
  console.log('chunk:', chunk.toString())
  data += chunk
})

readerStream.on('end', function () {
  console.log(data) // version: {{input}}
  writeStream(data, file)
  zip(file)
})

readerStream.on('error', function(error) {
  console.log(error)
})

function writeStream(data, file) {
  data = data.replace('{{input}}', input)
  console.log('data:', data)
  var writerStream = fs.createWriteStream(file)

  writerStream.write(data, 'UTF8')

  writerStream.end()

  writerStream.on('finish', function () {
    console.log('completed')
  })

  writerStream.on('error', function () {
    console.log('error')
  })
}

function zip(file) {
  fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(file + '.gz'))
}
