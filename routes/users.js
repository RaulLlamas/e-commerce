const express = require("express");
const usersController = require("../controllers/usersController");
const {body} = require('express-validator');
const uploadFile = require('../config/multer');


const router = express.Router();

//Validaciones

const validateCreateForm =[
    body('name').isString().withMessage('Debes completar el campo nombre'),
    body('telephone').isMobilePhone().notEmpty().withMessage('Debes completar el campo telefono'),
    body('street').notEmpty().withMessage('Debes completar el campo calle'),
    body('number_ext').isNumeric().notEmpty().withMessage('Debes completar el campo numero'),
    body('colonia').notEmpty().withMessage('Debes completar el campo colonia'),
    body('email').isEmail().notEmpty().withMessage('Debes completar el campo email'),
    body('password').notEmpty().withMessage('Debes completar el campo contraseña')
];

router.get("/register", usersController.register);
router.post("/register",validateCreateForm,uploadFile.single('UsuarioImage'), usersController.create);
//router.get('/users/list', usersController.store)
router.get("/login", usersController.login);



module.exports = router;  