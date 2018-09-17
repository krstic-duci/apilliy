const Driver = require('../models/Drivers');
const get = (req, res) => {
  res.send('Get a list of drivers driver');
};

const create = (req, res) => {
  const driverProps = req.body;
  Driver.create(driverProps)
    .then(driver => {
      res.send(driver);
    })
    .catch(err => {
      throw err;
    });
};

module.exports = {
  get,
  create
};
