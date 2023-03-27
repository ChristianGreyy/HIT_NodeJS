const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes/index");

const port = 3000;
// set folder contain views
app.set("views", path.join(__dirname, "views"));
// set template engine ejs, handlebars, ...
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(port, () => {
  console.log("listen on port: " + port);
});
