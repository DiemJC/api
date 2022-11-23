import { Router } from 'express';
import { createSub, deleteSub, updateSub } from '../../controllers/subs';

export const sub = Router();

sub.post('/new',createSub);
sub.put('/update/:id',updateSub);
sub.delete('/delete/:id',deleteSub);