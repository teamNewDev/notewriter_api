import { GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';
import { Collection } from '../../database';
import CollectionType from './types';

const collectionMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addCollection: {
            type: CollectionType,
            args: {
                user_id: { type: GraphQLNonNull(GraphQLInt) },
                name: { type:  GraphQLNonNull(GraphQLString) },
            },
            resolve: async(parentValue, args) => {
                const collectionModel = new Collection(args);
                const newCollection = await collectionModel.save();
                if (!newCollection) {
                    throw new Error('error');
                }
                return newCollection;
            }
        }
    })
});

export default collectionMutation;
