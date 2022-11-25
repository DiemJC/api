import { Router } from 'express';
import { CreateUser } from '../../controllers/users';
import { prod } from './prod';
import { brand } from './brand';
import { cat } from './category';
import { sub } from './subs';
import { users } from './users';

export const priv = Router();

priv.use('/user',users);
priv.use('/brand',brand);
priv.use('/category',cat);
priv.use('/sub',sub);
priv.use('/product',prod);
