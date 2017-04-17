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

function getHtml(response, query) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  if (query != null) {
    response.write(query);
  } else {
    response.write('no query');
  }
  response.end();
  // var body = '<html>'+
  //   '<head>'+
  //   '<meta http-equiv="Content-Type" content="text/html; '+
  //   'charset=UTF-8" />'+
  //   '</head>'+
  //   '<body>'+
  //   '<form action="/upload" method="post">'+
  //   '<textarea name="text" rows="20" cols="60"></textarea>'+
  //   '<input type="submit" value="Submit text" />'+
  //   '</form>'+
  //   '</body>'+
  //   '</html>';
  //
  // response.writeHead(200, {"Content-Type": "text/html"});
  // response.write(body);
  // response.end();
}

exports.start = start;
exports.upload = upload;
exports.getHtml = getHtml;
