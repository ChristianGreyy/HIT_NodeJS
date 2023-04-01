const data = require("../data/data");

const getProductById = (request, response) => {
  const product = data.find((item) => item.id == request.params.productId);
  response.json({
    product,
  });
};
const getProducts = (request, response) => {
  let products = data;
  if (request.query.price) {
    products = data.filter((item) => request.query.price > +item.price);
  }
  response.json({
    products: products,
  });
};
const addProduct = (req, res) => {
  const product = req.body;
  res.json({
    product: product,
  });
};

const deleteProduct = (req, res) => {
  const product = req.body;
  res.json({
    product: product,
  });
};

const editProduct = (req, res) => {
  const product = req.body;
  res.json({
    product: product,
  });
};

module.exports = {
  getProductById,
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
};
