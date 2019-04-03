import axios from 'axios';
import urls from '../config/urls';

export default {
  async findByScreenName(screenName) {
    const url = `${urls.user_timeline_api_url}?screen_name=${screenName}&count=10`;
    const response = await axios.get(url);
    return response.data.tweets;
  },
};
