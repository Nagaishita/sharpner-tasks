import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'products.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
