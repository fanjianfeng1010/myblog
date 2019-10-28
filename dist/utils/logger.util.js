"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const log4js = require("log4js");
log4js.addLayout('json', (config) => {
    return (logEvent) => {
        return JSON.stringify(logEvent) + config.separator;
    };
});
log4js.configure({
    appenders: {
        console: { type: 'console' },
        requestInfoFile: {
            type: 'file',
            filename: path.resolve(__dirname, '../../logs/request-info.log'),
            maxLogSize: 3 * 1024 * 1024,
            backups: 3,
            compress: true,
            layout: { type: 'json', separator: ',' },
        },
        infoFile: {
            type: 'file',
            filename: path.resolve(__dirname, '../../logs/info.log'),
            maxLogSize: 1024 * 1024,
            backups: 3,
            compress: true,
            layout: { type: 'json', separator: ',' },
        },
        errorFile: {
            type: 'file',
            filename: path.resolve(__dirname, '../../logs/error.log'),
            maxLogSize: 1024 * 1024,
            backups: 3,
            compress: true,
            layout: { type: 'json', separator: ',' },
        },
    },
    categories: {
        info: { appenders: ['infoFile'], level: 'info' },
        error: { appenders: ['errorFile'], level: 'error' },
        requestInfo: { appenders: ['requestInfoFile'], level: 'info' },
        default: { appenders: ['console'], level: 'debug' },
    },
});
const consoleLogger = log4js.getLogger();
exports.default = consoleLogger;
//# sourceMappingURL=logger.util.js.map