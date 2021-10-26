const path = require('path');
const db = require('../../database/models');
const Op = db.Sequelize.Op

const productsAPIController = {
    'list': (req, res) => {
        let categoria =db.Categoria.findAll().then(category=>{category})
        db.Producto.findAll({
            include:['categories']})
            .then(products => {
                let respuesta = {
                     total: products.lengt,
                    products: products.map(product =>{
                        return{
                            id: product.Id_products,
                            name: product.name,
                            description:product.description,
                            categoria: product.categories,
                            url: "http://localhost:8000/api/products/" + product.Id_products
                        }
                    })
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Producto.findByPk(req.params.id,{
            include:['categories']})
            .then(product => {
                let respuesta = {
                    data:{
                        id: product.Id_products,
                        name: product.name,
                        price:product.price,
                        description:product.description,
                        categoria: product.categories,
                        Image:"http://localhost:8000/api/products/" + product.Id_products + '/' + product.Image
                        }
                    }
                res.json(respuesta);
            });
    }
}

module.exports = productsAPIController;