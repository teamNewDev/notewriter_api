import { GraphQLObjectType, GraphQLList } from 'graphql';
import NoteType from './types'
import  Note  from '../../database';

const noteQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        notes: {
            type: new GraphQLList(NoteType),
            resolve: async(parentValue, args) => {
                const note = await Note.find({});
                return note;
            }
        }
    })
})

export default noteQuery;
