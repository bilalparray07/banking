const express = require('express');
const router = express.Router();
const Loan = require('../Models/loan.model');
const adminAuthMiddleware =require('../routes/adminAutMiddleware')
const authMiddleware = require('../routes/middleware');


router.post('/', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    const savedloan = await loan.save();
    res.status(201).json(savedloan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/', async (req, res) => {
  const loans = await Loan.find();
  res.status(200).json(loans);
});

// Get a specific Loan by ID
router.get('/:id', async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) {
      return res.status(404).json({ error: 'Loan not found' });
    }
    res.json(loan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a Loan by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedLoan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLoan) {
      return res.status(404).json({ error: 'Loan not found' });
    }
    res.json(updatedLoan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const deletedLoan = await Loan.findByIdAndRemove(req.params.id);
    if (!deletedLoan) {
      return res.status(404).json({ error: 'Loan not found' });
    }
    res.json(deletedLoan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
