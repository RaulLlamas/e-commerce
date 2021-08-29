const express = require("express");
const productsController = require("../controllers/productsController");
const uploadFile = require("../config/multer");
const sinLoginMiddleware = require('../middlewares/sinLoginMiddleware')

const router = express.Router();

router.get("/shopping-cart",sinLoginMiddleware, productsController.cart);

router.get("/productDetail/:id", productsController.detail);

router.get("/newProduct/",sinLoginMiddleware, productsController.create);
router.post(
  "/newProduct",
  uploadFile.single("productImage"),
  productsController.store
);

router.get("/editProduct/:id",sinLoginMiddleware, productsController.edit);
router.put(
  "/editProduct/:id",
  uploadFile.single("productImage"),
  productsController.update
);

router.post("/delete/:id", productsController.destroy);

module.exports = router;
