import userRoutes from '../routes/userController';
import { Express } from 'express';



module.exports = (app: Express) => {
    app.use('/users', userRoutes);
}