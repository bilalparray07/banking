const mongoose = require('mongoose');

const loanSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', }, // Reference to a User model
  loanNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  interestRate: { type: Number },
  term: { type: Number },
  startDate: { type: Date },
  endDate: { type: Date },
  loanType: { type: String, required: true }, // Loan type, e.g., 'PersonalLoan', 'HomeLoan', etc.
  status: { type: String },
  collateral: { type: String },
});
const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;


