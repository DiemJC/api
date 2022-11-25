import { Router } from 'express';
import { createProduct , updateProduct , deleteProduct } from '../../controllers/products';

export const prod = Router();

prod.post('/new',createProduct);
prod.put('/update/:id',updateProduct);
prod.delete('/delete/:id',deleteProduct);
