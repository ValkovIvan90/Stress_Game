"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const databaseConfig = require('./config/database');
const rulesConfig = require('./config/rulesApi');
const apiErrorConfig = require('./config/apiErrors');
const routesConfig = require('./config/configRoutes');
const config_1 = require("./config/config");
const Logging_1 = __importDefault(require("./library/Logging"));
start();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const cors = require('cors');
        /** Log the request */
        app.use((req, res, next) => {
            /** Log the req */
            Logging_1.default.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
            res.on('finish', () => {
                /** Log the res */
                Logging_1.default.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
            });
            next();
        });
        /* Database handling */
        yield databaseConfig(app);
        /* Cors,json handling */
        app.use(cors(config_1.config.cors));
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.json());
        /*Api Rules */
        rulesConfig(app);
        /*Routes */
        routesConfig(app);
        /* Error handling */
        yield apiErrorConfig(app);
        http_1.default.createServer(app).listen(config_1.config.server.port, () => Logging_1.default.info(`Server is running on port ${config_1.config.server.port}`));
    });
}
