module.exports = {
  env: 'development',
  session: {
    key: 'the.express.session.id',
    secret: 'something.super.secret',
  },
  db: 'mongodb://127.0.0.1:27017/db',
  port: '3000',
  twitter: {
    consumerKey: 'consumer Key',
    consumerSecret: 'consumer Secret',
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
  },
};
