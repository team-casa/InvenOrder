import React, { useState } from 'react';
import axios from 'axios';

const SearchOrder = () => {
  const [itemCode, setItemCode] = useState('');
  const [order, setOrder] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/orders/search', { params: { itemCode } });
      setOrder(response.data.length > 0 ? response.data[0] : 'Order not found.');
    } catch (error) {
      console.error('Error searching for order:', error);
      setOrder('Order not found.');
    }
  };

  return (
    <div className="container">
      <h2>Search Order</h2>
      <form onSubmit={handleSearch}>
        <label>Item Code:</label>
        <input
          type="text"
          value={itemCode}
          onChange={(e) => setItemCode(e.target.value)}
          placeholder="Enter Item Code"
          required
        />
        <button type="submit">Search</button>
      </form>

      {order && typeof order === 'object' ? (
        <div className="order-details">
          <h3>Order Details</h3>
          <p><strong>Item Code:</strong> {order.itemCode}</p>
          <p><strong>Item Name:</strong> {order.itemName}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
      ) : (
        <p>{order}</p>
      )}
    </div>
  );
};

export default SearchOrder;
