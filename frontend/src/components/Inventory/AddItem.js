import React, { useState } from 'react';
import axios from 'axios';

function AddItem() {
  const [itemCode, setItemCode] = useState('');
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { itemCode, itemName, description, price, quantity };

    axios.post('/api/items', newItem)
      .then(response => {
        console.log('Item added:', response.data);
        // Clear form or show success message
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  return (
    <div className="container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item Code</label>
        <input 
          type="text" 
          value={itemCode} 
          onChange={(e) => setItemCode(e.target.value)} 
          required 
        />

        <label>Item Name</label>
        <input 
          type="text" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
          required 
        />

        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>

        <label>Price</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />

        <label>Quantity</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
