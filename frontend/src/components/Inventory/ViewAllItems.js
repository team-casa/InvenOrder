import React, { useEffect, useState } from 'react';

function ViewAllItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetching data from backend API
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error fetching items:', err));
  }, []);

  return (
    <div className="container">
      <h2>Inventory List</h2>
      <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemCode}</td>
              <td>{item.itemName}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllItems;
