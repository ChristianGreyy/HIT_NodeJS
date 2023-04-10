const fs = require("fs");
const path = require("path");

class Product {
  constructor({ id, title, price, description, category }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
  }

  save() {
    const newProduct = this;
    const products = Product.find();
    // convert instance class to object
    products.push(newProduct);
    // Javascript to Json
    const productsJson = JSON.stringify(products);
    // Write file
    fs.writeFileSync(
      path.join(__dirname, "../data/products.json"),
      productsJson
    );
  }

  static find() {
    try {
      //   read file products.json
      const productsJson = fs.readFileSync(
        path.join(__dirname, "../data/products.json"),
        "utf8"
      );
      //   convert json to javascript
      const products = JSON.parse(productsJson);
      return products;
    } catch (err) {
      console.error(err);
    }
  }

  static findById(productId) {}
}

module.exports = Product;
