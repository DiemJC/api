import { Router } from 'express';
import { createSub, deleteSub, updateSub } from '../../controllers/subs';

export const vari = Router();

vari.post('/new',createVariety);
vari.put('/update/:id',updatevari);
vari.delete('/delete/:id',deletevari);