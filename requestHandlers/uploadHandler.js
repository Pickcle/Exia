var querystring = require('querystring');

function upload(response, postData) {
  console.log('Request handler \'upload\' was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(postData);
  response.write('You have sent: '+ querystring.parse(postData).text);
  response.end();
}

exports.upload = upload;
