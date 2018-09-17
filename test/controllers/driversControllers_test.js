const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Driver = mongoose.model('drivers');

describe('The drivers controllers', () => {
  it('POST to /api/drivers (creating new driver)', (done) => {
    Driver.countDocuments()
      .then(count => {
        request(app)
          .post('/api/drivers')
          .send({email: 'test@test.com'})
          .end(() => {
            Driver.countDocuments()
              .then(newCount => {
                assert(count + 1 === newCount);
                done();
              })
              .catch(err => {
                throw err;
              });
          });
      })
      .catch(err => {
        throw err;
      });
    done();
  });
});
