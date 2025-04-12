import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";

const AllProduct = ({ addToCart, cartlength, clearCart }) => {
  const [products, setProducts] = useState([]);
  console.log("Cart Length: ", cartlength);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    axios.get("http://localhost:5000/api/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart", {
        productId: productId,
        quantity: 1,
        userId: "user123", // Replace with real user ID from context/auth
      });

      if (response.status === 200 || response.status === 201) {
        alert("Product added to cart!");
      } else {
        alert("Failed to add to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Something went wrong.");
    }
  };

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
              All Product
            </h1>
            <div className="flex space-x-2 text-white text-sm md:text-lg">
              <Link to="/" className="hover:text-hover">
                Home
              </Link>
              <span>{">"}</span>
              <Link to="/allproduct" className="hover:text-hover">
                All Product
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:py-8 px-4 sm:px-10">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-center mb-2 mt-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            NEW ARRIVALS
          </h2>
          <p
            className="text-center text-black font-normal mb-4 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Sitewide Discounts & Savings Of Up To 25%
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((item, index) => (
              <div key={item._id} className="px-2 relative group">
                <Link to={`/product?productId=${item._id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full hover:shadow-2xl rounded-2xl object-contain mb-4"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </Link>

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 sm:w-5 h-4 sm:h-5 ${
                        i < item.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.05 3.234a1 1 0 00.95.69h3.392c.969 0 1.371 1.24.588 1.81l-2.747 1.997a1 1 0 00-.364 1.118l1.05 3.234c.3.921-.755 1.688-1.54 1.118l-2.748-1.997a1 1 0 00-1.176 0l-2.748 1.997c-.784.57-1.838-.197-1.539-1.118l1.05-3.234a1 1 0 00-.364-1.118L2.07 8.661c-.783-.57-.38-1.81.588-1.81h3.392a1 1 0 00.951-.69l1.05-3.234z" />
                    </svg>
                  ))}
                </div>

                <h3 className="text-text font-bold text-sm sm:text-md mb-1">
                  {item.name}
                </h3>
                <p className="text-hover font-bold text-sm sm:text-md">
                  {item.price}
                </p>

                <div className="absolute bottom-0 left-0 w-full bg-opacity-90 px-4 py-4 flex justify-center items-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-b-2xl">
                  {console.log("Item: ", item)}
                  <button
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                    className="px-4 py-2 bg-hover text-white rounded-lg hover:bg-text transition text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PromotionSection />
      <Footer />
    </>
  );
};

export default AllProduct;
