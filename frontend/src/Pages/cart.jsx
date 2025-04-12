import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../context/CartContext";

const ShoppingCart = ({
  cart,
  removeFromCart,
  addFromCart,
  removeProductFromCart,
  clearCart,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar cartlength={cart.length} clearCart={clearCart} />

      <div className="bg-gray-100 min-h-screen pt-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            <div
              className="w-full lg:w-3/4 bg-white p-4 rounded-lg shadow-md"
              data-aos="fade-up"
            >
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h1 className="text-2xl font-bold uppercase">Shopping Cart</h1>
                <span className="text-lg font-semibold">
                  {cart.length} Items
                </span>
              </div>

              {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              ) : (
                <>
                  <div className="hidden md:flex text-xs font-semibold text-gray-500 uppercase border-b pb-2 mb-4">
                    <div className="w-2/5">Product Details</div>
                    <div className="w-1/5 text-center">Quantity</div>
                    <div className="w-1/5 text-center">Price</div>
                    <div className="w-1/5 text-center">Total</div>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.name}`}
                      className="flex items-center border-b py-4 text-sm"
                    >
                      <div className="flex w-2/5 items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-contain"
                        />
                        <div className="ml-4">
                          <p className="text-lg font-semibold">{item.name}</p>
                          <p className="text-gray-500 text-md">{item.brand}</p>
                          <button
                            className="text-hover hover:underline text-xs mt-1"
                            onClick={() => removeProductFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="w-1/5 text-center flex justify-center items-center">
                        <button
                          onClick={() => removeFromCart(item)}
                          className="px-2 py-1 text-lg font-bold"
                        >
                          −
                        </button>
                        <input
                          readOnly
                          className="w-10 text-center border rounded mx-1"
                          value={item.quantity}
                        />
                        <button
                          onClick={() => addFromCart(item)}
                          className="px-2 py-1 text-lg font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="w-1/5 text-center">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="w-1/5 text-center font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </>
              )}

              <Link
                to="/allproduct"
                className="inline-block mt-6 text-hover hover:underline font-medium"
              >
                &larr; Continue Shopping
              </Link>
            </div>

            <div
              className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit"
              data-aos="fade-up"
            >
              <h2 className="text-lg font-bold mb-4 border-b pb-2 uppercase">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2 text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">including VAT</p>

              <Link to="/checkout">
                <button className="mt-6 w-full bg-hover hover:bg-text text-white py-2 rounded-md font-medium transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PromotionSection />
      <Footer />
    </>
  );
};

export default ShoppingCart;
