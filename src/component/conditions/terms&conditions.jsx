import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bg from "../../assets/privacy.svg";


const TermsConditions = () => {
  return (
    <>
      <Header/>
  
      


      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: "600px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.43), rgba(0,0,0,0.43)), url{}".replace("{}", bg),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="container">

          <h1
            style={{
              fontFamily: "Impact",
              fontSize: "96px",
            }}
          >
            Terms and Conditions
          </h1>

        </div>

      </section>
      <div className="container my-5 text-start">
      <h2 className="mb-3">Last Updated: March 2026</h2>

      <p>
        Welcome to our property listing platform. By accessing or using this website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use the website.
      </p>

      <h4 className="mt-4">1. Use of the Website</h4>
      <p>
        This website provides a platform where users can view, post, and manage real estate property listings. You agree to use the website only for lawful purposes and in accordance with these Terms. You must not:
      </p>
      <ul>
        <li>Post false, misleading, or fraudulent property information.</li>
        <li>Use the platform for illegal activities.</li>
        <li>Attempt to gain unauthorized access to the website or its systems.</li>
      </ul>

      <h4 className="mt-4">2. User Accounts</h4>
      <p>
        Some features of the website may require registration. By creating an account, you agree to:
      </p>
      <ul>
        <li>Provide accurate and complete information.</li>
        <li>Maintain the confidentiality of your login credentials.</li>
        <li>Accept responsibility for activities that occur under your account.</li>
      </ul>
      <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>

      <h4 className="mt-4">3. Property Listings</h4>
      <p>
        Users may post property listings on the platform. By submitting a listing, you confirm that:
      </p>
      <ul>
        <li>You have the legal right or authorization to advertise the property.</li>
        <li>All information provided is accurate and up to date.</li>
        <li>The listing does not violate any applicable laws or third‑party rights.</li>
      </ul>
      <p>The website does not guarantee the accuracy of property listings and is not responsible for transactions between buyers, sellers, agents, or third parties.</p>

      <h4 className="mt-4">4. Intellectual Property</h4>
      <p>
        All content on this website, including logos, design, text, images, and software, is the property of the platform or its licensors and is protected by intellectual property laws.
      </p>
      <p>You may not reproduce, distribute, or modify website content without prior written permission.</p>

      <h4 className="mt-4">5. Third‑Party Links</h4>
      <p>The website may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of those websites.</p>

      <h4 className="mt-4">6. Limitation of Liability</h4>
      <p>
        The website is provided on an “as‑is” and “as‑available” basis. We do not guarantee that the platform will always be available, secure, or error‑free. To the fullest extent permitted by law, the platform shall not be liable for:
      </p>
      <ul>
        <li>Any direct or indirect damages</li>
        <li>Loss of data or profits</li>
        <li>Property transactions or disputes between users</li>
      </ul>

      <h4 className="mt-4">7. Privacy</h4>
      <p>Your use of the website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>

      <h4 className="mt-4">8. Changes to the Terms</h4>
      <p>
        We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the website after changes means you accept the revised Terms.
      </p>

      <h4 className="mt-4">9. Governing Law</h4>
      <p>These Terms shall be governed by and interpreted in accordance with applicable laws in the jurisdiction where the platform operates.</p>

      <h4 className="mt-4">10. Contact Information</h4>
      <p>If you have any questions about these Terms and Conditions, you may contact us at:</p>
      <ul>
        <li>Email: support@example.com</li>
        <li>Phone: +966 50 123 4567</li>
      </ul>
    </div>

  
    <Footer/>
    </>
  );
};

export default TermsConditions;