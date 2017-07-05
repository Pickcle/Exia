var childProcess = require('child_process')

childProcess.exec('ls -lah', function (error, stdout, stderr) {
  console.log(stdout)
})

var spawn = childProcess.spawn('ls', ['-lah'])
spawn.stdout.on('data', function (data) {
  console.log('spawn:', data.toString())
})

var fork = childProcess.fork('inner-modules/console.js')
