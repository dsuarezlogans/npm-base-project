/* eslint-disable no-console */

const mongoose = require('mongoose');
const winston = require('winston');

const app = require('./src/app.js');
const config = require('./config');

mongoose.Promise = global.Promise;

mongoose
  .connect(config.db)
  .then(() => winston.info('Conectado a MongoDB satisfatoriamente.'))
  .then(() => app.listen(config.port, () => winston.info(`Servidor con entorno ${config.env} corriendo en http://localhost:${config.port}`)))
  .catch(error => winston.error(`Error encontrado: ${error}`));

module.exports = { server: app };
