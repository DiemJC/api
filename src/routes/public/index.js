import { Router } from 'express';
import { brand } from './brand';

export const pub = Router();

pub.use('/brand',brand);