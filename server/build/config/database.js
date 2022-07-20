"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const Logging_1 = __importDefault(require("../library/Logging"));
const mongoose = require('mongoose');
module.exports = (app) => {
    mongoose.connect(config_1.config.mongo.url)
        .then(() => {
        Logging_1.default.info('Mongo connected successfully.');
    })
        .catch((error) => {
        Logging_1.default.error('Unable to Connect:');
        Logging_1.default.error(error);
    });
};
