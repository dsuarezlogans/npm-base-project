const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Put here routes middlewares
app.use('/', (req, res) => res.status(200).jsonp({ message: 'Hello World!!' }));

module.exports = app;
