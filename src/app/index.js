import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { userMutations, userQueries } from './user';
import { collectionMutations, collectionQueries } from './collection';
import { noteMutations, noteQueries } from './note';
import { tagMutations, tagQueries } from './tag';

export default new GraphQLSchema({
  query: userQueries,
  mutation: userMutations
});
