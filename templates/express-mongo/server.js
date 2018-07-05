
const http = require('http');
const mongoose = require('mongoose');
const logger = require('./config/logger');

const app = require('./src/app.js');
const config = require('./config');

const server = http.createServer(app);
mongoose.Promise = global.Promise;

mongoose
  .connect(config.db)
  .then(() => logger.info('Mongo DB connection succesfull...'))
  .catch(error => logger.error(error));

server.listen(config.port, () => {
  logger.info(`${config.env} server up and running on port: ${config.port}`);
});

module.exports = server;
