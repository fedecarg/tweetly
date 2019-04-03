import axios from 'axios';
import urls from '../config/urls';

export async function fetchTweets(screenName, count = 10) {
  const url = `${urls.user_timeline_api_url}?screen_name=${screenName}&count=${count}`;
  return axios.get(url);
}
