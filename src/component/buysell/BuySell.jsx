import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bg from "../../assets/buysell/bg.svg";
import d from "../../assets/buysell/d.svg";
import img1 from "../../assets/buysell/img1.svg";
import img2 from "../../assets/buysell/img2.svg";
import img3 from "../../assets/buysell/img3.svg";
import img4 from "../../assets/buysell/img4.svg";
import bg2 from "../../assets/buysell/Background1.png";
import FAQ from "../faq/Faq";
import mob from "../../assets/buysell/mobile.svg";
import applestore from "../../assets/apple-store.svg";
import googleplay from "../../assets/google-play.svg";

const services = [
  {
    title: "Buying Support",
    desc: "We help you understand fractional options and guide you through the digital buying process.",
  },
  {
    title: "Lock-in period",
    desc: "Tokens can only be listed after a 3-month lock-in period from the property’s original purchase date.",
  },
  {
    title: "Rental Support",
    desc: "We manage the properties and secure the right tenants so your monthly rent remains consistent.",
  },
  {
    title: "Property Management",
    desc: "From maintenance to payment collection, we take care of everything so you don’t have to.",
  },
  {
    title: "Mortgage Support",
    desc: "We assist buyers in securing financing and help sellers settle existing property liens.",
  },
  {
    title: "Golden Visa Support",
    desc: "We guide eligible investors through the full process of securing a UAE Golden Visa.",
  },
  {
    title: "Conveyancing Support",
    desc: "We support all transactions throughout the process, from the initial agreement to the final transfer.",
  },
];

const BuySellPage = () => {
  return (
    <>
      <Header />
      {/* HERO SECTION */}
      <div
        className="position-relative d-flex align-items-center text-white"
        style={{
          minHeight: "650px",
          background: "#E6F4F1",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src={bg}
          alt="hero"
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{ objectFit: "cover", zIndex: 1 }}
        />

        {/* Overlay (optional but improves readability) */}
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{ background: "rgba(0,0,0,0.25)", zIndex: 2 }}
        />

        {/* Content */}
        <div className="container position-relative text-center" style={{ zIndex: 3 }}>
          <h1
            className="fw-bold"
            style={{
              fontFamily: "Impact",
              fontSize: "clamp(40px, 7vw, 96px)",
              letterSpacing: "2px",
            }}
          >
            BUY. SELL. RENT. MANAGE.
          </h1>

          <p className="mt-3 fs-5">
            Supporting you through every step of your property journey.
          </p>
        </div>
      </div>

      {/* PROPERTY SECTION */}
      <div className="py-5" style={{ background: "#F7F8FA" }}>
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT TEXT */}
            <div className="col-lg-6 text-start">
              <h2
                className="fw-semibold"
                style={{
                  fontSize: "clamp(28px, 3vw, 48px)",
                  fontFamily: "Montserrat",
                  color: "#111827",
                }}
              >
                Built around your property needs
              </h2>

              <p
                className="mt-4"
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  color: "#111827",
                  lineHeight: "1.7",
                }}
              >
                We’re here to make buying, selling, and managing property in
                the Saudi Arabia easier.
                <br />
                <br />
                With a network of 8,500+ trusted partners, we handle the heavy
                lifting so you can focus on finding the right place, or taking
                care of the one you already own.
              </p>

              {/* Button */}
              <button className="btn btn-dark rounded-pill px-4 py-3 mt-3 d-flex align-items-center">
                <span className="me-3 fw-semibold">Get Started</span>

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#23304D",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  →
                </div>
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center">
              <img
                src={d}
                alt="property"
                className="img-fluid"
                style={{ maxWidth: "550px" }}
              />
            </div>

          </div>
        </div>
      </div>

      <div className="container my-5">
        <div
          className="row align-items-center p-4 p-lg-5"
          style={{
            background: "white",
            borderRadius: "50px",
          }}
        >
          {/* LEFT CONTENT */}
          <div className="col-lg-5 text-start">

            {/* Menu List */}
            <div className="mb-4">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#111827",
                }}
              >
                Buy
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Sell
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Rent
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Manage
              </h2>
            </div>

            {/* Tags */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
                Viewings & negotiations
              </span>

              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
                Offer to handover support
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "22px",
                color: "#111827",
              }}
            >
              For buyers and investors. Find the right property and move forward
              with confidence.
            </p>

            {/* Buttons */}
            <div className="d-flex align-items-center gap-4 mt-4">

              {/* Find Property Button */}
              <button
                className="btn d-flex align-items-center"
                style={{
                  background: "#111827",
                  borderRadius: "32px",
                  padding: "6px 6px 6px 30px",
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                Find Property

                <span
                  className="ms-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#23304D",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  →
                </span>
              </button>

              {/* Learn More */}
              <div
                className="d-flex align-items-center"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#111827",
                  cursor: "pointer",
                }}
              >
                Learn More
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-7 text-center mt-5 mt-lg-0">
            <img
              src={img1}
              alt="property"
              className="img-fluid"
              style={{
                borderRadius: "50px",
                maxHeight: "720px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
         <div
          className="row align-items-center p-4 p-lg-5"
          style={{
            background: "white",
            borderRadius: "50px",
          }}
        >
          {/* LEFT CONTENT */}
          <div className="col-lg-5 text-start">

            {/* Menu List */}
            <div className="mb-4">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#111827",
                }}
              >
                Buy
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Sell
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Rent
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Manage
              </h2>
            </div>

            {/* Tags */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
                Pricing Guidance
              </span>

              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
                Listing to transfer support
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "22px",
                color: "#111827",
              }}
            >
             For property owners. Sell your property with clarity and control.
            </p>

            {/* Buttons */}
            <div className="d-flex align-items-center gap-4 mt-4">

              {/* Find Property Button */}
              <button
                className="btn d-flex align-items-center"
                style={{
                  background: "#111827",
                  borderRadius: "32px",
                  padding: "6px 6px 6px 30px",
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                Sell Property

                <span
                  className="ms-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#23304D",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  →
                </span>
              </button>

              {/* Learn More */}
              <div
                className="d-flex align-items-center"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#111827",
                  cursor: "pointer",
                }}
              >
                Learn More
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-7 text-center mt-5 mt-lg-0">
            <img
              src={img2}
              alt="property"
              className="img-fluid"
              style={{
                borderRadius: "50px",
                maxHeight: "720px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
         <div
          className="row align-items-center p-4 p-lg-5"
          style={{
            background: "white",
            borderRadius: "50px",
          }}
        >
          {/* LEFT CONTENT */}
          <div className="col-lg-5 text-start">

            {/* Menu List */}
            <div className="mb-4">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#111827",
                }}
              >
                Buy
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Sell
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Rent
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Manage
              </h2>
            </div>

            {/* Tags */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
                Matching & viewings
              </span>

              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
              Contracts & renewals
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "22px",
                color: "#111827",
              }}
            >
For buyers and investors. Find the right property and move forward with confidence.            </p>

            {/* Buttons */}
            <div className="d-flex align-items-center gap-4 mt-4">

              {/* Find Property Button */}
              <button
                className="btn d-flex align-items-center"
                style={{
                  background: "#111827",
                  borderRadius: "32px",
                  padding: "6px 6px 6px 30px",
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                Explore

                <span
                  className="ms-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#23304D",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  →
                </span>
              </button>

              {/* Learn More */}
              <div
                className="d-flex align-items-center"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#111827",
                  cursor: "pointer",
                }}
              >
                Learn More
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-7 text-center mt-5 mt-lg-0">
            <img
              src={img3}
              alt="property"
              className="img-fluid"
              style={{
                borderRadius: "50px",
                maxHeight: "720px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
         <div
          className="row align-items-center p-4 p-lg-5"
          style={{
            background: "white",
            borderRadius: "50px",
          }}
        >
          {/* LEFT CONTENT */}
          <div className="col-lg-5 text-start">

            {/* Menu List */}
            <div className="mb-4">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#111827",
                }}
              >
                Buy
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Sell
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Rent
              </h2>

              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "44px",
                  color: "#9CA3AF",
                }}
              >
                Manage
              </h2>
            </div>

            {/* Tags */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
                Tenant Management
              </span>

              <span
                className="px-3 py-2 text-white"
                style={{
                  background: "#D6A84C",
                  borderRadius: "1000px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                }}
              >
                Owner support.
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "22px",
                color: "#111827",
              }}
            >
             For property owners. Property management, handled end-to-end.
            </p>

            {/* Buttons */}
            <div className="d-flex align-items-center gap-4 mt-4">

              {/* Find Property Button */}
              <button
                className="btn d-flex align-items-center"
                style={{
                  background: "#111827",
                  borderRadius: "32px",
                  padding: "6px 6px 6px 30px",
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                Manage Property

                <span
                  className="ms-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#23304D",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  →
                </span>
              </button>

              {/* Learn More */}
              <div
                className="d-flex align-items-center"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#111827",
                  cursor: "pointer",
                }}
              >
                Learn More
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-7 text-center mt-5 mt-lg-0">
            <img
              src={img4}
              alt="property"
              className="img-fluid"
              style={{
                borderRadius: "50px",
                maxHeight: "720px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
       <section
      style={{
        background: "#090E17",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={bg2}
        alt="bg"
        style={{
          position: "absolute",
          top: "-250px",
          left: "-20px",
          width: "1400px",
          opacity: 0.1,
          mixBlendMode: "luminosity",
        }}
      />

      <div className="container position-relative">
        {/* Title */}
        <h2
          className="text-center mb-5"
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: "600",
            fontFamily: "Montserrat",
          }}
        >
          Our Services
        </h2>

        {/* Service Cards */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className="d-flex justify-content-between align-items-end p-4"
                style={{
                  background: "white",
                  borderRadius: "25px",
                  minHeight: "140px",
                }}
              >
                <div>
                  <h5
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      fontFamily: "Montserrat",
                      color: "#111827",
                    }}
                  >
                    {service.title}
                  </h5>

                  <p
                    style={{
                      fontSize: "18px",
                      color: "#888",
                      fontFamily: "Montserrat",
                      marginBottom: "0",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Arrow Button */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#DFDFDF",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}

          {/* Last CTA Card */}
          <div className="col-lg-6">
            <div
              className="d-flex justify-content-between align-items-end p-4"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "25px",
                border: "1px solid #E5E7EB",
                minHeight: "140px",
              }}
            >
              <div>
                <h5
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    color: "white",
                  }}
                >
                  Interested?
                </h5>

                <p
                  style={{
                    fontSize: "18px",
                    color: "#888",
                    fontFamily: "Montserrat",
                    marginBottom: "0",
                  }}
                >
                  Let’s talk! We will be more than happy to help you with
                  whichever service you are looking for!
                </p>
              </div>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#DFDFDF",
                  borderRadius: "50%",
                  fontSize: "20px",
                }}
              >
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section style={{ background: "#F7F8FA", padding: "60px 0" }}>
      <div className="container">
        <div
          className="position-relative text-center text-white p-5"
          style={{
            background: "#090E17",
            borderRadius: "25px",
            overflow: "hidden",
            minHeight: "700px",
          }}
        >
          {/* Decorative Glow */}
          <div
            style={{
              position: "absolute",
              right: "-200px",
              bottom: "-200px",
              width: "500px",
              height: "500px",
              background: "#8962FF",
              opacity: 0.6,
              filter: "blur(80px)",
              borderRadius: "50%",
            }}
          />

          {/* Heading */}
          <h2
            className="fw-semibold"
            style={{
              fontSize: "48px",
              fontFamily: "Montserrat",
            }}
          >
            Are you a real estate agent?
          </h2>

          {/* Description */}
          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "850px",
              fontSize: "24px",
              fontFamily: "Montserrat",
            }}
          >
            Access exclusive inventory, manage your deals, and work smarter
            with tools designed specifically for real estate professionals.
          </p>

         

          {/* Download Buttons */}
          <div className="hero-buttons d-flex align-items-center justify-content-center gap-4 mt-10">
                         {/* Google Play Button */}
                         <a href="#" className="cursor-pointer">
                           <img src={googleplay} alt="Google Play" className="h-14 md:h-16" />
                         </a>
         
                         {/* App Store Button */}
                         <a href="#" className="cursor-pointer">
                           <img src={applestore} alt="App Store" className="h-14 md:h-16" />
                         </a>
                       </div>
                        {/* App Images */}
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center">
              <img
                src={mob}
                alt="app"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <FAQ/>
      <Footer />
    </>
  );
};

export default BuySellPage;