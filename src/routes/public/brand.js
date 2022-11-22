import { Router } from 'express';
import { getBrandById, getBrands } from '../../controllers/brands';

export const brand = Router();

brand.get('/list',getBrands);
brand.get('/:id',getBrandById);
