const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes/index");
const productRouter = require("./routes/product.route");
const mongoose = require("mongoose");

const port = 3000;
app.use(express.urlencoded()); // form -> urlencoded url
app.use(express.json()); // json -> json
// set folder contain views
app.set("views", path.join(__dirname, "views"));
// set template engine ejs, handlebars, ...
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));
// app.use(router);
app.use(productRouter);

// (async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/hit_nodejs");
//     console.log("Connect database successfully!")
//   } catch (err) {
//     console.log(err);
//   }
// })();

mongoose
  .connect("mongodb://127.0.0.1:27017/hit_nodejs")
  .then(() => console.log("Connect database successfully!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("listen on port: " + port);
});
