var express = require('express')

var app = express()
app.use(express.static('client'))
app.listen(5051, function () {
  console.log('listening: localhost:5051')
})
