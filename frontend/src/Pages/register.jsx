import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Register = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userRole, setUserRole] = useState("buyer");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleToggle = () => {
    setUserRole((prevRole) => (prevRole === "buyer" ? "seller" : "buyer"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      console.log(userRole);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: userRole,
        }
      );

      if (response.status === 201) {
        setSuccess("Registered successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h2
            className="text-4xl font-bold text-gray-900 mb-6 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Register
          </h2>

          <div
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                  required
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password *"
                  className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                  required
                />

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password *"
                  className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                  required
                />

                <div className="flex flex-col space-y-4 mt-4">
                  {/* Terms and Conditions Checkbox */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-hover dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <Link
                          to="/termsConditions"
                          className="font-medium text-hover hover:underline dark:text-orange-500"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                      {userRole === "buyer"
                        ? "You want to create a Buyer account"
                        : "You want to create a Seller account"}
                    </span>
                    <label
                      htmlFor="roleToggle"
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id="roleToggle"
                        checked={userRole === "seller"}
                        onChange={handleRoleToggle}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-200 dark:bg-gray-600 dark:peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-hover hover:bg-text focus:ring-4 focus:outline-none focus:ring-orange-400 hover:focus:ring-text font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-hover dark:hover:bg-hover dark:focus:ring-orange-700"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-hover hover:underline dark:text-hover"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;
