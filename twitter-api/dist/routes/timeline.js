"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/**
 * User Timeline API endpoint
 * [GET] statuses/user_timeline
 *
 * Returns a collection of the most recent Tweets posted by the user
 * indicated by the screen_name.
 *
 * Twitter API URL https://api.twitter.com/1.1/statuses/user_timeline.json
 *
 * @param {string} screen_name: The screen name of the user for whom to return results.
 */


router.get('/statuses/user_timeline', (0, _cors["default"])(), function (req, res) {
  var config = req.app.get('config');
  var twitter = req.app.get('twitter');
  var params = {
    screen_name: req.query.screen_name || config.twitter.default_screen_name,
    count: req.query.count || 10
  };
  twitter.get('statuses/user_timeline', params).then(function (twitterResponse) {
    var data = twitterResponse && twitterResponse.data ? twitterResponse.data : [];
    res.json({
      'code': 200,
      'count': data.length,
      'tweets': data
    });
  })["catch"](function (error) {
    res.json({
      'code': error.code,
      'error': error.message
    });
  });
});
var _default = router;
exports["default"] = _default;