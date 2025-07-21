import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "products.html"));
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
