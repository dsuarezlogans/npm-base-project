module.exports = {
  app: 'base-app',
  env: process.env.NODE_ENV,
  session: {
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_KEY
  },
  db: {
    name: process.env.SQL_DB,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USER,
    pass: process.env.SQL_PASS,
    dialect: process.env.SQL_DIALECT
  },
  port: Number(process.env.PORT),
  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SESSION,
    callbackURL: process.env.TWITTER_CALLBACK_URL
  },
  remoteLog: {
    host: process.env.LOG_HOST,
    port: Number(process.env.LOG_PORT)
  }
};
