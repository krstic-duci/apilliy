const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriversSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('drivers', DriversSchema);
