const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    index: (req, res) => {

      const entradas = products.filter((pro) => {
        return pro.category === 'entrada';
      })
      const porvienes = products.filter((pro) => {
        return pro.category === 'por-lo-que-vienes';
      })
      const postres = products.filter((pro) => {
        return pro.category === 'postre';
      })

      //res.sendFile(path.resolve("views/products/index.html"));
      res.render('index',{ entradas: entradas, porvienes: porvienes, postres: postres, toThousand: toThousand});
    }
  };
  
  module.exports = controller;