const { url } = require('inspector');
const path = require('path');
const db = require('../../database/models');
const Op = db.Sequelize.Op

const usersAPIController = {
    'list': (req, res) => {
        db.Usuario.findAll()
            .then(users => {
                let respuesta = {
                    total: users.length,
                    users: users.map(user =>{
                        return{
                            id: user.Id_users,
                            name: user.name,
                            email: user.email,
                            url: "http://localhost:8000/api/users/" + user.Id_users
                        }
                    })
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    data:{
                        id: user.Id_users,
                        name: user.name,
                        email: user.email,
                        telephone: user.Telephone,
                        birthday: user.Birthday_date,
                        Image: "http://localhost:8000/api/users/" + user.Id_users + '/' + user.Image
                    }
                }
                res.json(respuesta);
            });
    }
}

module.exports = usersAPIController;