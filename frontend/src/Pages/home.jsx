import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const HomePage = ({ addToCart, clearCart, cartlength }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    axios.get("http://localhost:5000/api/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  const testimonials = [
    {
      name: "Denis Zakerburg",
      role: "Marketing Manager, Remmi",
      text: "This platform transformed the way we connect with sellers in Pakistan. Fast delivery and secure payments made everything smoother.",
    },
    {
      name: "Robert Anyino",
      role: "Small Business Owner, Dubai",
      text: "I was hesitant about cross-border trade, but this site gave me confidence. Transparent pricing and trusted couriers are game-changers.",
    },
    {
      name: "Mehmet Parblo",
      role: "E-commerce Specialist",
      text: "An impressive step toward seamless UAE-Pakistan trade. The interface is intuitive, and the AI pricing suggestions are spot-on!",
    },
  ];

  return (
    <>
      <Navbar cartlength={cartlength} clearCart={clearCart} />
      <div className="sm:min-h-screen font-sans">
        <section className="relative w-full sm:min-h-screen px-4 sm:px-6 md:px-10 flex justify-center items-center">
          <div
            className="relative bg-center bg-no-repeat bg-cover rounded-xl w-full sm:min-h-screen flex justify-center items-start pt-20 sm:pt-24 md:pt-28"
            style={{
              backgroundImage: `url('/img/home-hero-bg.jpg')`,
            }}
          >
            <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 rounded-xl text-center">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium text-white"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                SPRING
              </h2>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                COLLECTION
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl font-medium text-white"
                data-aos="flip-down"
                data-aos-duration="3000"
              >
                Start From{" "}
                <span
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white"
                  data-aos="flip-down"
                  data-aos-duration="3000"
                >
                  $ 39.99
                </span>
              </p>

              <button
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#fa8b15] hover:bg-text transition text-white text-base sm:text-lg rounded-xl shadow-lg"
                data-aos="zoom-in"
                data-aos-duration="4000"
              >
                <Link to="/allproduct">Shop Now</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="relative w-full sm:min-h-screen px-4 sm:px-6 md:px-10 flex justify-center items-center">
          <div className="py-8 sm:py-10 space-y-12 bg-white w-full">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div
                className="relative rounded-2xl w-full md:w-[60%] overflow-hidden group"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner1.jpg"
                  alt="Furniture"
                  className="w-full sm:h-full h-[160px] object-cover"
                />
                <div className="absolute h-full inset-0 flex flex-col justify-center items-end px-6 sm:px-8 sm:space-y-2">
                  <h2
                    className="text-text text-md sm:text-xl font-semibold"
                    data-aos="flip-up"
                    data-aos-duration="3000"
                  >
                    MODERN
                  </h2>
                  <h1
                    className="text-xl sm:text-3xl md:text-4xl font-bold text-text"
                    data-aos="flip-down"
                    data-aos-duration="3000"
                  >
                    FURNITURE
                  </h1>
                  <p
                    className="text-text font-medium"
                    data-aos="flip-down"
                    data-aos-duration="3000"
                  >
                    Start From{" "}
                    <span
                      className="text-hover font-bold text-base sm:text-lg"
                      data-aos="flip-down"
                      data-aos-duration="3000"
                    >
                      $39.99
                    </span>
                  </p>

                  <button
                    className="px-4 sm:px-6 py-2 bg-hover hover:bg-text hover:text-white text-white text-sm sm:text-lg rounded-xl shadow-lg transition"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>

              <div
                className="relative rounded-2xl w-full md:w-[40%] overflow-hidden group"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner2.jpg"
                  alt="Lighting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute h-full inset-0 flex flex-col justify-center items-end px-6 sm:px-8 sm:space-y-2">
                  <h2
                    className="text-text text-md sm:text-xl font-semibold"
                    data-aos="flip-up"
                    data-aos-duration="3000"
                  >
                    NEW
                  </h2>
                  <h1
                    className="text-xl sm:text-3xl md:text-4xl font-bold text-text"
                    data-aos="flip-down"
                    data-aos-duration="3000"
                  >
                    LIGHTING
                  </h1>
                  <p
                    className="text-text font-medium"
                    data-aos="flip-down"
                    data-aos-duration="3000"
                  >
                    Start From{" "}
                    <span
                      className="text-hover font-bold text-base sm:text-lg"
                      data-aos="flip-down"
                      data-aos-duration="3000"
                    >
                      $39.99
                    </span>
                  </p>

                  <button
                    className="px-4 sm:px-6 py-2 bg-hover hover:bg-text hover:text-white text-white text-sm sm:text-lg rounded-xl shadow-lg transition"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold text-center mb-2"
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
                  <div key={index} className="px-2 relative group">
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
                            i < item.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
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
                      <button
                        className="px-4 py-2 bg-[#fa8b15] text-white rounded-lg hover:bg-text transition text-sm"
                        onClick={() => addToCart({ ...item, quantity: 1 })}
                      >
                        <Link to="/cart">Add to Cart</Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full sm:min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-10">
          {" "}
          <div className="w-full max-w-screen-2xl sm:py-10 py-6 sm:space-y-12 space-y-8 bg-white">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div
                className="relative rounded-2xl w-full md:w-[50%] overflow-hidden group"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner3.jpg"
                  alt="Furniture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute h-full inset-0 flex flex-col justify-center items-center px-8 sm:space-y-2 space-y-1">
                  <h2
                    className="text-white text-2xl md:text-3xl lg:text-5xl font-bold"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    BED ROOM
                  </h2>
                  <h1
                    className="md:text-xl sm:text-lg text-sm font-medium text-white"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    Up to 20% off all furniture on store
                  </h1>
                  <p
                    className="text-text font-medium"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    Start From{" "}
                    <span
                      className="text-[#fa8c16] font-bold sm:text-lg text-sm"
                      data-aos="fade-down"
                      data-aos-duration="3000"
                    >
                      $39.99
                    </span>
                  </p>

                  <button
                    className="md:px-6 md:py-2 px-3 py-1 bg-[#fa8b15] hover:bg-text hover:text-white text-white text-lg rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>

              <div
                className="relative rounded-2xl w-full md:w-[50%] overflow-hidden group"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner4.jpg"
                  alt="Lighting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute h-full inset-0 flex flex-col justify-center items-center px-8 sm:space-y-2 space-y-1">
                  <h2
                    className="text-white text-2xl md:text-3xl lg:text-5xl font-bold"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    DINING DEALS
                  </h2>
                  <h1
                    className="md:text-xl sm:text-lg text-sm font-medium text-white"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    Up to 20% off all furniture on store
                  </h1>
                  <p
                    className="text-text font-medium"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    Start From{" "}
                    <span
                      className="text-[#fa8c16] font-bold sm:text-lg text-sm"
                      data-aos="fade-down"
                      data-aos-duration="3000"
                    >
                      $39.99
                    </span>
                  </p>

                  <button
                    className="md:px-6 md:py-2 px-3 py-1 bg-[#fa8b15] hover:bg-text hover:text-white text-white text-lg rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row sm:gap-6 gap-4 items-center justify-between">
              <div
                className="relative rounded-2xl w-full md:w-[60%] overflow-hidden group h-[350px]"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner5.jpg"
                  alt="Furniture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute h-full inset-0 flex flex-col justify-center md:items-start items-center md:px-12 px-6 space-y-4">
                  <h2
                    className="text-hover md:text-2xl text-xl font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Deal Of The Day
                  </h2>
                  <h1
                    className="text-2xl md:text-3xl lg:text-5xl font-bold text-white"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    Aqua Globes 2
                  </h1>
                  <div className="flex items-center justify-between">
                    <p
                      className="text-gray-200 text-sm line-through pr-4 font-medium"
                      data-aos="fade-down"
                      data-aos-duration="3000"
                    >
                      $300.00
                    </p>
                    <span
                      className="text-[#fa8c16] font-bold text-xl"
                      data-aos="fade-down"
                      data-aos-duration="3000"
                    >
                      $250.00
                    </span>
                  </div>

                  <button
                    className="md:px-6 md:py-2 px-3 py-1 bg-[#fa8b15] hover:bg-text hover:text-white text-white text-lg rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>

              <div
                className="relative rounded-2xl w-full md:w-[40%] overflow-hidden group h-[350px]"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner6.png"
                  alt="Lighting"
                  className="absolute bg-hover bottom-0 left-0 w-full object-cover"
                />
                <div className="absolute h-full inset-0 flex flex-col justify-center items-center px-8 space-y-4">
                  <h2
                    className="text-white md:text-xl text-lg font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    NEW Arrivals
                  </h2>
                  <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    Home <br /> Office
                  </h1>

                  <button
                    className="md:px-6 md:py-2 px-3 py-1 bg-text hover:bg-hover hover:text-white text-white text-lg rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div
                className="relative rounded-2xl w-full md:w-1/4 overflow-hidden group h-[400px]"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner7.jpg"
                  alt="Sofa Style 2020"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 space-y-4 text-center">
                  <h2
                    className="text-white md:text-xl text-lg"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    New Arrivals
                  </h2>
                  <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    SOFA STYLE <br /> 2020
                  </h1>

                  <button
                    className="md:px-6 md:py-2 px-3 py-1 bg-[#fa8b15] hover:bg-text hover:text-white text-white text-lg rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>

              <div
                className="relative rounded-2xl w-full md:w-1/2 overflow-hidden group h-[400px]"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner8.jpg"
                  alt="Perfect Fit For Your Home"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 space-y-4 text-center">
                  <h2
                    className="text-text md:text-xl text-lg"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    New Arrivals
                  </h2>
                  <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-text"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    PERFECT FIT FOR <br /> YOUR HOME
                  </h1>

                  <button
                    className="md:px-6 md:py-2 px-3 py-1 bg-[#fa8b15] hover:bg-text hover:text-white text-white text-lg rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>

              <div
                className="relative rounded-2xl w-full md:w-1/4 overflow-hidden group h-[400px]"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img
                  src="/img/home-banner9.jpg"
                  alt="Sale"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 space-y-4 text-center">
                  <h2
                    className="text-white md:text-xl text-lg"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    New Arrivals
                  </h2>
                  <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    SALE UP TO 30% <br /> OFF
                  </h1>

                  <button
                    className="md:px-6 md:py-2 px-3 py-1 bg-[#fa8b15] hover:bg-text hover:text-white text-white text-lg rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                  >
                    <Link to="/allproduct">Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full h-full">
          <div className="bg-gray-50 py-20 px-4 md:px-12">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-extrabold mt-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                TESTIMONIALS
              </h2>
              <p
                className="text-text font-semibold md:text-md text-sm mt-2"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                What The People Think About Our Service
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="group rounded-3xl sm:py-8 py-6 sm:px-6 px-4 bg-white shadow-lg border border-gray-200 transition duration-300 cursor-pointer hover:border-orange-500 hover:shadow-lg hover:shadow-orange-200"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="flex items-start justify-center gap-4">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-8 h-8 text-black group-hover:text-orange-500 transition-colors duration-300"
                    />
                    <div className="flex flex-col">
                      <div className="space-y-2 leading-6">
                        <h3 className="font-bold text-lg sm:text-xl text-black group-hover:text-orange-500 transition-colors duration-300">
                          {t.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-6 text-sm sm:text-md text-center mt-4">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <PromotionSection />
      <Footer />
    </>
  );
};

export default HomePage;
