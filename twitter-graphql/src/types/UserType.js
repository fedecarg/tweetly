import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import TweetType from './TweetType';
import { findTweetsByUserId } from '../services/twitter';

const UserType = new GraphQLObjectType({
  name: 'users',
  description: 'Represents the users on Twitter',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      screenName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      tweets: {
        type: new GraphQLList(TweetType),
        resolve(user) {
          return findTweetsByUserId(user.id);
        }
      }
    };
  }
});

export default UserType;
