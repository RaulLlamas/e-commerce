const path = require('path');
const db = require('../../database/models');
const Op = db.Sequelize.Op

const productsAPIController = {
    'list': (req, res) => {
        db.Producto.findAll()
            .then(products => {
                let respuesta = {
                    data: products
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    data: product
                }
                res.json(respuesta);
            });
    }
}

module.exports = productsAPIController;