const express = require("express");
const productsController = require("../controllers/productsController");
const uploadFile = require('../config/multer')

const router = express.Router();


router.get("/shopping-cart", productsController.cart);

router.get("/productDetail/:id", productsController.detail);

router.get("/newProduct/", productsController.create);
router.post("/newProduct",uploadFile.single('productImage'), productsController.store);

router.get("/editProduct/:id", productsController.edit);
router.put("/editProduct/:id",uploadFile.single('productImage'), productsController.update);

router.post("/delete/:id", productsController.destroy);

module.exports = router;  