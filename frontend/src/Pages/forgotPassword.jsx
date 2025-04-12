import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          email,
        }
      );

      console.log(res);

      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Forgot Password
          </h2>

          {submitted ? (
            <p className="text-green-600 text-center">
              ✅ A password reset link has been sent to <strong>{email}</strong>
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Enter your email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
                  focus:border-hover focus:ring-2 focus:ring-hover dark:border-gray-600 dark:bg-gray-700 
                  dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-hover"
              />
              <button
                type="submit"
                className="w-full bg-hover hover:bg-text text-white font-medium rounded-lg px-4 py-2 transition duration-300"
              >
                Send Reset Link
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgotPassword;
