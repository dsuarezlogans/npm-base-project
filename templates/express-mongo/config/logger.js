const moment = require('moment');
const { createLogger, transports, format } = require('winston');

const { app } = require('./index');

const { combine, colorize, label, printf, timestamp } = format;

const logFormat = printf(
  info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
);

const appendTimestamp = format((info, opts) => {
  if (opts.tz) {
    info.timestamp = moment()
      .tz(opts.tz)
      .format('YYYY-MM-DDTHH:mm:ss.SSSS');
  }
  return info;
});

const transportsSetup = {
  console: new transports.Console({
    handleExceptions: true,
    json: false,
    format: combine(
      colorize(),
      label({ label: app }),
      appendTimestamp({ tz: 'America/Lima' }),
      logFormat
    ),
    colorize: true,
  }),
  file: new transports.File({
    filename: './logs/all-logs.log',
    handleExceptions: true,
    json: true,
    format: combine(
      timestamp({
        format: 'YYYY-MM-DDThh:mm:ssAZZ',
      }),
      format.json()
    ),
    maxsize: 5242880, //  5MB
    maxFiles: 5,
    colorize: false,
  }),
};

const logger = createLogger({
  transports: [transportsSetup.file, transportsSetup.console],
  exitOnError: false,
});

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  logger.transports.console.level = 'info';
  logger.transports.file.level = 'error';
}

if (process.env.NODE_ENV === 'development') {
  logger.transports.console.level = 'debug';
  logger.transports.file.level = 'debug';
}

module.exports = logger;
module.exports.stream = {
  write: message => logger.info(message),
};
