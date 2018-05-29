/* eslint-disable no-console */

const mongoose = require('mongoose');
const logger = require('./config/logger');

const app = require('./src/app.js');
const config = require('./config');

mongoose.Promise = global.Promise;

mongoose
  .connect(config.db)
  .then(() => logger.info('Mongo DB connection succesfull...'))
  .then(() => app.listen(config.port, () => logger.info(`${config.env} server up and running on http://localhost:${config.port}`)))
  .catch(error => logger.error(`Error: ${error}`));

module.exports = { server: app };
