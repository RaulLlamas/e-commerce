const path = require('path');
const db = require('../../database/models');
const Op = db.Sequelize.Op

const usersAPIController = {
    'list': (req, res) => {
        db.Usuario.findAll()
            .then(users => {
                let respuesta = {
                    count: users.length,
                    users: users
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    data: user
                }
                res.json(respuesta);
            });
    }
}

module.exports = usersAPIController;