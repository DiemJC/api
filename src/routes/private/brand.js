import { Router } from 'express';
import { createBrand , deleteBrand, updateBrand } from '../../controllers/brands';

export const brand = Router();

brand.post('/new',createBrand);
brand.put('/update/:id',updateBrand);
brand.delete('/delete/:id',deleteBrand);
