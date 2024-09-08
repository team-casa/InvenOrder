// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // Go back one page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Abhilasha</Link>
        </h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/inventory-management">Inventory</Link></li>
        <li><Link to="/order-management">Orders</Link></li>
        <li><Link to="">Bed</Link></li>
        <li><Link to="">OPD</Link></li>
      </ul>
      {/* Add Back button */}
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </nav>
  );
};

export default Navbar;
