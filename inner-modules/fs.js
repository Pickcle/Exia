// http://www.runoob.com/nodejs/nodejs-fs.html

var fs = require('fs')

fs.readFile('version.txt', function (err, data) {})

fs.readFileSync('version.txt')

fs.writeFile('version0.txt', 'aaa', function (err) {})

fs.open()

fs.stat()

fs.close()

fs.ftruncate()

fs.unlink()

fs.mkdir()

fs.readdir()

fs.rmdir()

fs.rename()

fs.existsSync('dist', function () {})
