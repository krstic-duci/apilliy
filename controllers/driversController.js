const Driver = require('../models/Drivers');

const get = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send('List of drivers...');
};

const create = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const driverProps = req.body;

  Driver.save(driverProps)
    .then(driver => {
      res.send(driver);
    })
    .catch(next);
};

const edit = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const driverId = req.params.id;
  const driverProps = req.body;

  Driver.findOneAndUpdate({ _id: driverId }, driverProps)
    .then(() => {
      Driver.findOne({ _id: driverId });
    })
    .then(driver => res.send(driver))
    .catch(next);
};

const remove = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const driverId = req.params.id;

  Driver.findOneAndRemove({ _id: driverId })
    .then(driver => res.status(204).send(driver))
    .catch(next);
};

module.exports = {
  get,
  create,
  edit,
  remove
};
