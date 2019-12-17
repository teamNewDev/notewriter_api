import express from 'express';
import dotenv from 'dotenv';
import { userRoutes } from './app';

dotenv.config();

const app = express();

app.enable('trust proxy');

// Normal express config defaults
app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/users', userRoutes);

export default app;
//# sourceMappingURL=app.js.map