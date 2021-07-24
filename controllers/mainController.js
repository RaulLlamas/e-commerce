const path = require("path");

const controller = {
  index: (req, res) => {
    //res.sendFile(path.resolve("views/products/index.html"));
    res.render('products/index');
  },
  productCart: (req, res) => {
   // res.sendFile(path.resolve("views/products/productCart.html"));
   res.render('products/prodcutCart');
  },
  login: (req, res) => {
    //res.sendFile(path.resolve("views/users/login.html"));
    res.render('users/login');
  },
  register: (req, res) => {
   // res.sendFile(path.resolve("views/users/register.html"));
   res.render('users/register')
  },
  productDetail: (req, res) => {
    //res.sendFile(path.resolve("views/products/productDetail.html"));
    res.render('products/prodcutDetail');
  },
};
module.exports = controller;
