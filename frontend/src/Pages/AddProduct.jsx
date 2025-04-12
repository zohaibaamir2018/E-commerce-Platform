import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const AddProduct = ({ clearCart, cartlength }) => {
  const [heroImage, setHeroImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imagesUrls, setImagesUrls] = useState([]);

  const handleHeroImageChange = (e) => {
    setHeroImage(e.target.files[0]);
  };

  const handleAdditionalImagesChange = (e) => {
    setAdditionalImages(Array.from(e.target.files));
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch("http://localhost:5000/api/uploads", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    const data = await res.json();
    return data.imageUrl;
  };

  const handleUpload = async () => {
    if (!heroImage) throw new Error("Hero image is required");

    // Upload main image
    const mainImageUrl = await uploadImage(heroImage);
    setImageUrl(mainImageUrl);

    // Upload additional images (if any)
    const additionalImageUrls = await Promise.all(
      additionalImages.map((file) => uploadImage(file))
    );
    setImagesUrls(additionalImageUrls);

    return { mainImageUrl, additionalImageUrls };
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    price: 0,
    originalPrice: 0,
    discount: 0,
    rating: 0,
    description: "",
    brand: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const { mainImageUrl, additionalImageUrls } = await handleUpload();

      const response = await axios.post(
        "http://localhost:5000/api/products/addProducts",
        {
          ...formData,
          image: mainImageUrl,
          images: additionalImageUrls,
        }
      );

      if (response.status === 201) {
        setSuccess("Product added successfully!");
        setTimeout(() => navigate("/allProduct"), 2000);
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar cartlength={cartlength} clearCart={clearCart} />
      <section className="bg-gray-50 dark:bg-gray-900 w-full flex justify-center items-center h-[1200px] pt-28 py-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h2
            className="text-4xl font-bold text-gray-900 uppercase mb-6 text-center"
            data-aos="fade-down"
          >
            Add Product
          </h2>
          <div
            className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            data-aos="fade-up"
          >
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create a Product
              </h1>
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                {[
                  { label: "Product Name", name: "name" },
                  { label: "Product Title", name: "title" },
                  { label: "Price", name: "price", type: "number" },
                  {
                    label: "Original Price",
                    name: "originalPrice",
                    type: "number",
                  },
                  { label: "Discount", name: "discount", type: "number" },
                  { label: "Rating", name: "rating", type: "number" },
                  { label: "Description", name: "description" },
                  { label: "Brand", name: "brand" },
                ].map(({ label, name, type = "text" }) => (
                  <div key={name}>
                    <label>{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={`${label} *`}
                      className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label>Hero Image</label>
                  <input
                    type="file"
                    name="heroImage"
                    accept="image/*"
                    onChange={handleHeroImageChange}
                    className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label>Additional Images</label>
                  <input
                    type="file"
                    name="additionalImages"
                    accept="image/*"
                    multiple
                    onChange={handleAdditionalImagesChange}
                    className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-hover hover:bg-text text-white py-2 rounded-md font-medium transition"
                >
                  Create Product
                </button>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddProduct;
