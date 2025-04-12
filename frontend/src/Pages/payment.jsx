import React, { useState, useEffect } from "react";

import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import PromotionSection from "../Components/promotionSection";
import AOS from "aos";
import "aos/dist/aos.css";

const PaymentForm = ({ clearCart, cartlength }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar cartlength={cartlength} clearCart={clearCart} />

      <section className="bg-white py-8 antialiased dark:bg-hover md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-xl font-bold uppercase text-text dark:text-white sm:text-2xl"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Payment
            </h2>

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <form
                onSubmit={handleSubmit}
                className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-hover dark:bg-hover sm:p-6 lg:max-w-xl lg:p-8"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      type="text"
                      htmlFor="full_name"
                      className="mb-2 block text-sm font-medium text-text dark:text-white"
                    >
                      Full name (as displayed on card)*
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="block w-full rounded-lg p-2.5 text-sm text-gray-900  bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hover"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="card-number-input"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Card number*
                    </label>
                    <input
                      type="text"
                      id="card-number-input"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="block w-full rounded-lg p-2.5 text-sm text-gray-900  bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hover"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="card-expiration-input"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Card expiration*
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="card-expiration-input"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        className="block w-full rounded-lg p-2.5 text-sm text-gray-900  bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hover"
                        placeholder="MM/YY"
                        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cvv-input"
                      className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      CVV*
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                      >
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </label>
                    <input
                      type="number"
                      id="cvv-input"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="block w-full rounded-lg p-2.5 text-sm text-gray-900  bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hover"
                      placeholder="•••"
                      pattern="^\d{3}$"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="block w-full rounded-lg p-2.5 text-lg font-medium text-white  bg-hover border border-orange-400 focus:outline-none focus:ring-2 focus:ring-hover hover:bg-text hover:border-text"
                >
                  Pay now
                </button>
              </form>

              <div
                className="mt-6 grow sm:mt-8 lg:mt-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $6,592.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        -$299.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $99
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      $7,191.00
                    </dd>
                  </dl>
                </div>

                <div className="mt-6 flex items-center justify-center gap-8">
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                    alt="paypal"
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                    alt="paypal"
                  />
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt="visa"
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                    alt="visa"
                  />
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt="mastercard"
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                    alt="mastercard"
                  />
                </div>
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

export default PaymentForm;
