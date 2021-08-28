const express = require("express");
const productsController = require("../controllers/productsController");
const uploadFile = require("../config/multer");
const sinLoginMiddleware = require("../middlewares/sinLoginMiddleware");
const loginMiddleware = require("../middlewares/loginMiddleware");

const router = express.Router();

router.get("/shopping-cart", sinLoginMiddleware, productsController.cart);

router.get("/productDetail/:id", productsController.detail);

router.get("/newProduct/", loginMiddleware, productsController.create);
router.post(
  "/newProduct",
  uploadFile.single("productImage"),
  productsController.store
);

router.get("/editProduct/:id", loginMiddleware, productsController.edit);
router.put(
  "/editProduct/:id",
  uploadFile.single("productImage"),
  productsController.update
);

router.post("/delete/:id", loginMiddleware, productsController.destroy);

module.exports = router;
