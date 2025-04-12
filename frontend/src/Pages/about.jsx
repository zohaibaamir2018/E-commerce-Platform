import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
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
              About
            </h1>
            <div className="flex space-x-2 text-white text-sm md:text-lg">
              <Link to="/" className="hover:text-hover">
                Home
              </Link>
              <span>{">"}</span>
              <Link to="/about" className="hover:text-hover">
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-16 px-4 md:px-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center">
            <img
              src="/img/about-icon.png"
              alt="Icon"
              className="w-16 h-16"
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          </div>
          <h3
            className="uppercase text-sm md:text-lg text-text"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            GETTING BETTER AND BETTER – TOGETHER
          </h3>
          <h1
            className="text-text font-extrabold text-xl md:text-4xl sm:text-3xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            THE FUTURE OF FURNITURE
          </h1>
        </div>

        <div
          className="w-full mt-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src="/img/about1.jpg"
            alt="Chair"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 md:px-12 py-10 space-y-10 md:space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Simple Creative Design Quality
          </h2>
          <p
            className="text-gray-600"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor
            eu, consequat vitae, eleifend ac enim. Sed cursus turpis vitae
            tortor.
          </p>
          <p
            className="text-gray-600"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Fusce id purus.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-10 gap-8">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="/img/about2.jpg"
              alt="Orange Chair"
              className="rounded-xl shadow-md w-full"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <p
              className="text-hover font-semibold mb-2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              About Phlox Group
            </p>
            <h3
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              We Are The Leader <br /> In Furniture Product
            </h3>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              In a professional context it often happens that private or
              corporate clients order a publication to be made and presented
              with the actual content still not being ready.
            </p>
            <p
              className="text-gray-600 mb-8"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              In a professional context it often happens that private or
              corporate clients order a publication to be made and presented
              with the actual content still not being ready.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-10 sm:px-6 md:px-16 justify-between space-y-8 sm:space-y-0 text-center">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <p className="text-hover text-4xl font-bold">53K</p>
                <p className="text-gray-500 text-sm">Layout Done</p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="2000">
                <p className="text-hover text-4xl font-bold">10K</p>
                <p className="text-gray-500 text-sm">Projects Done</p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="2000">
                <p className="text-hover text-4xl font-bold">120</p>
                <p className="text-gray-500 text-sm">Get Award</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromotionSection />
      <Footer />
    </>
  );
};

export default About;
