const express = require("express");
const router = express.Router();
const {
  getHome,
  getLogin,
  getRegiser,
} = require("../controllers/index.controller");

router.get("/", getHome);

router.get("/login", getLogin);

router.get("/register", getRegiser);

module.exports = router;
