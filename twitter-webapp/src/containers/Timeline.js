import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TweetsList from '../components/TweetsList';
import { getTweets } from '../actions/tweets';
import store from '../store';

const Timeline = ({ errorMessage, tweets, screenName = 'cnnbrk' }) => {

  if (!tweets || !tweets.length) {
    store.dispatch(getTweets(screenName));
    return (
      <p>Loading...</p>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Latest tweets from @{screenName}</h3>

        {errorMessage &&
          <p>An error occurred loading this content: {errorMessage}</p>
        }

        {!errorMessage && tweets &&
          <TweetsList tweets={tweets} />
        }
      </React.Fragment>
    );
  }
};

Timeline.propTypes = {
  tweets: PropTypes.array.isRequired,
  screenName: PropTypes.string,
  errorMessage: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    tweets: state.tweetsReducer.tweets,
    screenName: ownProps.match.params.screen_name,
    errorMessage: state.tweetsReducer.errorMessage
  };
};

export default connect(mapStateToProps)(Timeline);