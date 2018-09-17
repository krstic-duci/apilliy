const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driversController');

router.get('/api', driversController.get);
router.post('/api/drivers', driversController.create);

module.exports = router;
