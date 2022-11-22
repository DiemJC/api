import { Router } from 'express';
import { createBrand , deleteBrand, updateBrand } from '../../controllers/brands';

export const brand = Router();

brand.post('/new',createBrand);
brand.post('/update/:id',updateBrand);
brand.post('/delete/:id',deleteBrand);
