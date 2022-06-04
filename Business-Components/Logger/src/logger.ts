'use strict';
const winston = require('winston');
const consoleLog = new winston.transports.Console();
module.exports = {
    requestLogger: createRequestLogger([consoleLog]),
    errorLogger: createErrorLogger([consoleLog])
};
function createRequestLogger(transports) {
    const requestLogger = winston.createLogger({
        format: getRequestLogFormatter(),
        transports: transports
    });
    return function logRequest(req, res, next) {
        requestLogger.info({ req, res });
        next();
    };
}
function createErrorLogger(transports) {
    const errLogger = winston.createLogger({
        level: 'error',
        transports: transports
    });
    return function logError(err, req, res,next) {
        errLogger.error({Error: `${err.message}`,body:`${JSON.stringify(req.body)}`});
        res.status(500).json({ error: err.message })
    };
}
function getRequestLogFormatter() {
    const { combine, timestamp, printf } = winston.format;
    return combine(timestamp(), printf(info => {
        const { req, res } = info.message;
        return `${info.timestamp} ${info.level}: ${req.hostname}${req.port || ''}${req.originalUrl}`;
    }));
}
