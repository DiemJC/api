import { Router } from 'express';
import { getSubs, getSubsBy, getsubsById } from '../../controllers/subs';

export const sub = Router();

sub.get('/list',getSubs);
sub.get('/list/:category',getSubsBy);
sub.get('/:id',getsubsById);