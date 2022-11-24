import { Router } from 'express';
import { SignIn } from '../controllers/users';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { priv } from './private';
import { pub } from './public';

export const api = Router();

api.get('/',(_,res) => res.status(200).json({message:'Todo ok'}));
api.post('/signin',SignIn);

api.use('/api',priv);
api.use('/pub',pub);