function redirigirSinLogin(req, res, next) {
  res.redirect("/");
}

module.exports = redirigirSinLogin;
