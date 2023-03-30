const express = require("express");
const router = express.Router();
const {
  getHome,
  getLogin,
  getRegiser,
} = require("../controllers/index.controller");

const { getProduct, addProduct } = require("../controllers/product.controller");

router.get("/", getHome);

router.get("/login", getLogin);

router.get("/register", getRegiser);

router.get("/products", getProduct);

router.get("/add-product", addProduct);

module.exports = router;
