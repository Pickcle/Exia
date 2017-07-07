var hotMiddlewareClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotMiddlewareClient.subscribe(function (e) {
  if (e.action === 'reload') {
    console.log(e)
    window.location.reload()
  }
})
