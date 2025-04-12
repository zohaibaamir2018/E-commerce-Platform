const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: String, // for individual product page
  price: { type: Number, required: true, min: 0 }, // store as number, format "$..." on frontend
  originalPrice: Number,
  discount: Number,
  rating: { type: Number, default: 0, min: 0, max: 5 },
  image: String,
  images: [String],
  description: String,
  brand: String,


});

module.exports = mongoose.model("Product", productSchema);
