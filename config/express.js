var express = require('express')();

var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

express.set('views', './views');
express.set('view engine', 'ejs');

express.use(cookieParser());
express.use(bodyParser.urlencoded({ extended: false }));
express.use(session({ secret: 'keyboard cat', key: 'sid'}));

module.exports = express;