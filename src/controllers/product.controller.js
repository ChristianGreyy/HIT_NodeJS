const data = require("../data/data");
const Product = require("../models/product.model");

const getProductById = (request, response) => {
  const products = data;
  const product = products.find((item, index) => {
    return item.id == request.params.productId;
  });
  if (product) {
    response.json({
      product,
    });
  } else {
    response.json({
      msg: "Product not found",
    });
  }
};
const getProducts = (request, response) => {
  const products = Product.find();
  response.json({
    products,
  });
};
const createProduct = (req, res) => {
  const product = new Product({
    id: "22",
    title: "title1",
    price: "price1",
    description: "description1",
    category: "category1",
  });
  product.save();

  res.json({
    msg: "success",
  });
};

const deleteProductById = (req, res) => {
  const { productId } = req.params;
  let products = data;

  products = products.filter((item) => {
    return item.id != productId;
  });

  res.json({
    products: products,
  });
};

const updateProductById = (req, res) => {
  let products = data;
  const { productId } = req.params;
  const newProduct = req.body;
  products = products.map((item) => {
    if (item.id == productId) {
      return newProduct;
    }
    return item;
  });
  res.json({
    newProducts: products,
  });
};

module.exports = {
  getProductById,
  getProducts,
  createProduct,
  deleteProductById,
  updateProductById,
};
