import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cart/${userId}`);
      setCart(response.data.cartItems || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Add item to cart
  const addToCart = async (productId, quantity) => {
    try {
      const res = await axios.post("http://localhost:5000/api/cart", {
        productId,
        quantity,
      });
      fetchCart();
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  // Update item quantity
  const updateQuantity = async (productId, quantity) => {
    try {
      await axios.put(`http://localhost:5000/api/cart/${productId}`, {
        quantity,
      });
      fetchCart();
    } catch (error) {
      console.error("Update quantity error:", error);
    }
  };

  // Remove item from cart
  const removeItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${productId}`);
      fetchCart();
    } catch (error) {
      console.error("Remove item error:", error);
    }
  };

  // Calculate total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateQuantity,
        removeItem,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
