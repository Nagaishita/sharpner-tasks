const express = require('express');
const app = express();
const PORT = 4000;

// Home route
app.get('/', (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

// Use routes with base paths
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// 404 handler for all other routes
app.use('*', (req, res) => {
  res.status(404).send("Page not found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
