import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AddItem from './components/Inventory/AddItem';
import ViewAllItems from './components/Inventory/ViewAllItems';
import SearchItem from './components/Inventory/SearchItem';
import UpdateItem from './components/Inventory/UpdateItem';
import CreateOrder from './components/Order/CreateOrder';
import ViewAllOrders from './components/Order/ViewAllOrders';
import SearchOrder from './components/Order/SearchOrder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Hospital Management System</h1>
      <div className="options-container">
        <Link to="/inventory-management" className="option-card">
          <h2>Inventory Management</h2>
          <p>Manage all hospital inventory, add, view, and update items</p>
        </Link>

        <Link to="/order-management" className="option-card">
          <h2>Order Management</h2>
          <p>Create and manage orders for hospital supplies</p>
        </Link>
      </div>
    </div>
  );
}

function InventoryManagement() {
  return (
    <div className="menu-container">
      <h2>Inventory Management</h2>
      <div className="menu-options">
        <Link to="/inventory-management/add-item">Add Item</Link>
        <Link to="/inventory-management/view-items">View All Items</Link>
        <Link to="/inventory-management/search-item">Search Item</Link>
        <Link to="/inventory-management/update-item">Update Item</Link>
      </div>
    </div>
  );
}

function OrderManagement() {
  return (
    <div className="menu-container">
      <h2>Order Management</h2>
      <div className="menu-options">
        <Link to="/order-management/create-order">Create Order</Link>
        <Link to="/order-management/view-orders">View All Orders</Link>
        <Link to="/order-management/search-order">Search Order</Link>
      </div>
    </div>
  );
}

function Layout() {
  const location = useLocation(); // Hook to get current location
  const hideNavbar = location.pathname === '/'; // Hide navbar on the home page

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/order-management" element={<OrderManagement />} />

        {/* Inventory Management Pages */}
        <Route path="/inventory-management/add-item" element={<AddItem />} />
        <Route path="/inventory-management/view-items" element={<ViewAllItems />} />
        <Route path="/inventory-management/search-item" element={<SearchItem />} />
        <Route path="/inventory-management/update-item" element={<UpdateItem />} />

        {/* Order Management Pages */}
        <Route path="/order-management/create-order" element={<CreateOrder />} />
        <Route path="/order-management/view-orders" element={<ViewAllOrders />} />
        <Route path="/order-management/search-order" element={<SearchOrder />} />
      </Routes>
      <Footer /> {/* Add footer here */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
