import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";

const CheckoutPage = ({ cartlength, clearCart }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar cartlength={cartlength} clearCart={clearCart} />

      <section className="w-full flex justify-center items-center">
        <div
          className="bg-no-repeat bg-cover w-full h-[200px] md:h-[254px] flex justify-center items-center"
          style={{ backgroundImage: `url('/img/banner.jpg')` }}
        >
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <h1
              className="text-4xl md:text-6xl font-bold text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Checkout
            </h1>
            <div className="flex space-x-2 text-white text-sm md:text-lg">
              <Link to="/" className="hover:text-hover">
                Home
              </Link>
              <span>{">"}</span>
              <Link to="/checkout" className="hover:text-hover">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gray-100 py-16 px-4">
        <div
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center uppercase">
            Billing Details
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1">
                First name <span className="text-hover">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Email address <span className="text-hover">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Name *"
                className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Company name (optional)
              </label>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Country / Region <span className="text-hover">*</span>
              </label>
              <select
                className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              >
                <option className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover">
                  Pakistan (PKR)
                </option>
                <option className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover">
                  United Arab Emirates (UAE)
                </option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Street address <span className="text-hover">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full my-1 bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full my-1 bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Town / City <span className="text-hover">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Postal Code <span className="text-hover">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Phone Number <span className="text-hover">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Shipping Method <span className="text-hover">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shipping"
                    required
                    className="accent-hover"
                  />
                  <span>Standard Shipping (3–5 days)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shipping"
                    className="accent-hover"
                  />
                  <span>Express Shipping (1–2 days)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shipping"
                    className="accent-hover"
                  />
                  <span>Next Day Delivery</span>
                </label>
              </div>
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                className="bg-hover text-white px-8 py-3 font-normal rounded-lg hover:bg-text transition duration-300"
              >
                <Link to="/payment">Continue to Payment</Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <PromotionSection />
      <Footer />
    </>
  );
};

export default CheckoutPage;
