
# InvenOrder

InvenOrder is a module designed to manage inventory and orders within a larger software ecosystem. This module includes features for inventory management, order creation, and order tracking.

## Features

### Inventory Management
- **Add Items**: Add new items to the inventory with details such as item code, name, description, quantity, and expiration date.
- **View Items**: View all items currently in the inventory.
- **Search Items**: Search for items by code or name.
- **Update Items**: Update the details of existing items in the inventory.

### Order Management
- **Create Orders**: Create new orders for items including details such as item code, name, quantity, delivery date, and status.
- **View Orders**: View all orders and their statuses.
- **Search Orders**: Search for orders by item code.

## Installation

### Prerequisites

- Node.js
- MongoDB (for backend data storage)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/team-casa/InvenOrder.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd InvenOrder/backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd InvenOrder/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Access the frontend application through your web browser at `http://localhost:3000`.
2. Use the provided forms and links to manage inventory and orders.

## API Endpoints

### Inventory

- **POST /api/items**: Add a new item to the inventory.
- **GET /api/items**: Fetch all items in the inventory.
- **GET /api/items/search**: Search for items by code or name.
- **PUT /api/items/update**: Update item details.

### Orders

- **POST /api/orders**: Create a new order.
- **GET /api/orders**: Fetch all orders.
- **GET /api/orders/search**: Search for orders by item code.
