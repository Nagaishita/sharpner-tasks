const express = require('express');
const app = express();
const PORT = 4000;

// Route: /welcome/:username
app.get('/welcome/:username', (req, res) => {
  // Extract route parameter
  const username = req.params.username;

  // Extract query parameter (e.g., ?role=Admin)
  const role = req.query.role;

  // Send a personalized response
  res.send(`Welcome ${username}, your role is ${role || 'undefined'}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
