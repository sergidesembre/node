'use strict';

const router = require('express').Router();
const weatherController = require('./controller');

router.route('/')
    .get(weatherController.getAccuWeather);

module.exports = router;
