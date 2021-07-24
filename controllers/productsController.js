const controller = {
    productCart: (req, res) => {
     // res.sendFile(path.resolve("views/products/productCart.html"));
     res.render('products/prodcutCart');
    },
    productDetail: (req, res) => {
      //res.sendFile(path.resolve("views/products/productDetail.html"));
      res.render('products/prodcutDetail');
    },
  };
  
  module.exports = controller;