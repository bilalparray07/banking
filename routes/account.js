const express = require('express');
const router = express();
const Account = require('../Models/account.model'); // Import your Account model
const authMiddleware = require('../routes/auth/authMiddleware')


// Create a new account
router.post('/', async (req, res) => {
  try {
    const customer = new Account(req.body);
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// ...



// Get all accounts
router.get('/', async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get account by ID
router.get('/:id', async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update account by ID
router.put('/:id', async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json(account);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete account by ID
router.delete('/:id', async (req, res) => {
  try {
    const account = await Account.findByIdAndRemove(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json({ message: 'Account deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get account details for the currently logged-in user
router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Assuming you have a way to identify the user based on their user ID
    // (you might use the user's ID stored in the JWT token or another method)
    
    // Fetch the account details based on the user's ID
    const userAccount = await Account.findOne({ userId });

    if (!userAccount) {
      return res.status(404).json({ message: 'Account not found for this user' });
    }

    // Ensure that the account belongs to the authenticated user
    if (userAccount.userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    res.json(userAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
