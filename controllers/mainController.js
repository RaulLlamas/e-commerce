const path = require("path");

const controller = {
  index: (req, res) => {
    //res.sendFile(path.resolve("views/products/index.html"));
    res.render('products/index')
  },
  productCart: (req, res) => {
    res.sendFile(path.resolve("views/products/productCart.html"));
  },
  login: (req, res) => {
    res.sendFile(path.resolve("views/users/login.html"));
  },
  register: (req, res) => {
    res.sendFile(path.resolve("views/users/register.html"));
  },
  productDetail: (req, res) => {
    res.sendFile(path.resolve("views/products/productDetail.html"));
  },
};
module.exports = controller;
