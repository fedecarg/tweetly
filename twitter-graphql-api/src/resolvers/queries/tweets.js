import Tweets from '../../connectors/Tweets';

export default async function(root, { screenName }) {
  const tweets = await Tweets.findByScreenName(screenName);

  if (!tweets) {
    throw new Error(`No tweets found with "screenName": ${screenName}`);
  }

  return tweets;
}
