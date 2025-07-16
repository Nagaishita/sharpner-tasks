const express = require('express');
const app = express();

// Custom middleware to add req.user
const setUser = (req, res, next) => {
  req.user = 'Guest';
  next(); // move to the next middleware or route handler
};

// Apply middleware only to /welcome route
app.get('/welcome', setUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});
