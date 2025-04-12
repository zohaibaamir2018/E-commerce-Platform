import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <footer className="bg-[#f5f5f5] text-gray-800 max-w-full pt-20">
      <div className="max-w-8xl mx-auto px-10 text-text font-normal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="p-2 text-white rounded-md"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              <img src="/img/logo.png" alt="logo" />
            </div>
          </div>
          <p
            className="text-lg text-text"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            While the lovely valley teems with vapour around me, and the
            meridian sun.
          </p>
        </div>

        <div className="px-8" data-aos="zoom-in" data-aos-duration="2000">
          <h3 className="text-xl font-bold mb-4">Visit Link</h3>
          <ul className="space-y-4 text-xl pt-4 text-text">
            <li className="hover:text-hover transform transition duration-300 hover:scale-x-110">
              <Link to="/privacy">Privacy</Link>
            </li>
            <li className="hover:text-hover transform transition duration-300 hover:scale-x-110">
              <Link to="/termsConditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="px-8" data-aos="zoom-in" data-aos-duration="2000">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-4 text-xl pt-4 text-text">
            <li className="hover:text-hover transform transition duration-300 hover:scale-x-110">
              <Link to="/home"> Home</Link>
            </li>
            <li className="hover:text-hover transform transition duration-300 hover:scale-x-110">
              <Link to="/about"> About</Link>
            </li>
            <li className="hover:text-hover transform transition duration-300 hover:scale-x-110">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="px-8" data-aos="zoom-in" data-aos-duration="2000">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-1 text-xl pt-4 text-text">
            <p className="text-lg">+99 (0) 101 0000 888</p>
            <p className="text-lg">Info@yourdomain.com</p>
          </div>
        </div>

        <div className="px-8" data-aos="zoom-in" data-aos-duration="2000">
          <h3 className="text-xl font-bold mb-4">Address</h3>
          <div className="space-y-1 text-xl pt-4 text-text">
            <p className="text-lg">Patricia Amedee 4401</p>
            <p className="text-lg">Waldeck Street</p>
            <p className="text-lg">Grapevine Nashville, Tx 76051</p>
          </div>
        </div>
      </div>

      <div className="border-t text-lg text-text font-normal py-4 flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-center md:text-left">
          © 2025 Furniture Shop – Phlox Elementor WordPress Theme. All rights
          reserved.
        </p>
        <div className="flex gap-8 mt-2 md:mt-0 justify-center md:justify-end">
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
          <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
