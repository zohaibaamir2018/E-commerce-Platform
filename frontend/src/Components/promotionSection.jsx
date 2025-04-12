import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faCreditCard,
  faRotateLeft,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const PromoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-4 md:px-10 py-10">
      <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between rounded-3xl overflow-hidden min-h-[400px] md:h-[500px]">
        <img
          src="/img/promotion.jpg"
          alt="Chair"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-30" />

        <div className="relative z-10 w-full md:w-1/2 p-6 md:p-10 text-white md:text-right text-center ml-auto">
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            GET $20 OFF YOUR <br />
            FIRST ORDER?
          </h3>
          <p
            className="text-base md:text-lg mb-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Join our mailing list!
          </p>

          <div
            className="flex flex-col sm:flex-row items-center md:justify-end gap-4 bg-white rounded-xl shadow-lg p-1 max-w-xl w-full mx-auto md:ml-auto"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow px-4 py-3 text-gray-800 text-sm md:text-base focus:outline-none w-full sm:w-auto"
            />
            <button
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-black text-white text-base font-medium hover:bg-hover transition"
              data-aos="zoom-in"
              data-aos-duration="4000"
            >
              <Link to="/allproduct">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 md:px-6 py-12 bg-white text-center mt-10">
        {[
          {
            icon: faTruckFast,
            title: "Free Shipping",
            desc: "Capped at $39 per order",
          },
          {
            icon: faCreditCard,
            title: "Secure Payments",
            desc: "Up to 12 months installments",
          },
          {
            icon: faRotateLeft,
            title: "14-Day Returns",
            desc: "Shop with confidence",
          },
          {
            icon: faScissors,
            title: "Free Fabric Swatches",
            desc: "Delivered to your door",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer transition duration-300 px-4"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-3xl mb-2 text-black transition-colors duration-300 group-hover:text-hover"
            />
            <p className="font-semibold text-black group-hover:text-hover transition">
              {item.title}
            </p>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
