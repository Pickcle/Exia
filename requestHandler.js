var exec = require('child_process').exec;
// var html = require('./HelloWorld.html');

function start(response) {
  console.log('Request handler \'start\' was called.');

  // var content = 'empty';
  exec('ls -lah', function(error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });

}

function upload(response) {
  console.log('Request handler \'upload\' was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello Upload');
  response.end();
}

function getHtml(response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('./html');
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.getHtml = getHtml;
