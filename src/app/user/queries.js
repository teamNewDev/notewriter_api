import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';
import bcrypt from 'bcryptjs';
import UserType from './types';
import {User}  from '../../database';
import generateToken from '../../common/helpers/generateToken';

const createTokenPayload = (user) => ({
  username: user.username,
  first_name: user.first_name,
  last_name: user.last_name,
  email: user.email,
})

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
    },
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (source, {email, password}) => {
        const user = await User.findOne({ email });
        if(!user){
          throw new Error('Email does not match any registered user!')
        };
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
          throw new Error('Password is incorrect!');
        };
        const token = generateToken( createTokenPayload(user));
        return {
          token,
        }
      }
    }
  }
})

export default userMutation;
