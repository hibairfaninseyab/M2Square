import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import d from "../../assets/BuySell/displayimg.svg";
import img1 from "../../assets/BuySell/img1.svg";
import img2 from "../../assets/BuySell/img2.svg";
import img3 from "../../assets/BuySell/img3.svg";
import img4 from "../../assets/BuySell/img4.svg";
import bg2 from "../../assets/BuySell/bg2.png";
import FAQ from "../faq/Faq";
import mob from "../../assets/BuySell/mobile.svg";
import applestore from "../../assets/apple-store.svg";
import googleplay from "../../assets/google-play.svg";
import bg from "../../assets/BuySell/bg.svg";
import value from "../../assets/BuySell/value.svg";
import invest from "../../assets/BuySell/invest.svg";
import earn from "../../assets/BuySell/earn.svg";

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

  const stats = [
    { number: "1000+", label: "Properties Managed" },
    { number: "500+", label: "Properties Sold" },
    { number: "80+", label: "Real Estate Experts" },
    { number: "8.5K+", label: "Trusted Partners" },
  ];

  const cards = [
    {
      title: "Value Investment",
      text: "We analyze the Saudi Arabia real estate market to identify properties with strong long-term fundamentals, including location, yield potential, and growth trajectory. By focusing on value at entry, investors can build portfolios that balance steady income with future appreciation.",
      button: "Free Consultation",
      img: value,
    },
    {
      title: "Invest From Anywhere",
      text: (
        <>
          Whether you’re in Saudi Arabia, New York, London, or Singapore, you can
          become a property investor in minutes. M<sup>2</sup> makes it possible
          to browse, invest, and manage your portfolio entirely online — no
          travel, no paperwork, and no hassle.
        </>
      ),
      button: "Speak to an advisor",
      img: invest,
    },
    {
      title: "Earn Rental Income",
      text: (
        <>
          Join thousands of investors who’ve already earned over SAR 600,000 in
          rental payouts through M<sup>2</sup>. Every property generates steady
          monthly income while your investment appreciates over time.
        </>
      ),
      img: earn,
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
    className="row align-items-center p-4 p-lg-5 mb-4"
    style={{
      background: "white",
      borderRadius: "50px",
    }}
  >
    {/* LEFT CONTENT */}
    <div className="col-lg-5 text-start">

      {/* Menu List */}
      <div className="mb-4">
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#111827" }}>Buy</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Sell</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Rent</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Manage</h2>
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

        <div
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
    className="row align-items-center p-4 p-lg-5 mb-4"
    style={{
      background: "white",
      borderRadius: "50px",
    }}
  >
    {/* LEFT CONTENT */}
    <div className="col-lg-5 text-start">

      {/* Menu List */}
      <div className="mb-4">
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#111827" }}>Buy</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Sell</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Rent</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Manage</h2>
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

        <div
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
    className="row align-items-center p-4 p-lg-5 mb-4"
    style={{
      background: "white",
      borderRadius: "50px",
    }}
  >
    {/* LEFT CONTENT */}
    <div className="col-lg-5 text-start">

      {/* Menu List */}
      <div className="mb-4">
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#111827" }}>Buy</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Sell</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Rent</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Manage</h2>
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
      For buyers and investors. Find the right property and move forward with confidence.
      </p>

      {/* Buttons */}
      <div className="d-flex align-items-center gap-4 mt-4">

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

        <div
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
    className="row align-items-center p-4 p-lg-5 mb-2"
    style={{
      background: "white",
      borderRadius: "50px",
    }}
  >
    {/* LEFT CONTENT */}
    <div className="col-lg-5 text-start">

      {/* Menu List */}
      <div className="mb-4">
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#111827" }}>Buy</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Sell</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Rent</h2>
        <h2 style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "44px", color: "#9CA3AF" }}>Manage</h2>
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

        <div
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

 <section style={{ background: "#F7F8FA", padding: "60px 0" }}>
      <div className="container">

        <div className="row g-4">

          {cards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="h-100"
                style={{
                  background: "white",
                  borderRadius: "25px",
                  boxShadow: "0px 4px 40px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div className="p-4 text-start">

                  <h4
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#111827",
                    }}
                  >
                    {card.title}
                  </h4>

                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "14px",
                      color: "#111827",
                      marginTop: "10px",
                    }}
                  >
                    {card.text}
                  </p>

                  {card.button && (
                    <button
                      className="btn mt-3 d-flex align-items-center"
                      style={{
                        background: "#E6E6E6",
                        borderRadius: "32px",
                        padding: "6px 6px 6px 25px",
                        fontWeight: "600",
                      }}
                    >
                      {card.button}

                      <span
                        className="ms-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "#727883",
                          borderRadius: "50%",
                          color: "white",
                          fontSize: "20px",
                        }}
                      >
                       <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3193 13.9512L29.2448 13.9512L29.2448 24.8766" stroke="#111827" stroke-width="1.90909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9473 29.2441L29.0935 14.0979" stroke="#111827" stroke-width="1.90909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </span>
                    </button>
                  )}

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Pagination Dots */}
        <div className="d-flex justify-content-center mt-5 gap-2">
          <div style={{ width: 35, height: 10, background: "#111827", borderRadius: 20 }} />
          <div style={{ width: 10, height: 10, background: "#D9D9D9", borderRadius: "50%" }} />
          <div style={{ width: 10, height: 10, background: "#D9D9D9", borderRadius: "50%" }} />
          <div style={{ width: 10, height: 10, background: "#D9D9D9", borderRadius: "50%" }} />
        </div>

      </div>
    </section>

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
                <div className="text-start">
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#111827",
                    }}
                  >
                    {service.title}
                  </h5>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#888",
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
                    width: "40px",
                    height: "40px",
                    background: "#DFDFDF",
                    borderRadius: "50%",
                    fontSize: "18px",
                  }}
                >
               <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3193 13.9512L29.2448 13.9512L29.2448 24.8766" stroke="#111827" stroke-width="1.90909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9473 29.2441L29.0935 14.0979" stroke="#111827" stroke-width="1.90909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
              <div className="text-start">
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Interested?
                </h5>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#888",
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
                  width: "40px",
                  height: "40px",
                  background: "#DFDFDF",
                  borderRadius: "50%",
                  fontSize: "20px",
                }}
              >
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3193 13.9512L29.2448 13.9512L29.2448 24.8766" stroke="#111827" stroke-width="1.90909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9473 29.2441L29.0935 14.0979" stroke="#111827" stroke-width="1.90909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ background: "#F7F8FA", padding: "60px 0" }}>
      <div className="container">
        <div className="row g-4">

          {stats.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="p-4 h-100"
                style={{
                  background: "white",
                  borderRadius: "25px",
                }}
              >
                <div className="d-flex flex-column justify-content-between h-100">
                  
                  <h2
                    style={{
                      color: "#0F7B6C",
                      fontSize: "62px",
                      fontFamily: "Impact",
                      marginBottom: "20px",
                    }}
                  >
                    {item.number}
                  </h2>

                  <p
                    style={{
                      color: "#111827",
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      marginBottom: "0",
                    }}
                  >
                    {item.label}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
    
    <FAQ/>
      <Footer />
    </>
  );
};

export default BuySellPage;