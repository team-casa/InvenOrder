// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: for custom styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Hospital Management System. All rights reserved.</p>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
