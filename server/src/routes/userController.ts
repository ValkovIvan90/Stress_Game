import express from 'express';

import controller from '../controllers/userController';

import { Schemas, ValidateJoi } from '../middleware/Joi';
const router = express.Router();

router.post('/create', ValidateJoi(Schemas.user.create), controller.createUser);
router.get('/get/:userId', controller.readUser);
router.get('/get', controller.readAll);


export = router;