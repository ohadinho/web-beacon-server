var express = require('express');
var router = express.Router();

var webBeaconController = require('../controllers/webBeaconController');

router.get('/webBeacon/sendData', webBeaconController.processRequest);

module.exports = router;