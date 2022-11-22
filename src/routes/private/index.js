import { Router } from 'express';
import { CreateUser } from '../../controllers/users';
import { brand } from './brand';
import { cat } from './category';

export const priv = Router();

priv.post('/user',CreateUser);
priv.use('/brand',brand);
priv.use('/cat',cat);