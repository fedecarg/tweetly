"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _twit = _interopRequireDefault(require("twit"));

var _timeline = _interopRequireDefault(require("./routes/timeline"));

var _app = _interopRequireDefault(require("./config/app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var environment = process.env.NODE_ENV || 'development';
var twitter = new _twit["default"]({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
var app = (0, _express["default"])();
app.set('twitter', twitter);
app.set('config', _app["default"][environment]);
app.disable('etag');
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.options('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.end();
}); // API routes

app.use('/', _timeline["default"]); // Error handler

app.use(function (err, req, res) {
  res.status(500).send('Invalid Request');
});
var _default = app;
exports["default"] = _default;