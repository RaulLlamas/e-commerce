const fs = require('fs');
const path = require('path');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const usersFilePath = path.join(__dirname, '../data/usersDB.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
  login: (req, res) => {
    //res.sendFile(path.resolve("views/users/login.html"));
    res.render('users/login');
  },
  register: (req, res) => {
   // res.sendFile(path.resolve("views/users/register.html"));
   res.render('users/register')
  },
  create: (req,res) => {
    const newUser = req.body;
   //let errors = validationResult(req);
    //if(errors.isEmpty()){
    newUser.id = Date.now();
    if(req.file){
      newUser.image = req.file.filename
    }else{
      newUser.image = 'default-image.png'
    }
    newUser.password = bcrypt.hashSync(req.body.password,10)
    users.push(newUser);
    
    const usersJSON = JSON.stringify(users,null,2);
    fs.writeFileSync(usersFilePath,usersJSON);

    res.redirect('/')
  /*}else{
    res.render('users/register',{ errors: errors.array(),
      old: req.body})
   }*/
   console.log(errors)
   console.log(newUser)
  }
  
}

module.exports = controller;
