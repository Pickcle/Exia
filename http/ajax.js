var xhr = new XMLHttpRequest()
xhr.open('get', '//localhost:5051', true)
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
    console.log('xhjLog: success')
    console.log(xhr.response || xhr.responseXML)
  } else {
    console.log('error')
  }
}
xhr.send(null)
