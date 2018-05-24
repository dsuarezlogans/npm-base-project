/* eslint-disable import/no-dynamic-require */

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);

module.exports = config;
