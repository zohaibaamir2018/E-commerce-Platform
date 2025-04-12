import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Cookies from "js-cookie";

const LoginForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        console.log(response);
        Cookies.set("userRole", response.data.user.role);
        Cookies.set("token1", response.data.token);
        navigate("/home");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Try again.");
      }
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
          <h2
            className="text-4xl font-bold text-gray-900 mb-6 text-center"
            data-aos="fade-down"
          >
            Login
          </h2>
          <div
            className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            data-aos="fade-up"
          >
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <form className="space-y-4" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                  required
                />
                <input
                  type="password"
                  placeholder="Your Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hover"
                  required
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-3 text-sm text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-hover hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-hover hover:bg-text font-medium rounded-lg text-md px-5 py-2.5"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-hover hover:underline"
                  >
                    Register
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

export default LoginForm;
