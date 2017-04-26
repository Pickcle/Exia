var startHandler = require('./startHandler.js');
var uploadHandler = require('./uploadHandler.js');
var getHtmlHandler = require('./getHtmlHandler.js');
var showHandler = require('./showHandler.js');
var uploadImgHandler = require('./uploadImgHandler.js');

exports.start = startHandler.start;
exports.upload = uploadHandler.upload;
exports.getHtml = getHtmlHandler.getHtml;
exports.show = showHandler.show;
exports.uploadImg = uploadImgHandler.uploadImg;
