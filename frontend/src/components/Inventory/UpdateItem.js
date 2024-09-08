import React, { useState } from 'react';
import axios from 'axios';

function UpdateItem() {
  const [itemCode, setItemCode] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedItem = { itemCode, quantity };

    axios.put('/api/items/update', updatedItem)
      .then(response => {
        alert('Item updated successfully!');
        // Clear form or show success message
        setItemCode('');
        setQuantity('');
      })
      .catch(error => {
        alert('Error updating item. Please try again.');
        console.error('Error updating item:', error);
      });
  };

  return (
    <div className="container">
      <h2>Update Item Quantity</h2>
      <form onSubmit={handleUpdate}>
        <label>Item Code</label>
        <input 
          type="text" 
          value={itemCode} 
          onChange={(e) => setItemCode(e.target.value)} 
          required 
        />

        <label>New Quantity</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateItem;
