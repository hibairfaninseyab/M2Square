import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import contactBg from "../../assets/contact-bg.svg"; // Replace with your hero image
import map from "../../assets/map.svg"; // Replace with your contact info image
const ContactUs = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: "400px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: "Impact, Arial, sans-serif",
              fontSize: "64px",
            }}
          >
            Connect with Us
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <div className="container my-5">
        <div className="row g-5 bg-white p-4 rounded-4 shadow mt-2">
          {/* Form Section */}
          <div className="col-lg-6">
            <form className="">
              <div className="row g-3 text-start">
                <div className="col-md-6 text-start">
                  <label className="form-label fw-semibold">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-warning px-5 py-2 fw-semibold">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info Cards */}
        <div className="col-lg-6 d-flex flex-column gap-4">
            <img src={map} alt="Contact Us" className="img-fluid rounded-4 shadow" />
            </div>
        </div>
      </div>

      <div className="row gap-2 my-5 mx-5">
  <div className="col p-4 bg-white rounded-4 shadow text-center">
    <h4>Email Us</h4>
    <p className="mb-1">support@m2square.com</p>
    <p>info@m2square.com</p>
  </div>
  <div className="col p-4 bg-white rounded-4 shadow text-center">
    <h4>Call Us</h4>
    <p>+966 50 123 4567</p>
  </div>
  <div className="col p-4 bg-white rounded-4 shadow text-center">
    <h4>Location</h4>
    <p>AlTakhassousi Street, Ar Rahmaniyyah, Riyadh 12341, Saudi Arabia</p>
  </div>
</div>

      <Footer />
    </>
  );
};

export default ContactUs;