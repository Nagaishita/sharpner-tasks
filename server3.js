// server.js
const express = require('express');
const app = express();
const PORT = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import and use the router
const bookRoutes = require('./routes/bookRoutes');
app.use('/', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(` Library server running at http://localhost:${PORT}`);
});
