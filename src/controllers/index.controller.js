const data = require("../data/data");

const getHome = (request, response) => {
  response.json({
    msg: "success",
  });
};

const getLogin = (request, response) => {
  response.render("login");
};

const getRegiser = (request, response) => {
  response.render("register");
};

module.exports = {
  getHome,
  getLogin,
  getRegiser,
};
