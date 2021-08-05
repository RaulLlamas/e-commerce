const express = require("express");
const usersController = require("../controllers/usersController");
const uploadFile = require('../config/multer')

const router = express.Router();


router.get("/register", usersController.register);
router.post("/register",uploadFile.single('UsuarioImage'), usersController.create);
//router.get('/users/list', usersController.store)
router.get("/login", usersController.login);



module.exports = router;  