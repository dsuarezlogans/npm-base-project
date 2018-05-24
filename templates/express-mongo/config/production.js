module.exports = {
  env: 'production',
  session: {
    key: 'the.express.session.id',
    secret: 'something.super.secret',
  },
  db: process.env.MONGOHQ_URL || process.env.MONGODB_URI,
  port: process.env.PORT,
  twitter: {
    consumerKey: 'consumer Key',
    consumerSecret: 'consumer Secret',
    callbackURL: 'http://yoururl.com/auth/twitter/callback',
  },
};
