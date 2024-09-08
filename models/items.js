const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    itemCode: String,
    itemName: String,
    description: String,
    price: Number,
    quantity: Number,
});

module.exports = mongoose.model('Item', itemSchema, 'items');
