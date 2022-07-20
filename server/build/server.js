"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const Logging_1 = __importDefault(require("./library/Logging"));
const Author_1 = __importDefault(require("./routes/Author"));
const Book_1 = __importDefault(require("./routes/Book"));
const router = (0, express_1.default)();
/* Connect to Mongo  */
mongoose_1.default.connect(config_1.config.mongo.url)
    .then(() => {
    Logging_1.default.info('Mongo connected successfully.');
    StartServer();
})
    .catch((error) => {
    Logging_1.default.error('Unable to Connect:');
    Logging_1.default.error(error);
});
/* Only start the serve if Mongo connect */
const StartServer = () => {
    router.use((req, res, next) => {
        /* Log the Request */
        Logging_1.default.info(`Incomming -> Method : [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}]`);
        req.on('finish', () => {
            /* Log the Response */
            Logging_1.default.info(`Incomming -> Method : [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}] - Status: [${req.statusCode}]`);
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    /** Rules of our API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    /* Routes*/
    router.use('/authors', Author_1.default);
    router.use('/books', Book_1.default);
    /* Error handling */
    router.use((req, res, next) => {
        const error = new Error('Not Found');
        Logging_1.default.error(error);
        return res.status(404).json({ message: error.message });
    });
    http_1.default.createServer(router).listen(config_1.config.server.port, () => Logging_1.default.info(`Server is running on port ${config_1.config.server.port}`));
};
