'use strict';
const Promise = require('bluebird');
const request = require('request-promise');
const async = require('async');

//http://dataservice.accuweather.com/currentconditions/v1/307297?apikey=jZXzGUGTvTPVceF0BzfAHLX9Z5tGko7j

let getAccuWeather = (req, res) => {
  let myUrls = [
    'https://www.google.com',
    'https://www.google.com',
    'https://www.google.com'
  ];

  let responseArray = [];

  async.map(myUrls, (url) => {
    request(url)
      .then((response) => {
        responseArray.push(response);
      })
      .catch((err) => {
        res.json({
          data: {
            error: err
          }
        })
      })
      .finally(() => {
        res.json({
          data: responseArray
        })
      });
  }, (err, results) => {
    res.json({
      data: {
        error: err,
        results: results
      }
    })
  });
}

module.exports = {
  getAccuWeather
};
