import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({clearCart, cartlength}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar cartlength={cartlength} clearCart={clearCart}/>

      <section className="w-full">
        <div
          className="bg-cover bg-no-repeat w-full h-[200px] md:h-[254px] flex justify-center items-center"
          style={{ backgroundImage: `url('/img/banner.jpg')` }}
        >
          <div className="flex flex-col items-center text-center text-white px-4">
            <h1
              className="text-4xl md:text-6xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Contact
            </h1>
            <div className="flex space-x-2 text-sm md:text-lg mt-2">
              <Link to="/" className="hover:text-hover">
                Home
              </Link>
              <span>{">"}</span>
              <Link to="/contact" className="hover:text-hover">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 px-4 lg:px-20">
        <p
          className="text-orange-500 text-lg font-medium mb-2"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Contact Us
        </p>
        <h2
          className="text-3xl md:text-6xl font-bold mb-4"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Get In Touch
        </h2>
        <p
          className="text-gray-600 mb-10"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form
            className="space-y-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
            />
            <textarea
              rows="5"
              placeholder="Question *"
              className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
            ></textarea>
            <button
              type="submit"
              className="bg-hover text-white px-6 py-3 rounded-md font-medium hover:bg-text"
            >
              Send Message
            </button>
          </form>

          <div
            className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27432814295!2d-118.69192040638104!3d34.02016130751017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b5d86cb5f7%3A0x3cc0ef877ed97b6!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1614280184380!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 py-16 px-2 md:px-8 text-gray-800">
          <div
            className="flex items-start gap-4 group"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="bg-gray-100 group-hover:bg-hover p-6 md:p-10 rounded-xl transition-colors">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-hover group-hover:text-white text-2xl md:text-4xl"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-xl md:text-2xl text-gray-900">
                Find Me
              </h4>
              <p className="text-gray-700">Patricia C. Amedee 4401 Waldeck</p>
              <p className="text-gray-700">
                Street Grapevine Nashville, TX 76051
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 group"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="bg-gray-100 group-hover:bg-hover p-6 md:p-10 rounded-xl transition-colors">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-hover group-hover:text-white text-2xl md:text-4xl"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-xl md:text-2xl text-gray-900">
                Our Phone
              </h4>
              <p className="text-gray-700">+7 (212) 654–33–35</p>
              <p className="text-gray-700">+7 (212) 287–85–22</p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 group"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="bg-gray-100 group-hover:bg-hover p-6 md:p-10 rounded-xl transition-colors">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-hover group-hover:text-white text-2xl md:text-4xl"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-xl md:text-2xl text-gray-900">
                Our Email
              </h4>
              <p className="text-gray-700">info@yourdomain.com</p>
              <p className="text-gray-700">info@Phloxshop.com</p>
            </div>
          </div>
        </div>
      </div>

      <PromotionSection />
      <Footer />
    </>
  );
};

export default Contact;
