const path = require("path");

const controller = {
  index: (req, res) => {
    res.sendFile(path.resolve("views/index.html"));
  },
  productCart: (req, res) => {
    res.sendFile(path.resolve("views/productCart.html"));
  },
  login: (req, res) => {
    res.sendFile(path.resolve("views/login.html"));
  },
  register: (req, res) => {
    res.sendFile(path.resolve("views/register.html"));
  },
  productDetail: (req, res) => {
    res.sendFile(path.resolve("views/productDetail.html"));
  },
};
module.exports = controller;
