function uploadImg(request, response) {
  // show a file upload form
  response.writeHead(200, {'content-type': 'text/html'});
  response.end(
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}

exports.uploadImg = uploadImg;
