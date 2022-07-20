import { NextFunction, Request, Response, Express } from 'express';
import Logging from '../library/Logging';


module.exports = (app: Express) => (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');
    Logging.error(error);

    return res.status(404).json({ message: error.message })

}