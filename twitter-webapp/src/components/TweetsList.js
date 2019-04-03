import React from 'react';
import PropTypes from 'prop-types';
import TweetItem from './TweetItem';
import './TweetsList.scss';

const TweetsList = ({ tweets }) => {
  return (
    <ul className="row">
      {tweets.map((tweet, index) =>
        (<TweetItem
          tweet={tweet}
          key={index}
        />)
      )}
    </ul>
  );
};

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default TweetsList;