const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();


router.get("/shopping-cart", productsController.productCart);

router.get("/productDetail/:id", productsController.productDetail);

router.get("/newProduct", productsController.newProduct);


module.exports = router;  