const fs = require('fs');
const path = require('path');
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/usersDB.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const db = require("../database/models");
const { Console } = require('console');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
  'list': (req, res) => {
    db.Usuario.findAll()
        .then(usuarios => {
            res.render('users/userProfile', {usuarios})
        })
        
},
'detail': (req, res) => {
    db.Usuario.findByPk(req.params.id, {include:[{association:"address"}]})
        .then(usuarios => {
            res.render('users/userDetail', {usuarios:usuarios});
        });
},
  login: (req, res) => {
    //res.sendFile(path.resolve("views/users/login.html"));
    res.render('users/login');
  },
  loginProcess: (req, res) =>{
    let userToLogin = User.findByField('email', req.body.email);
    if(userToLogin){
      let isOkThePassword= bcrypt.compareSync(req.body.password, userToLogin.password);
      if(isOkThePassword){
        delete userToLogin.password;
        delete userToLogin.confPassword;
        req.session.userLogged = userToLogin;

        if(req.body.remember){
          res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60)* 30})
        }
        return res.redirect('/');
      }
    }

    return res.render('users/login', {
      errors:{
        email: {
          msg: 'El correo o la contraseña es invalido'
        }
      },
      oldData: req.body
    });

  },
  register: (req, res) => {
   // res.sendFile(path.resolve("views/users/register.html"));
   res.render('users/register')
   /* db.Usuarios.findAll()
      .then(function(user){
        return res.render('register',{user:user})
      })*/
  },
  create: (req,res) => {
    /*const resultValidation = validationResult(req);

    if(resultValidation.errors.length > 0){
      return res.render('users/register', {
          errors: resultValidation.mapped(),
          oldData: req.body
      });
    } 

    let userInDB = User.findByField('email', req.body.email);
    if (userInDB){
      return res.render('users/register', {
        errors: {
          email: {
            msg: 'Este email ya está registrado'
          }
        },
        oldData: req.body
      });
    }

    const newUser = req.body;
    if(req.file){
      newUser.image = req.file.filename
    }else{
      newUser.image = 'default-image.png'
    }
    newUser.password = bcrypt.hashSync(userData.password,10)
    newUser.confPassword = bcrypt.hashSync(userData.confPassword,10)

    let userCreated = User.create(newUser);
    res.redirect('users/login');*/
   

    db.Direccion.create({
      Street: req.body.street,
      Number_ext: req.body.number_ext,
      Colony: req.body.colonia,
      Number_int:req.body.number_int,
      Reference: req.body.reference
    })
    .then((Direccion)=>{
      const idAddress = Direccion.Id_addresses
      console.log('Hola'+ idAddress)
      console.log('adios' + req.body.UsuarioImage)
      return   db.Usuario.create({
        name: req.body.name,
        email: req.body.email,
        Telephone: req.body.telephone,
        password:req.body.password,
        Birthday_date: req.body.birthday,
        Id_Addresses: idAddress,
        Image:req.body.UsuarioImage
      })
    })
    .then(()=> {
      return res.redirect('/')})            
  .catch(error => res.send(error))
      
  },edit: function(req,res) {
    let idusuario = req.params.id;
    let promUser = db.Usuario.findByPk(idusuario,{include:[{association:"address"}]});
    let promAddress = db.Direccion.findAll();
    Promise
    .all([promUser, promAddress])
    .then(([Usuario, allAddress]) => {
        return res.render(path.resolve(__dirname, '..', 'views','users',  'editUser'), {Usuario,allAddress})})
    .catch(error => res.send(error))
},
update: function (req,res) {
    
    db.Usuario.update(
        {
          name: req.body.name,
          email: req.body.email,
          Telephone: req.body.telephone,
          password:req.body.password,
          Birthday_date: req.body.birthday,
          Image:req.body.UsuarioImage
        },
        {
            where: {Id_users: req.params.id}
        })
    .then(()=> {
      console.log(req.params.name)
        return res.redirect('/')})            
    .catch(error => res.send(error))
},
  profile: (req, res) => {
    console.log(req.cookies.userEmail);
    return res.render('users/profile', {user: req.session.userLogged});
  },
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  }
  
}

module.exports = controller;
