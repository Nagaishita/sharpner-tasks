// controllers/productController.js

exports.getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  res.send(`Fetching product with ID: ${productId}`);
};

exports.addProduct = (req, res) => {
  res.send("Adding a new product");
};
