const express = require("express");
const productsController = require("../controllers/productsController");
const uploadFile = require("../config/multerProduct");
const sinLoginMiddleware = require('../middlewares/sinLoginMiddleware')

const router = express.Router();

//,sinLoginMiddleware
router.get("/shopping-cart", productsController.cart);

router.get("/productDetail/:id", productsController.detail);

router.get("/productList", productsController.list);

router.get("/searchProduct/", productsController.search);

//sinLoginMiddleware
router.get("/newProduct/", productsController.create);
router.post(
  "/newProduct",
  uploadFile.single("productImage"),
  productsController.store
);

//,sinLoginMiddleware
router.get("/editProduct/:id", productsController.edit);
router.put(
  "/editProduct/:id",
  uploadFile.single("productImage"),
  productsController.update
);

router.post("/delete/:id", productsController.destroy);

module.exports = router;
