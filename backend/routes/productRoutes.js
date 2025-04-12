const express = require("express");
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware"); // Protect routes

const router = express.Router();

router.post("/addProducts", addProduct); // Add product (protected)
// router.post("/upload", addProduct); // Add product (protected)
router.get("/", getProducts); // Get all products
router.get("/getProductById", getProductById); // Get single product
router.put("/:id", authMiddleware, updateProduct); // Update product (protected)
router.delete("/:id", authMiddleware, deleteProduct); // Delete product (protected)

module.exports = router;
