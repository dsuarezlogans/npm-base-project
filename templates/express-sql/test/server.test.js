const { expect } = require('chai');
const request = require('supertest');

const app = require('../src/app');

describe('GET /hello', () => {
  it('should show message hello world!', (done) => {
    request(app)
      .get('/hello')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Hello World!!');
        done();
      });
  });
});
