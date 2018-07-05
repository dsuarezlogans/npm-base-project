module.exports = {
  app: 'base-app',
  env: process.env.NODE_ENV,
  session: {
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_KEY
  },
  db: process.env.MONGODB_URI,
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
