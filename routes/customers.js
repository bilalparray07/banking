const express = require('express');
const router = express.Router();
const Customer = require('../Models/customers.model'); // Replace with the actual path to your Customer model
const authMiddleware = require('../routes/auth/authMiddleware')

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all customers
router.get('/',authMiddleware, async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a customer by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a customer by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndRemove(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(deletedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
