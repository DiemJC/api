import { Router } from 'express';
import { getVarieties, getVarietyById } from '../../controllers/varieties';

export const vari = Router();

vari.get('/list',getVarieties);
vari.get('/:id',getVarietyById);
