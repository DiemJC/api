import { Router } from 'express';
import { brand } from './brand';
import { cat } from './cat';
import { prod } from './prod';

export const pub = Router();

pub.use('/brand',brand);
pub.use('/category',cat);
pub.use('/product',prod);