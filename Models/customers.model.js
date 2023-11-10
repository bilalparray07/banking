const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phoneNumber: { type: String },
  dob: { type: Date }, // Consider using Date type for birthdate
  address: {type:String},
  // accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
  // loans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }],
  profilePicture: { type: String }
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
