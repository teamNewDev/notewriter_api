import { GraphQLString, GraphQLObjectType } from 'graphql';
import UserType from './types';

const userMutation = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        username: { type: GraphQLString }
      },
      resolve: (source, params) => {
        console.log('------------------------------------');
        console.log(params);
        console.log('------------------------------------');
      }
    }
  }
})

export default userMutation;
