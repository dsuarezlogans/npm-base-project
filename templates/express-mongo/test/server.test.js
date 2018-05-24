const { expect } = require('chai');
const request = require('supertest');

const { server } = require('../server');

describe('GET /', () => {
  it('should show message hello world!', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Hello World!!');
        done();
      });
  });
});
