const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    cart: (req, res) => {
     // res.sendFile(path.resolve("views/products/productCart.html"));
     res.render('products/productCart');
    },
    detail: (req, res) => {
      let id = parseInt(req.params.id,10);
      const product = products.find(p => p.id == id);

      res.render('products/productDetail',{product: product,  toThousand: toThousand});
    },
    create: (req, res) => {
      res.render('products/newProduct');
    },
    store: (req, res) => {
      const newProduct = req.body;
      
      newProduct.id= Date.now();
      if (req.file){
        newProduct.image = req.file.filename
      }else{
        newProduct.image = 'default-image.png'
      }
  
      products.push(newProduct);
      
      const productsJSON = JSON.stringify(products,null,2);
      fs.writeFileSync(productsFilePath,productsJSON);
  
      res.redirect('/');
    },
    edit: (req, res) => {
      let id = parseInt(req.params.id,10);
      const product = products.find(p => p.id == id);
      
      res.render('products/editProduct',{ product :product, toThousand:toThousand } );
    },
    update: (req, res) => {
      let id = parseInt(req.params.id,10);
      const product = products.find(p => p.id == id);
  
      product.name = req.body.name
      product.price = req.body.price
      product.discount = req.body.discount
      product.category = req.body.category
      product.description = req.body.description
      if (req.file){
        product.image = req.file.filename
      }
      
      const productsJSON = JSON.stringify(products,null,2);
      fs.writeFileSync(productsFilePath,productsJSON);
  
      res.redirect('/');
    },
    destroy : (req, res) => {
      let id = parseInt(req.params.id,10);
  
      const productsFilter = products.filter(p => p.id != id);
      const product = products.find(p => p.id == id);
      if (product.image != 'default-image.png'){
        fs.unlinkSync('public/img/' + product.image)
      }
      const productsJSON = JSON.stringify(productsFilter,null,2);
      fs.writeFileSync(productsFilePath,productsJSON);
  
      res.redirect('/');
    }

  };
  
  module.exports = controller;