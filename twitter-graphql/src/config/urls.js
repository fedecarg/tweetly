const config = {
  development: {
    user_timeline_api_url: 'http://localhost:3000/statuses/user_timeline'
  }
};

const urls = config[process.env.NODE_ENV];
export default urls;