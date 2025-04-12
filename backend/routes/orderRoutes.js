const express = require("express");
const { createOrder, getUserOrders, getAllOrders, updateOrderStatus, deleteOrder } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware"); 
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createOrder); // Create order (protected)
router.get("/", authMiddleware, getUserOrders); // Get user orders (protected)
router.get("/all", authMiddleware, adminMiddleware, getAllOrders); // Get all orders (admin only)
router.put("/:id", authMiddleware, adminMiddleware, updateOrderStatus); // Update order (admin only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteOrder); // Delete order (admin only)

module.exports = router;
