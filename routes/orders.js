const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

// Log when the POST request is received
router.post('/', (req, res) => {
    console.log('POST /api/orders request received');
    console.log('Request Body:', req.body);

    const order = new Order({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        deliveryDate: req.body.deliveryDate,
        status: req.body.status
    });

    order.save()
        .then(newOrder => {
            console.log('Order saved:', newOrder);
            res.status(201).json(newOrder);
        })
        .catch(err => {
            console.error('Error saving order:', err.message);
            res.status(400).json({ message: err.message });
        });
});

// Fetch all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Search for an order by itemCode
router.get('/search', async (req, res) => {
    const itemCode = req.query.itemCode;
    try {
        const orders = await Order.find({ itemCode });
        if (orders.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(orders);
    } catch (err) {
        console.error('Error finding order:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
