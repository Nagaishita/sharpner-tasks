import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Required for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON from POST
app.use(express.json());

// Serve HTML form
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'products.html'));
});

// Handle product POST
app.post('/api/products', (req, res) => {
  const { productName } = req.body;

  console.log('Received Product:', productName);

  res.status(201).json({ productName });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
