const Driver = require('../models/Drivers');

const get = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send('List of drivers...');
};

const create = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const driverProps = req.body;

  Driver.find({email: req.body.email})
    .then(singleDriver => {
      if (singleDriver.length > 0) {
        next({success: false, message: 'User Already exists'});
      } else {
        Driver.create(driverProps)
          .then(driver => {
            res.send(driver);
          })
          .catch(err => {
            next(err);
          });
      }
    })
    .catch(err => {
      next(err);
    });
};

const edit = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const driverId = req.params.id;
  const driverProps = req.body;

  Driver.findOneAndUpdate({ _id: driverId }, driverProps)
    .then(() => {
      Driver.findOne({ _id: driverId });
    })
    .then(driver => res.send({success: true, message: 'Driver updated successfully'}))
    .catch(err => {
      next(err);
    });
};

const remove = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const driverId = req.params.id;

  Driver.findOneAndRemove({ _id: driverId })
    .then(driver => res.send({success: true, message: 'Driver deleted successfully'}))
    .catch(err => {
      next(err);
    });
};

module.exports = {
  get,
  create,
  edit,
  remove
};
