'use strict';



var request = require('request');

let getAccuWeather = (req, res) => {
    request('http://dataservice.accuweather.com/currentconditions/v1/307297?apikey=jZXzGUGTvTPVceF0BzfAHLX9Z5tGko7j',
        function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
}

module.exports = {getAccuWeather};
