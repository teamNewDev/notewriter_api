import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLInt },
    lastName: { type: GraphQLInt },
    email: { type: GraphQLInt },
  })
});

export default UserType;
