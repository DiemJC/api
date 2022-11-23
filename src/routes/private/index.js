import { Router } from 'express';
import { CreateUser } from '../../controllers/users';
import { prod } from '../public/prod';
import { brand } from './brand';
import { cat } from './category';
import { sub } from './subs';

export const priv = Router();

priv.post('/user',CreateUser);
priv.use('/brand',brand);
priv.use('/category',cat);
priv.use('/sub',sub);
priv.use('/product',prod);