require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB died ${err.message}`);
});
console.log(`Connected to MongoDB`);

const app = express();

const drivers = require('./routes/drivers');

// Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', drivers);

module.exports = app;
