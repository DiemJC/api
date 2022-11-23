import { Router } from 'express';
import { createCategory, deleteCategory, updateCategory } from '../../controllers/categories';

export const cat = Router();

cat.post('/new',createCategory);
cat.put('/update/:id',updateCategory);
cat.delete('/delete/:id',deleteCategory);