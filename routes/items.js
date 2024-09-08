const express = require('express');
const router = express.Router();
const Item = require('../models/items');

// Add a new item
router.post('/', (req, res) => {
    const item = new Item({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity
    });

    item.save()
        .then(newItem => res.status(201).json(newItem))
        .catch(err => res.status(400).json({ message: err.message }));
});

// Fetch all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Search for an item by itemCode
router.get('/search', async (req, res) => {
    const itemCode = req.query.itemCode;
    try {
        const item = await Item.findOne({ itemCode });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an item by itemCode
router.put('/update', async (req, res) => {
    const { itemCode, quantity } = req.body;
    try {
        const item = await Item.findOne({ itemCode });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        item.quantity = quantity;
        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
