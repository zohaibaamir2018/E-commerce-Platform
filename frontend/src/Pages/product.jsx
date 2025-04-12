import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Product = ({ addToCart, cartlength, clearCart }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('productId');
  console.log(productId)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    getProduct()
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/api/products/getProductById", {
      params: { id: productId }
    });
    console.log(response.data)
    setSelectedImage(response.data.images[0])
    setProduct(response.data)
  }
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState({
    id: 0,
    name: "",
    title: "",
    brand: "",
    description:
      "",
    price: 0,
    originalPrice: 0,
    discount: 0,
    images: [
      "",
      "",
      "",
      "",
    ],
  });

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <>
      <Navbar cartlength={cartlength} clearCart={clearCart}/>
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
              Product
            </h1>
            <div className="flex space-x-2 text-white text-sm md:text-lg">
              <Link to="/" className="hover:text-hover">
                Home
              </Link>
              <span>{">"}</span>
              <Link to="/product" className="hover:text-hover">
                Product
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={selectedImage}
            alt="Product"
            className="rounded-xl w-full object-cover"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <div className="flex space-x-4 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
                  selectedImage === img ? "border-hover" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <p
            className="uppercase text-hover text-sm font-bold tracking-widest"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {product.brand}
          </p>
          <h1
            className="text-4xl font-bold text-gray-800 mt-2"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {product.title}
          </h1>
          <p
            className="text-gray-600 mt-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {product.description}
          </p>

          <div className="flex items-center mt-6 space-x-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="bg-orange-100 text-hover px-2 py-1 rounded font-semibold">
              {product.discount}%
            </span>
          </div>
          <p className="text-gray-400 line-through mt-1">
            ${product.originalPrice.toFixed(2)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center justify-between bg-gray-100 rounded px-4 py-2 w-full sm:w-40">
              <button
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                className="text-lg font-bold text-gray-500"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-lg font-bold text-gray-500"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-hover hover:bg-text text-white font-semibold rounded px-6 py-3 flex-1"
              data-aos="zoom-in"
              data-aos-duration="4000"
            >
              <Link to="/cart">🛒 Add to cart</Link>
            </button>
          </div>
        </div>
      </div>

      <PromotionSection />
      <Footer />
    </>
  );
};

export default Product;
