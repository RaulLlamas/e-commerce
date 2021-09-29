const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    cart: (req, res) => {
     // res.sendFile(path.resolve("views/products/productCart.html"));
     res.render('products/productCart');
    },
   /* detail: (req, res) => {
      let id = parseInt(req.params.id,10);
      const product = products.find(p => p.id == id);

      res.render('products/productDetail',{product: product,  toThousand: toThousand});
    },*/
    'list': (req, res) => {
      db.Producto.findAll()
      .then(producto=>{
        res.render('products/productList',{producto})
      })
    
  },
  'detail': (req, res) => {
      db.Producto.findByPk(req.params.id, {include:[{association:"categories"}]})
          .then(product => {
              res.render('products/productDetail', {product});
          });
  },
    create: (req, res) => {
      let promCategoria = db.Categoria.findAll();
      
      Promise
      .all([promCategoria])
      .then(([allCategoria]) => {
          return res.render('products/newProduct', {allCategoria})})
      .catch(error => res.send(error))
      
    },
    store: (req, res) => {
      /*const newProduct = req.body;
      
      newProduct.id= Date.now();
      if (req.file){
        newProduct.image = req.file.filename
      }else{
        newProduct.image = 'default-image.png'
      }
  
      products.push(newProduct);
      
      const productsJSON = JSON.stringify(products,null,2);
      fs.writeFileSync(productsFilePath,productsJSON);
  */
        
      db.Producto.create({
        name: req.body.name,
        price: req.body.price,
        Id_Categories: req.body.category_id,
        description:req.body.description,
        Image: req.body.productImage
      })
      .then(()=> {
        return res.redirect('/');})            
    .catch(error => res.send(error))
    },
    edit: (req, res) => {
      /*let id = parseInt(req.params.id,10);
      const product = products.find(p => p.id == id);
      
      res.render('products/editProduct',{ product :product, toThousand:toThousand } );*/
      let idproducto = req.params.id;
      let promProduct = db.Producto.findByPk(idproducto,{include:[{association:"categories"}]});
      let promCategory = db.Categoria.findAll();
      Promise
      .all([promProduct, promCategory])
      .then(([product, allCategoria]) => {
          return res.render(path.resolve(__dirname, '..', 'views','products', 'editProduct'), {product,allCategoria})})
      .catch(error => res.send(error))
    },
    update: (req, res) => {
     /* let id = parseInt(req.params.id,10);
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
  
      res.redirect('/');*/
      db.Producto.update({
        name: req.body.name,
        price: req.body.price,
        Id_Categories: req.body.category_id,
        description:req.body.description,
        Image: req.body.productImage
      },
        {
            where: {Id_products: req.params.id}
        })
    .then(()=> {
        return res.redirect('/')})            
    .catch(error => res.send(error))
    },
    delete: function (req,res) {
      let productId = req.params.id;
      Producto.findByPk(productId)
      .then(product => {
          return res.render(path.resolve(__dirname, '..', 'views', 'products', 'deleteProduct'), {product})})
      .catch(error => res.send(error))
  },
    destroy: function (req,res) {
    /* let id = parseInt(req.params.id,10);
    
      const productsFilter = products.filter(p => p.id != id);
      const product = products.find(p => p.id == id);
      if (product.image != 'default-image.png'){
        fs.unlinkSync('public/img/' + product.image)
      }
      const productsJSON = JSON.stringify(productsFilter,null,2);
      fs.writeFileSync(productsFilePath,productsJSON);*/
      let productId = req.params.id;
      db.Producto.destroy({where: {Id_products: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    }

  };
  
  module.exports = controller;