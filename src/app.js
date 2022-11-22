import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { api } from './routes';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';

export const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));

app.use(api);

app.use(ErrorMiddleware);