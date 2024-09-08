import React, { useState } from 'react';
import axios from 'axios';

function SearchItem() {
  const [itemCode, setItemCode] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    axios.get('/api/items/search', { params: { itemCode } })
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        console.error('Error searching for item:', error);
        setResult('Item not found');
      });
  };

  return (
    <div className="container">
      <h2>Search Item</h2>
      <form onSubmit={handleSearch}>
        <label>Item Code</label>
        <input 
          type="text" 
          value={itemCode} 
          onChange={(e) => setItemCode(e.target.value)} 
          required 
        />
        <button type="submit">Search</button>
      </form>
      {result && (
        <div className="result">
          {typeof result === 'string' ? (
            <p>{result}</p>
          ) : (
            <div>
              <p><strong>Item Name:</strong> {result.itemName}</p>
              <p><strong>Description:</strong> {result.description}</p>
              <p><strong>Price:</strong> {result.price}</p>
              <p><strong>Quantity:</strong> {result.quantity}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchItem;
