const express = require("express");
const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);

router.get("/shopping-cart", mainController.productCart);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

router.get("/productDetail", mainController.productDetail);

module.exports = router;  