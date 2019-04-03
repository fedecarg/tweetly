import express from 'express';
import cors from 'cors';

const router = express.Router();

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
router.get('/statuses/user_timeline', cors(), function(req, res) {
  const config = req.app.get('config');
  const twitter = req.app.get('twitter');
  const params = {
    screen_name: req.query.screen_name || config.twitter.default_screen_name,
    count: req.query.count || 10
  };

  twitter.get('statuses/user_timeline', params)
    .then((twitterResponse) => {
      const data = twitterResponse && twitterResponse.data ? twitterResponse.data : [];
      res.json({
        'code': 200,
        'count': data.length,
        'tweets': data
      });
    })
    .catch((error) => {
      res.json({
        'code': error.code,
        'error': error.message
      });
    });
});

export default router;
