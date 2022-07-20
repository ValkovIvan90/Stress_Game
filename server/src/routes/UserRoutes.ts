import express from 'express';

import controller from '../controllers/UserController';
import { Schemas, ValidateJoi } from '../middleware/Joi';
const router = express.Router();

router.post('/create', ValidateJoi(Schemas.user.create), controller.createAuthor);
router.get('/get/:userId', controller.readAuthor);
router.get('/get', controller.readAll);
router.patch('/update/:userId', ValidateJoi(Schemas.user.update), controller.updateAuthor);
router.delete('/delete/:userId', controller.deleteAuthor);


export = router;