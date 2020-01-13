import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

const CollectionType = new GraphQLObjectType({
    name: 'Collection',
    fields: () => ({
        user_id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
    })
});

export default CollectionType;
