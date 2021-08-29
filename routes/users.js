const express = require("express");
const usersController = require("../controllers/usersController");
const { body } = require('express-validator');
const uploadFile = require('../config/multer');
const loginMiddleware = require('../middlewares/loginMiddleware')

const router = express.Router();

//Validaciones

const validateCreateForm =[
    body('name')
        .notEmpty().withMessage('Debes completar el campo nombre').bail()
        .isString().withMessage('Debe de contener caracteres'),
    body('telephone')
        .notEmpty().withMessage('Debes completar el campo telefono').bail()
        .isMobilePhone().withMessage('Debe de ser un numero telefonico'),
    body('street').notEmpty().withMessage('Debes completar el campo calle'),
    body('number_ext')
        .notEmpty().withMessage('Debes completar el campo numero').bail()
        .isNumeric().withMessage('Debes ingresar un dato numerico'),
    body('colonia').notEmpty().withMessage('Debes completar el campo colonia'),
    body('email')
        .notEmpty().withMessage('Debes completar el campo email').bail()
        .isEmail().withMessage('Debes ingresar un correo valido'),
    body('password').notEmpty().withMessage('Debes completar el campo contraseña'),
    body('confPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('La confirmacion de la constraseña no coincide');
        }
        return true;
    })
];

router.get("/register", usersController.register);
router.post("/register",uploadFile.single('UsuarioImage'), validateCreateForm, usersController.create);
//router.get('/users/list', usersController.store)

router.get("/login",loginMiddleware, usersController.login);

router.post("/login", usersController.loginProcess);

router.get("/profile", usersController.profile);

router.get("/logout", usersController.logout);



module.exports = router;  