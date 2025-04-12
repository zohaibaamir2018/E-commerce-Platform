const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  updateQuantity,
  removeItem
} = require("../controllers/cartController");

router.get("/:userId", getCart);
router.post("/add", addToCart);
router.put("/update", updateQuantity);
router.delete("/remove", removeItem);

module.exports = router;
