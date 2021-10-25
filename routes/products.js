const express = require("express");
const productsController = require("../controllers/productsController");
const uploadFile = require("../config/multerProduct");
const sinLoginMiddleware = require('../middlewares/sinLoginMiddleware')

const { body } = require('express-validator');
const router = express.Router();

//validaciones
const validateCreateForm =[
  body('name')
      .notEmpty().withMessage('Debes completar el campo nombre').bail().isLength({ min: 5})
      .withMessage('Debe de ser solo texto  y contener al menos 2 caracteres'),
  body('description')
      .notEmpty().withMessage('Debes completar el campo nombre').bail().isLength({ min: 20})
      .withMessage('Debe de ser solo texto  y contener al menos 2 caracteres'),
  body('productImage').custom((value,{req})=>{
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

//,sinLoginMiddleware
router.get("/shopping-cart", productsController.cart,sinLoginMiddleware);

router.get("/productDetail/:id", productsController.detail);

router.get("/productList", productsController.list);

router.get("/searchProduct/", productsController.search);

//sinLoginMiddleware
router.get("/newProduct/", productsController.create,sinLoginMiddleware);
router.post(
  "/newProduct",
  uploadFile.single("productImage"),validateCreateForm,
  productsController.store
);

//,sinLoginMiddleware
router.get("/editProduct/:id", productsController.edit,sinLoginMiddleware);
router.put(
  "/editProduct/:id",
  uploadFile.single("productImage"),
  productsController.update
);

router.post("/delete/:id", productsController.destroy);

module.exports = router;
