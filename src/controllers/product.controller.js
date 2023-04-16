const Product = require("../models/product.model");

const getProductById = async (request, response) => {
  try {
    const { productId } = request.params;
    const product = await Product.findOne({ _id: productId });
    console.log(product);
    if (product) {
      response.json({
        product,
      });
    } else {
      response.json({
        msg: "Product not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const getProducts = async (request, response) => {
  const products = await Product.find({});
  response.json({
    products,
  });
};
const createProduct = async (req, res) => {
  const product = new Product({
    title: "title2",
    price: 19,
    description: "description1",
    category: "category1",
  });
  await product.save();

  res.json({
    product,
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
