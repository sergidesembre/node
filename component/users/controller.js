'use strict';

const User = require('./model');
const userController = require('./controller');





let getUsers = (req, res) => {
  User.find(function(err, users) {
    if (err) res.send(err);
    res.json(users);
  });
};

let getUser = (req, res) => {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
}

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

module.exports = {
  getUsers,
  getUser,
  newUser
};
