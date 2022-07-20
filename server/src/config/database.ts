import { config } from './config'
import Logging from "../library/Logging";
import { Express } from 'express';


const mongoose = require('mongoose');

module.exports = (app: Express) => {
    mongoose.connect(config.mongo.url)
        .then(() => {
            Logging.info('Mongo connected successfully.')
        })
        .catch((error: object) => {
            Logging.error('Unable to Connect:')
            Logging.error(error)
        })
}