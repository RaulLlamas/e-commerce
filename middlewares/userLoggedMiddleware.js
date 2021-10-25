const db = require('../database/models');


function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    console.log(emailInCookie);
    
    if(emailInCookie){
        let userFromCookie = db.Usuario.findOne({ where: { email: emailInCookie } })
        req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
  }
  
  module.exports = userLoggedMiddleware;