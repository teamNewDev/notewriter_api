import dotenv from 'dotenv';
import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './src/app';
import db from './src/config';

dotenv.config();

const app = express();

app.enable('trust proxy');

app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

export default app;
