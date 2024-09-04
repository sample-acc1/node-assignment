const express = require('express');
const router = express.Router();
const Item = require('./models');

// Create a new item
router.post('/items', async (req, res) => {
  const { name, quantity } = req.body;

  // Basic validation
  if (!name || quantity === undefined) {
    return res.status(400).json({ message: 'Name and quantity are required' });
  }

  // Check if quantity is a valid number
  if (typeof quantity !== 'number' || quantity < 0) {
    return res.status(400).json({ message: 'Quantity must be a non-negative number' });
  }

  const item = new Item({ name, quantity });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error saving item:', error.message);
    // Handle duplicate key error or other validation errors
    if (error.name === 'MongoError' && error.code === 11000) {
      return res.status(400).json({ message: 'Duplicate key error: Item might already exist' });
    }
    // Generic server error
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error retrieving items:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
