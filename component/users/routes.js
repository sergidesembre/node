'use strict';

const router = require('express').Router();
const userController = require('./controller');

router.route('/')
    .get((req, res) => {
    res.json({
    hola: 'hoasas'
})
});

module.exports = router;


