const express = require("express");
const router = express.Router();
const {
  getHome,
  getLogin,
  getRegiser,
} = require("../controllers/index.controller");

const {
  getProductById,
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/product.controller");

router.get("/", getHome);

router.get("/login", getLogin);

router.get("/register", getRegiser);

// CRUD
router.get("/products", getProducts); // -> READ
router.post("/add-product", addProduct); // -> CREATE
router.get("/products/:productId", getProductById); // -> READ
router.put("/edit-product/:productId", editProduct); // -> UPDATE
router.delete("/delete-product/:productId", deleteProduct); // -> DELETE

module.exports = router;
