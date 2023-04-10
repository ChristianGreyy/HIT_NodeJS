const express = require("express");
const router = express.Router();

const {
  getProductById,
  getProducts,
  createProduct,
  deleteProductById,
  updateProductById,
} = require("../controllers/product.controller");

router.route("/products").get(getProducts).post(createProduct);

router
  .route("/products/:productId")
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);

module.exports = router;
