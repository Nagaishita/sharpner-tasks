const productService = require('../services/productService');

const getAllProducts = (req, res) => {
  const result = productService.getAllProducts();
  res.send(result);
};

const getProductById = (req, res) => {
  const result = productService.getProductById(req.params.id);
  res.send(result);
};

const addNewProduct = (req, res) => {
  const result = productService.addNewProduct();
  res.send(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
};
