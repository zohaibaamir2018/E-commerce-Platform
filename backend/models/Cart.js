const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  image: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1
  },
  brand: String
});

const cartSchema = new mongoose.Schema({
  userId: String, // assume login later
  items: [cartItemSchema],
});

module.exports = mongoose.model("Cart", cartSchema);
