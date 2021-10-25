const express = require("express");
const usersController = require("../controllers/usersController");
const { body } = require('express-validator');
const uploadFile = require('../config/multerUser');
const loginMiddleware = require('../middlewares/loginMiddleware')
const path = require('path')
const router = express.Router();
const db = require("../database/models");

//Validaciones

const validateCreateForm =[
    body('name')
        .notEmpty().withMessage('Debes completar el campo nombre').bail().isLength({ min: 2})
        .isString().withMessage('Debe de ser solo texto  y contener al menos 2 caracteres'),
    body('telephone')
        .notEmpty().withMessage('Debes completar el campo telefono').bail()
        .isMobilePhone().withMessage('Debe de ser un numero telefonico'),
    body('street').notEmpty().withMessage('Debes completar el campo calle'),
    body('number_ext')
        .notEmpty().withMessage('Debes completar el campo numero exterior').bail()
        .isNumeric().withMessage('Debes ingresar un dato numerico'),
    body('colonia').notEmpty().withMessage('Debes completar el campo colonia'),
    body('email')
        .notEmpty().withMessage('Debes completar el campo email').bail()
        .isEmail().withMessage('Debes ingresar un correo valido').bail()
        .custom(async (email) => {
            const existingUser = 
                await db.Usuario.findOne({ where: { email: email } });
                  
            if (existingUser) {
                throw new Error('Email already in use')
            }
        }),
    body('password').notEmpty().isLength({ min: 8}).withMessage('Debes completar el campo contraseña y contener al menos 8 caracteres'),
    body('confPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('La confirmacion de la constraseña no coincide');
        }
        return true;
    }),
    body('UsuarioImage').custom((value,{req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];
       
        if(!file) {
            throw new Error('Debes subir una imagen')
        }else{
            let fileExtension = path.extname(file.filename)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
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

router.get("/userProfile", usersController.list);

router.get("/userDetail/:id", usersController.detail);

router.get("/editUser/:id",usersController.edit)

router.put("/editUser/:id",uploadFile.single('UsuarioImage'),usersController.update)


module.exports = router;  