function sinLoginMiddleware(req, res, next) {
  console.log(req.session.userLogged);
  if(!req.session.userLogged){
    return   res.redirect("/users/login");
  }
  next();
}

module.exports = sinLoginMiddleware;
