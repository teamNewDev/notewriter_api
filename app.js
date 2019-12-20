import express from 'express';
import dotenv from 'dotenv';
import db from './src/config';

dotenv.config();

const app = express();

app.enable('trust proxy');

app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

export default app;
