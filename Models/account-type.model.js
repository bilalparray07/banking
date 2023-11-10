const mongoose = require('mongoose');

const accountTypeSchema = new mongoose.Schema({
  savings:String,
  current:String,
  fixed:String,
  salary:String,
});

const AccountType = mongoose.model('AccountType', accountTypeSchema);

module.exports = AccountType;
