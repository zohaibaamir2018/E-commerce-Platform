import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const PrivacyPolicy = ({cartlength, clearCart}) => {
  return (
    <>
      <Navbar cartlength={cartlength} clearCart={clearCart}/>
      <div className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            <header className="text-center">
              <h1 className="text-4xl font-bold text-text tracking-tight">
                Privacy Policy
              </h1>
            </header>

            <section className="space-y-6 text-lg leading-relaxed text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800">
                Information We Collect
              </h2>
              <p>
                We collect several types of information for various purposes to
                provide and improve our service to you.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Personal identification information (such as your name, email
                  address, etc.)
                </li>
                <li>
                  Non-personal identification information (such as your IP
                  address, browser type, etc.)
                </li>
                <li>
                  Cookies and usage data to help us enhance user experience.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800">
                How We Use Your Information
              </h2>
              <p>
                The collected information is used in various ways, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide, operate, and maintain our website</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To monitor usage and analyze trends</li>
                <li>
                  To communicate with you, including for customer service and
                  marketing purposes
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800">Cookies</h2>
              <p>
                We use cookies to track the activity on our website and hold
                certain information. You can choose to disable cookies or set
                your browser to alert you when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                Third-Party Services
              </h2>
              <p>
                We may employ third-party companies and individuals to
                facilitate our service, provide services on our behalf, or
                assist us in analyzing how our service is used. These third
                parties have access to your personal data only to perform these
                tasks and are obligated not to disclose or use it for any other
                purpose.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                Data Security
              </h2>
              <p>
                We take reasonable steps to protect the information you provide
                to us. However, please note that no method of transmission over
                the Internet or electronic storage is 100% secure. We cannot
                guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                Your Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal data. These rights may include access to
                your data, correction of inaccurate data, and deletion of your
                data.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                Changes to This Privacy Policy
              </h2>
              <p>
                Example Company may update this Privacy Policy from time to
                time. We will notify you of any changes by posting the new
                Privacy Policy on this page. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your data, feel free to contact us.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
