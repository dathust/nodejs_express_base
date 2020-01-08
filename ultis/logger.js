const winston = require('winston')
const moment = require('moment')
const path = require('path')
const LEVEL = Symbol.for('level')

function filterOnly(level) {
        return winston.format(function (info) {
            if (info[LEVEL] === level) {
                return info;
            }
        })()
}

const logger = new (winston.createLogger)({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
    ),
    transports: [
        // all log console
        new winston.transports.Console({
            colorize: true
        }),
        // info log file
        new winston.transports.File({
            level: 'info',
            name: 'info-file',
            filename: path.resolve(__dirname, '..', 'logs', 'project-name-log-info.log'),
            json: false,
            format: filterOnly('info')
        }),
        // errors log file
        new winston.transports.File({
            level: 'error',
            name: 'error-file',
            filename: path.resolve(__dirname, '..', 'logs', 'project-name-log-errors.log'),
            json: false,
            format: filterOnly('error')
        }),
        // debug log file
        new winston.transports.File({
            level: 'debug',
            name: 'debug-file',
            filename: path.resolve(__dirname, '..', 'logs', 'project-name-log-debug.log'),
            json: false,
            format: filterOnly('debug')
        })
    ]
})

module.exports = logger