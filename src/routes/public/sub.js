import { Router } from 'express';
import { getSubs, getsubsById } from '../../controllers/subs';

export const sub = Router();

sub.get('/list',getSubs);
sub.get('/:id',getsubsById);