const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  surname: String,
  email: String
});

module.exports = mongoose.model('User', UsersSchema);
