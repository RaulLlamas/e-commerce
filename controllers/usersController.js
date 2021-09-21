const fs = require('fs');
const path = require('path');
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/usersDB.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
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
  },
  create: (req,res) => {
    const resultValidation = validationResult(req);

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
    res.redirect('users/login');
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
