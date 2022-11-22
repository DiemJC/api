import { Router } from 'express';
import { createCategory, getCategories } from '../../controllers/categories';

export const cat = Router();

cat.post('/new',createCategory);
cat.get('/list',getCategories);