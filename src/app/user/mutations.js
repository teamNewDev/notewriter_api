import { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';
import UserType from './types';

const userMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
      },
      resolve(parentValue, { username, password, email, firstName, lastName }) {
        return () => {};
      }
    },

    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return () => {};
      }
    },

    editUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLInt },
      },

      resolve(parentValue, { id, username, firstName, lastName }) {
        return () => {};
      }
    }
  }
})

export default userMutation;
