
const http = require('http');
const Sequelize = require('sequelize');
const logger = require('./config/logger');

const app = require('./src/app.js');
const config = require('./config');

const server = http.createServer(app);

/**
 *  Warning! you need to install driver for database to use (MSSQL, PostgreSql, SQLite, MySql),
 *  add set options in .env variables and change dialect for the database.
 * 
 *  more info at http://docs.sequelizejs.com/manual/installation/usage.html
 */

const sequelize = new  Sequelize(config.db.name, config.db.user, config.db.pass, {
  host: config.db.host,
  dialect: config.db.dialect,
  operatorsAliases: false,
  dialectOptions: {
    encrypt: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


server.listen(config.port, () => {
  logger.info(`${config.env} server up and running on port: ${config.port}`);
});

module.exports = server;
