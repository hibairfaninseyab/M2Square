import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../../assets/buysell/bg.svg";
import d from "../../assets/buysell/d.svg";
import img1 from "../../assets/buysell/img1.svg";
import img2 from "../../assets/buysell/img2.svg";  
import img3 from "../../assets/buysell/img3.svg";
import img4 from "../../assets/buysell/img4.svg";

const BuySellPage = () => {
  return (
    <>
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
                the UAE easier.
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
    </div>
    </>
  );
};

export default BuySellPage;