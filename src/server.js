const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes/index");
const productRouter = require("./routes/product.route");

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

app.listen(port, () => {
  console.log("listen on port: " + port);
});
