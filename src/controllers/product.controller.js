const data = require("../data/data");

const getProduct = (request, response) => {
  console.log(data);
  response.render("product", {
    title: "My product",
    products: data,
    check: false,
  });
};

const addProduct = (request, response) => {
  console.log(data);
  response.render("add-product", {
    title: "Add product",
  });
};

module.exports = {
  getProduct,
  addProduct,
};
