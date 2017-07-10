'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

const component = require('./component');
const app = express();

mongoose.Promise = bluebird;

let promise = mongoose.connect('mongodb://mongo:27017/test', {
  useMongoClient: true
});

promise.then(function(db) {
  console.log('MongoDB Connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', component);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
