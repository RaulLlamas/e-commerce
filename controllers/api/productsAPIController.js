const path = require('path');
const db = require('../../database/models');
const Op = db.Sequelize.Op

const productsAPIController = {
    'list': (req, res) => {

        db.Producto.findAll({
            include:['categories']})
            .then(products => {

                let te= 0;
                let tf= 0;
                let tp= 0;

                products.forEach(product=>{
                    if(product.categories.name=='Entrada'){
                        te++;
                    }else if(product.categories.name=='Postres'){
                        tp++;
                    }else{
                        tf++;
                    }
                })
                let respuesta = {
                    total: products.length,
                    totalbyCategory: {
                        Entradas: te,
                        'Por lo que vienes': tf,
                        Postres: tp
                    },
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