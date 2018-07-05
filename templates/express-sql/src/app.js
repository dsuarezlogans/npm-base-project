const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const config = require('../config');
const logger = require('../config/logger');

const app = express();
logger.info(`setting up enviroment ${config.env}`);
logger.info('configuring express...');
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(helmet());

// Put here route middlewares
logger.info('setting up routes...');
app.use('/hello', (req, res) => {
  res.status(200).jsonp({
    env: config.env,
    message: 'Hello World!!',
  });
});

// The 404 Route (ALWAYS Keep this as the last route)
app.all('/*', (req, res) => {
  res.status(404).jsonp({
    code: 404,
    message: 'Not Found',
    description: 'sorry, requested route was not found'
  });
});

module.exports = app;
