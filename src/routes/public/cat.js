import { Router } from 'express';
import { getCategories, getCategoriesBy, getCategoryById } from '../../controllers/categories';

export const cat = Router();

cat.get('/list',getCategories);
cat.get('/list/:id',getCategoriesBy);
cat.get('/:id',getCategoryById);