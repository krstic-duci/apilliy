const mongoose = require('mongoose');

before(done => {
  mongoose.connect(process.env.DATABASE_TEST, { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (err) => {
      console.log(`Test MongoDB died ${err.message}`);
    });
});

beforeEach(done => {
  const { drivers } = mongoose.connection.collections;
  drivers.drop()
    .then(() => done())
    .catch(() => done());
});
