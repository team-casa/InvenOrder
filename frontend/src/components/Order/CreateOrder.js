import React, { useState } from 'react';
import axios from 'axios';

const CreateOrder = () => {
  const [order, setOrder] = useState({
    itemCode: '',
    itemName: '',
    quantity: '',
    deliveryDate: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/orders', order);
      alert('Order created successfully!');
      setOrder({
        itemCode: '',
        itemName: '',
        quantity: '',
        deliveryDate: '',
        status: '',
      });
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Item Code:</label>
        <input
          type="text"
          name="itemCode"
          value={order.itemCode}
          onChange={handleChange}
          placeholder="ITEM001"
          required
        />

        <label>Item Name:</label>
        <input
          type="text"
          name="itemName"
          value={order.itemName}
          onChange={handleChange}
          placeholder="Sarridon"
          required
        />

        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          placeholder="10"
          required
        />

        <label>Delivery Date:</label>
        <input
          type="date"
          name="deliveryDate"
          value={order.deliveryDate}
          onChange={handleChange}
          required
        />

        <label>Status:</label>
        <select name="status" value={order.status} onChange={handleChange} required>
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default CreateOrder;
