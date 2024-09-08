const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    itemCode: String,
    itemName: String,
    quantity: Number,
    deliveryDate: Date,
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending',
    }
});

module.exports = mongoose.model('Order', orderSchema, 'OrderPortal');
