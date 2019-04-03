import { fetchTweets } from '../api/twitter';
import * as types from './actionTypes';

export const getTweets = (screenName) => {
  return dispatch => {
    fetchTweets(screenName)
      .then((response) => {
        // handle success
        dispatch(setTweets(response.data.tweets));
      })
      .catch((error) => {
        // handle error
        dispatch(setErrorMessage(error.message));
      });
  };
};

export const setTweets = tweets => {
  return {
    type: types.TWEETS_LOADED,
    tweets
  };
};

export const setErrorMessage = (errorMessage) => {
  return {
    type: types.TWEETS_ERROR,
    errorMessage
  };
};
