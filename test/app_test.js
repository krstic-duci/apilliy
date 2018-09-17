const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app', () => {
  it('handles a GET to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        if (err) {
          throw err;
        }
        assert(response.statusCode === 200);
        done();
      });
  });
});
