const http = require('http');
const mongoose = require('mongoose');
const fse = require('fs-extra');

const app = require('./src/app.js');
const config = require('./config');
const logger = require('./config/logger');

const server = http.createServer(app);
mongoose.Promise = global.Promise;

logger.info('ensuring log file exists...');
fse.ensureFileSync(`${__dirname}${logs.filePath}`);

mongoose
  .connect(config.db)
  .then(() => logger.info('Mongo DB connection succesfull...'))
  .then(() =>
    server.listen(config.port, () =>
      logger.info(`${config.env} server up and running on port: ${config.port}`)
    )
  )
  .catch(error => logger.error(error));

module.exports = server;
