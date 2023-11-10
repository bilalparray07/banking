const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  fullName: String,
  mothersName: String,
  fathersName: String,
  dob: { type: Date },
  address: String,
  country: String,
  city: String,
  state: String,
  phoneNumber: String,
  pincode: String,
  educationLevel: {
    type: String,
    // enum: ['highSchool', 'graduate', 'undergraduate', 'masters', 'phd', 'none'],
  },
  proofOfIdentification: {
    type: String,
    // enum: ['driverslicense', 'adhaarcard', 'pancard', 'nationalidentitycard', 'passport'],
  },
  idNumber: String,
  accountType:  {
    type: String,
    // enum: ['savings','current','fixed','salary']
  },
  uploadIdCardImage: String,
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
