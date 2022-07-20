import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

import { config } from './config/config';
import Logging from './library/Logging';

import userRoutes from './routes/UserRoutes';

const router = express();
const cors = require('cors');

/* Connect to Mongo  */

mongoose.connect(config.mongo.url)
    .then(() => {
        Logging.info('Mongo connected successfully.')
        StartServer();
    })
    .catch((error) => {
        Logging.error('Unable to Connect:')
        Logging.error(error)
    })

/* Only start the serve if Mongo connect */

const StartServer = () => {
    router.use((req, res, next) => {
        /* Log the Request */
        Logging.info(`Incomming -> Method : [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}]`);


        req.on('finish', () => {
            /* Log the Response */
            Logging.info(`Incomming -> Method : [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}] - Status: [${req.statusCode}]`);
        })
        next();
    });

    router.use(cors(config.cors));
    router.use(express.urlencoded({ extended: true }))
    router.use(express.json());

    /** Rules of our API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /* Routes*/

    router.use('/users', userRoutes);


    /* Error handling */

    router.use((req, res, next) => {
        const error = new Error('Not Found');
        Logging.error(error);

        return res.status(404).json({ message: error.message })
    })


    http.createServer(router).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`))
}