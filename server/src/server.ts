import express from 'express';
import http from 'http';

const databaseConfig = require('./config/database');
const rulesConfig = require('./config/rulesApi');
const apiErrorConfig = require('./config/apiErrors');
const routesConfig = require('./config/configRoutes');


import { config } from './config/config';
import Logging from './library/Logging';

start();

async function start() {
    const app = express();
    const cors = require('cors');

    /** Log the request */
    app.use((req, res, next) => {
        /** Log the req */
        Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });


    /* Database handling */
    await databaseConfig(app);

    /* Cors,json handling */
    app.use(cors(config.cors));
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json());

    /*Api Rules */
    rulesConfig(app);


    /*Routes */
    routesConfig(app);


    /* Error handling */
    await apiErrorConfig(app);


    http.createServer(app).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`))
}

