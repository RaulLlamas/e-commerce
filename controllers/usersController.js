const fs = require('fs');
const path = require('path');

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
  newUser.id = Date.now();
  if(req.file){
    newUser.image = req.file.filename
  }else{
    newUser.image = 'default-image.png'
  }

  users.push(newUser);
  
  const usersJSON = JSON.stringify(users,null,2);
  fs.writeFileSync(usersFilePath,usersJSON);

  res.redirect('/')

  }
}

module.exports = controller;
