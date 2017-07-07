var path = require('path')
var express = require('express')
var webpackDevConfig = require('./webpack.dev.js')

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var httpProxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.config.js')

var apiServer = require('./apiServer.js')

var app = express()

var compiler = webpack(webpackConfig)

var devMiddleware = webpackDevMiddleware(compiler, {
  quiet: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
})

var hotMiddleware = webpackHotMiddleware(compiler, {
  log: function () {}
})

var proxyMiddleware = httpProxyMiddleware({
  target: 'http://api.live.bilibili.com',
  changeOrigin: true
})

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + webpackConfig.output.publicPath + '\n')
})

app.use(devMiddleware)

app.use(hotMiddleware)

// app.use('/', proxyMiddleware)

app.use(express.static('static'))

module.exports = app.listen(webpackDevConfig.port)
