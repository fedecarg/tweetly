import * as types from '../actions/actionTypes';

const initialState = {
  tweets: [],
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TWEETS_LOADED: {
      return {
        ...state,
        tweets: action.tweets
      };
    }
    case types.TWEETS_ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }
    default: {
      return state;
    }
  }
};
