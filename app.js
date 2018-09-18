require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// findAndModify method is deprecated in mongodb native driver
// replace it with findOne*
mongoose.set('useFindAndModify', false);

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
}
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB died ${err.message}`);
});
console.log(`Connected to MongoDB`);

// Set middleware
app.use(bodyParser.json());

// Use routes
app.use('/', require('./routes/drivers'));

// Catch 404 and forward it
app.use((req, res, next) => {
  const error = new Error(`Sorry, the requested page doesn't exist...`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({success: false, error: err.message});
});

module.exports = app;

// This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', error);
});
