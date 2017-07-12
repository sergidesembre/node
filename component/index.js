'use strict';

const express = require('express');
const router = express.Router();

const usersRoutes = require('./users/routes');
const weatherRoutes = require('./weather/routes');

router.use('/users', usersRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;
