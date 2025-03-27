const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock data for products
const products = [
  { id: 1, name: "Laptop", price: 999, stock: 20 },
  { id: 2, name: "Phone", price: 699, stock: 15 },
];

// API endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(5000, () => console.log('Backend running on port 5000'));