import axios from 'axios';
import urls from '../config/urls';

export async function findTweetsByUserId(userId, count = 10) {
  const url = `${urls.user_timeline_api_url}?id=${userId}&count=${count}`;
  return await axios.get(url);
}

export async function findTweetsByScreenName(screenName, count = 10) {
  const url = `${urls.user_timeline_api_url}?screen_name=${screenName}&count=${count}`;
  return await axios.get(url);
}
