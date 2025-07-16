// server.js
const express = require('express');
const app = express();
const PORT = 4000;

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Import the router
const productRoutes = require('./routes/productRoutes');

// Use the router
app.use('/', productRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
