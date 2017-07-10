'use strict';

const router = require('express').Router();
const userController = require('./controller');

router.route('/')
  .get(userController.getUsers)
  .post(userController.newUser);

router.route('/:user_id')
  .get(userController.getUser);


module.exports = router;
