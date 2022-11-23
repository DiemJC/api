import { Router } from 'express';
import { CreateUser } from '../../controllers/users';
import { prod } from '../public/prod';
import { brand } from './brand';
import { cat } from './category';

export const priv = Router();

priv.post('/user',CreateUser);
priv.use('/brand',brand);
priv.use('/category',cat);
priv.use('/prodcut',prod);