import { Router } from 'express';
import { GetUsers , CreateUser } from '../../controllers/users';

export const users = Router();

users.get('/list',GetUsers);
users.post('/new',CreateUser);

