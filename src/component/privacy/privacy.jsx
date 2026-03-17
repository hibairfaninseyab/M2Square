import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bg from "../../assets/privacy.svg";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: "600px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.43), rgba(0,0,0,0.43)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: "Impact, Arial, sans-serif",
              fontSize: "96px",
            }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="container my-5 text-start">
        <h2 className="mb-3">Last Updated: March 2026</h2>
        <p>
          Your privacy is important to us. By accessing or using this website, you agree to the terms outlined in this Privacy Policy.
        </p>

        <h4 className="mt-4">1. Information We Collect</h4>
        <p>
          We may collect personal information such as your name, email address, phone number, and usage data when you interact with our platform.
        </p>

        <h4 className="mt-4">2. How We Use Information</h4>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To communicate with users regarding updates or promotions.</li>
          <li>To protect the security and integrity of our platform.</li>
        </ul>

        <h4 className="mt-4">3. Sharing Information</h4>
        <p>
          We do not sell your personal information. We may share data with trusted third parties to provide our services, comply with legal obligations, or protect rights.
        </p>

        <h4 className="mt-4">4. Cookies and Tracking</h4>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.
        </p>

        <h4 className="mt-4">5. User Rights</h4>
        <p>
          You may request access, correction, or deletion of your personal data by contacting us.
        </p>

        <h4 className="mt-4">6. Data Security</h4>
        <p>
          We implement reasonable measures to protect your data, but no method is completely secure.
        </p>

        <h4 className="mt-4">7. Changes to This Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. Continued use of the website signifies your acceptance of any updates.
        </p>

        <h4 className="mt-4">8. Contact Information</h4>
        <p>If you have any questions about this Privacy Policy, you may contact us at:</p>
        <ul>
          <li>Email: support@example.com</li>
          <li>Phone: +966 50 123 4567</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;