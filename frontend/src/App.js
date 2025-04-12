import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import AllProduct from "./Pages/allProduct";
import Product from "./Pages/product";
import Checkout from "./Pages/checkout";
import Cart from "./Pages/cart";
import Login from "./Pages/login";
import Register from "./Pages/register";
import TermsCondition from "./Pages/terms&conditions";
import Privacy from "./Pages/privacy";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Payment from "./Pages/payment";
import ForgotPassword from "./Pages/forgotPassword";
import AddProduct from "./Pages/AddProduct";
import ResetPassword from "./Pages/ResetPassword"

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Add to Cart Called", product)
    setCart((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      if (existingItem) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prev, product];
      }
    });
  };

  const removeFromCart = (product) => {
    console.log("Remove from Cart Called", product);
    setCart((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      if (existingItem) {
        // If quantity is more than 1, reduce it by 1, otherwise remove the item from the cart
        if (existingItem.quantity > 1) {
          return prev.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prev.filter((item) => item._id !== product._id);
        }
      } else {
        return prev;
      }
    });
};

const removeProductFromCart = (product) => {
  console.log("Remove Product From Cart Called", product);
  setCart((prev) => {
    // Filter out the product by matching its ID
    return prev.filter((item) => item._id !== product._id);
  });
};

const clearCart = () => {
  console.log("Cart Cleared");
  setCart([]);
};


  const addFromCart = (product) => {
    console.log("Remove from Cart Called", product);
    setCart((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      if (existingItem) {
        // If quantity is more than 1, reduce it by 1, otherwise remove the item from the cart
        if (existingItem.quantity >= 1) {
          return prev.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return prev.filter((item) => item._id !== product._id);
        }
      } else {
        return prev;
      }
    });
};


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} cartlength={cart.length} clearCart={clearCart}/>} /> 
        <Route path="/home" element={<Home addToCart={addToCart} clearCart={clearCart} cartlength={cart.length}/>} />
        <Route path="/allproduct" element={<AllProduct clearCart={clearCart} cartlength={cart.length} addToCart={addToCart}/>} />
        <Route path="/addproduct" element={<AddProduct clearCart={clearCart} cartlength={cart.length} />} />
        <Route path="/product" element={<Product clearCart={clearCart} cartlength={cart.length} addToCart={addToCart} />} />
        <Route path="/about" element={<About cartlength={cart.length} />} />
        <Route path="/contact" element={<Contact clearCart={clearCart} cartlength={cart.length} />} />
        <Route path="/cart" element={<Cart clearCart={clearCart} cartlength={cart.length} cart={cart} removeFromCart={removeFromCart} addFromCart={addFromCart} removeProductFromCart={removeProductFromCart} />} />
        <Route path="/checkout" element={<Checkout clearCart={clearCart} cartlength={cart.length} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/termsConditions" element={<TermsCondition />} />
        <Route path="/privacy" element={<Privacy clearCart={clearCart} cartlength={cart.length}/>} />
        <Route path="/payment" element={<Payment clearCart={clearCart} cartlength={cart.length}/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

      </Routes>
    </div>
  );
}

export default App;
