import React from 'react';
import PropTypes from 'prop-types';
import { formatCreatedAtDate } from '../utils/date';
import './TweetItem.scss';

const TweetItem = ({ tweet }) => (
  <li className="tweet">
    <img className="tweet__image" src={tweet.user.profile_image_url} alt={tweet.user.name} />
    <div className="tweet__body">
      <h2 className="tweet__username">{tweet.user.screen_name}</h2>
      <p className="tweet__text">{tweet.text}</p>
      <p className="tweet__date">{'on ' + formatCreatedAtDate(tweet.created_at)}</p>
    </div>
  </li>
);

TweetItem.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default TweetItem;