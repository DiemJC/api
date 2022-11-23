import { Router } from 'express';
import { getProductById, getProducts, getProductsBy } from '../../controllers/products';

export const prod = Router();

prod.get('/list',getProducts);
prod.get('/list/:id',getProductsBy);
prod.get('/:id',getProductById);