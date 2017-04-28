var formidable = require('formidable');
var fs = require('fs');
var querystring = require('querystring');

function upload(request, response) {
  console.log('Request handler \'upload\' was called');

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "/tmp/test.png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });

  // response.writeHead(200, {'Content-Type': 'text/plain'});
  // console.log(postData);
  // response.write('You have sent: '+ querystring.parse(postData).text);
  // response.end();
}

exports.upload = upload;
