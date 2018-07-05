/* eslint-disable no-unused-expressions */

const winston = require('winston');
require('winston-papertrail').Papertrail;

winston.emitErrs = true;

const winstonPapertrailTransport = new winston.transports.Papertrail({
  host: process.env.LOG_HOST,
  port: process.env.LOG_PORT,
  program: 'base-app',
  inlineMeta: true,
  maximumAttempts: 2,
  attemptsBeforeDecay: 1,
  logFormat: (level, message) => `<<< ${level} >>> ${message}`,
  colorize: true
});

const fileTransport = new winston.transports.File({
  filename: './logs/all-logs.log',
  handleExceptions: true,
  json: true,
  maxsize: 5242880, //  5MB
  maxFiles: 5,
  colorize: false
});

const consoleTransport = new winston.transports.Console({
  handleExceptions: true,
  json: false,
  colorize: true
});

const logger = new winston.Logger({
  transports: [fileTransport, consoleTransport, winstonPapertrailTransport],
  exitOnError: false
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  logger.transports.console.level = 'info';
  logger.transports.file.level = 'info';
  logger.transports.Papertrail.level = 'info';
}

if (process.env.NODE_ENV === 'development') {
  logger.transports.console.level = 'debug';
  logger.transports.file.level = 'debug';
  logger.transports.Papertrail.level = 'debug';
}

if (process.env.NODE_ENV === 'local') {
  logger.transports.console.level = 'debug';
  logger.transports.file.level = 'debug';
  logger.remove(logger.transports.Papertrail);
  logger.debug('Logger removed Papertrail');
}

module.exports = logger;
module.exports.stream = {
  write: message => logger.info(message)
};

winstonPapertrailTransport.on('error', err => logger.error(err));

winstonPapertrailTransport.on('connect', message => logger.info(message));
