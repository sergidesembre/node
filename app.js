'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const component = require('./component');


const app = express();


app.use('/api',  component);


app.listen(3000, function(){
    console.log('listening on port 3000!');
});
