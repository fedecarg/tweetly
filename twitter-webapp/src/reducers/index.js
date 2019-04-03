import { combineReducers } from 'redux';
import tweets from './tweets';

export default combineReducers({
  tweetsReducer: tweets
});