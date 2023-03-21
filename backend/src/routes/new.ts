import { Router } from 'express';
import {NewController} from '../controller/NewController';
import { validateNew } from '../middlewares/new.validator';
import { checkJwt } from "../middlewares/jwt";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get('/', NewController.getAll);
router.get('/:id', NewController.getById);
router.post('/',validateNew, [/*checkJwt, checkRole(['admin']),*/], NewController.createNew);
router.put('/:id',validateNew, [/*checkJwt, checkRole(['admin'])*/], NewController.updateNew);
router.patch('/:id',validateNew, [/*checkJwt, checkRole(['admin'])*/], NewController.updateNew);
router.delete('/:id', [/*checkJwt, checkRole(['admin'])*/], NewController.deleteNew);

export default router;
