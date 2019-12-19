import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.enable('trust proxy');

// Normal express config defaults
app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

export default app;
