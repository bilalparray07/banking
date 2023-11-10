const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  emailId:{type: String,},
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String,required:true},
});

module.exports = mongoose.model('User', userSchema);
