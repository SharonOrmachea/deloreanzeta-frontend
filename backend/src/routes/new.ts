import {NewController} from '../controller/NewController';
import { Router } from 'express';

const router = Router();

router.get('/', NewController.getAll);
router.get('/:id', NewController.getById);
router.post('/', NewController.createNew);
router.put('/:id', NewController.updateNew);
router.patch('/:id', NewController.updateNew);
router.delete('/:id', NewController.deleteNew);

export default router;
