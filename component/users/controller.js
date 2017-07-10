'use strict';

const User = require('./model');

let getUsers = (req, res) => {
  User.find(function(err, users) {
    if (err) res.send(err);
    res.json(users);
  });
};

let newUser = (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.email = req.body.email;

  user.save(function(err) {
    if (err) res.send(err);

    res.json({
      message: 'User created!'
    });
  });
}

module.exports = { getUsers, newUser };
