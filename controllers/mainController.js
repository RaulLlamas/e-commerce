const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const Sequelize = require('sequelize');


const controller = {
    index: (req, res) => {

      /*const entradas = products.filter((pro) => {
        return pro.category === 'entrada';
      })*/
       db.Producto.findAll({include:[{association:"categories"}]})
      .then(products=>{
        const entradas = products.filter((pro) => {
          console.log(pro)
          return pro.Id_Categories === 1;

        })
        const porvienes = products.filter((pro) => {
          return pro.Id_Categories === 2;
        })
        const postres = products.filter((pro) => {
          return pro.Id_Categories === 3;
        })
        
        res.render('index', {entradas: entradas,porvienes: porvienes, postres: postres, toThousand: toThousand, user: req.session.userLogged})
      })
    

      //res.sendFile(path.resolve("views/products/index.html"));
      //res.render('index',{  porvienes: porvienes, postres: postres, toThousand: toThousand, user: req.session.userLogged});
    }
  };
  
  module.exports = controller;