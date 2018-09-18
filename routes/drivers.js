const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driversController');

router.get('/api', driversController.get);
router.post('/api/drivers', driversController.create);
router.put('/api/drivers/:id', driversController.edit);
router.delete('/api/drivers/:id', driversController.remove);

module.exports = router;
