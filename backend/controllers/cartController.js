const Cart = require("../models/Cart");

// Get cart items by user
exports.getCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId });
  if (!cart) return res.json({ items: [] });
  res.json(cart);
};

// Add item to cart
exports.addToCart = async (req, res) => {
  const { userId, item } = req.body;
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [item] });
  } else {
    const existingItem = cart.items.find(i => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.items.push(item);
    }
  }

  await cart.save();
  res.json(cart);
};

// Update quantity
exports.updateQuantity = async (req, res) => {
  const { userId, productId, delta } = req.body;
  const cart = await Cart.findOne({ userId });

  const item = cart.items.find(i => i.productId === productId);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
    await cart.save();
  }

  res.json(cart);
};

// Remove item
exports.removeItem = async (req, res) => {
  const { userId, productId } = req.body;
  const cart = await Cart.findOne({ userId });
  cart.items = cart.items.filter(item => item.productId !== productId);
  await cart.save();

  res.json(cart);
};
