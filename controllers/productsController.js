const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    productCart: (req, res) => {
     // res.sendFile(path.resolve("views/products/productCart.html"));
     res.render('products/productCart');
    },
    productDetail: (req, res) => {
      let id = parseInt(req.params.id,10);
      const product = products.find(p => p.id == id);
      //res.sendFile(path.resolve("views/products/productDetail.html"));
      res.render('products/productDetail',{product: product,  toThousand: toThousand});
    },
    newProduct: (req, res) => {
      
      res.render('products/newProduct');
    },
    editProduct: (req, res) => {
      
      res.render('products/editProduct');
    },
    
  };
  
  module.exports = controller;