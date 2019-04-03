import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'

import UserType from './UserType'
import { findTweetsByUserId, findTweetsByScreenName } from '../services/twitter';

var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields() {
    return {
      users: {
        type: new GraphQLList(UserType),
        args: {
          id: {
            type: GraphQLID
          },
          screenName: {
            type: GraphQLString
          },
          limit: {
            type: GraphQLInt
          }
        },
        resolve(parent, { id, screenName, limit }) {
          let result;

          if (id) {
            result = findTweetsByUserId(id);
          } else if (screenName) {
            result = findTweetsByScreenName(screenName);
          }

          return result;
        }
      }
    }
  }
})

export default QueryType
