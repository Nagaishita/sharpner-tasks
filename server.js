const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.json());

// Routes
app.use(productRoutes);
app.use(userRoutes);
app.use(cartRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
