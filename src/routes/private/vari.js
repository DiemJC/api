import { Router } from 'express';
import { createVariety, deleteVariety, updateVariety } from '../../controllers/varieties';

export const vari = Router();

vari.post('/new',createVariety);
vari.put('/update/:id',updateVariety);
vari.delete('/delete/:id',deleteVariety);