import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import TwitterClient from 'twit';
import timelineRouter from './routes/timeline';
import config from './config/app.js';

const environment = process.env.NODE_ENV || 'development';

const twitter = new TwitterClient({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const app = express();

app.set('twitter', twitter);
app.set('config', config[environment]);
app.disable('etag');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.options('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.end();
});

// API routes
app.use('/', timelineRouter);

// Error handler
app.use((err, req, res) => {
  res.status(500).send('Invalid Request');
});

export default app;
