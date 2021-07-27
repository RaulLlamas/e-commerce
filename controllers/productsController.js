const controller = {
    productCart: (req, res) => {
     // res.sendFile(path.resolve("views/products/productCart.html"));
     res.render('products/prodcutCart');
    },
    productDetail: (req, res) => {
      //res.sendFile(path.resolve("views/products/productDetail.html"));
      res.render('products/prodcutDetail');
    },
    newProduct: (req, res) => {
      
      res.render('products/newProduct');
    },
  };
  
  module.exports = controller;