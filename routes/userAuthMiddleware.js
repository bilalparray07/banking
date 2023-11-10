const Loan = require('../Models/loan.model'); // Import your loan model

const userLoanOwnershipMiddleware = async (req, res, next) => {
  const userName = req.user.username; // Get the user's ID from the authentication middleware
  const loanId = req.params.loanId; // Get the loan ID from the request parameter

  const loan = await Loan.findOne({ _id: loanId, borrower: userName });

  if (!loan) {
    return res.status(403).json({ error: 'You do not have permission to access this loan.' });
  }

  next();
};

module.exports = userLoanOwnershipMiddleware;
