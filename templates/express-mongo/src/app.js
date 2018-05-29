const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const logger = require('../config/logger');

const app = express();

logger.info('configuring express...');
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(helmet());

// Put here routes middlewares
logger.info('setting up routes...');
app.use('/hello', (req, res) => res.status(200).jsonp({ message: 'Hello World!!' }));

// The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
  res.send('what???', 404);
});

module.exports = app;
