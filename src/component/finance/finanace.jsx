import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import finance from "../../assets/finance.svg";
import user1 from "../../assets/finance/user1.svg";
import user2 from "../../assets/finance/user2.svg";
import user3 from "../../assets/finance/user3.svg";
import logo1 from "../../assets/collab-img/c1.svg";
import logo2 from "../../assets/collab-img/c2.svg";
import logo3 from "../../assets/collab-img/c3.svg";
import logo4 from "../../assets/collab-img/c4.svg";
import logo5 from "../../assets/collab-img/c5.svg";
import logo6 from "../../assets/collab-img/c6.svg";
import logo7 from "../../assets/collab-img/c7.svg";
import logo8 from "../../assets/collab-img/c8.svg";
import logo9 from "../../assets/collab-img/c9.svg";
import logo10 from "../../assets/collab-img/c10.svg";
import logo11 from "../../assets/collab-img/c11.svg";
import logo12 from "../../assets/collab-img/c12.svg";
import step1 from "../../assets/finance/step1.svg";
import step2 from "../../assets/finance/step2.svg";
import step3 from "../../assets/finance/step3.svg";
import step4 from "../../assets/finance/step4.svg";
import img1 from "../../assets/finance/1.svg";
import img2 from "../../assets/finance/2.svg";
import img3 from "../../assets/finance/3.svg";
import img4 from "../../assets/finance/4.svg";
import bg from "../../assets/finance/bg.svg";
import download from "../../assets/download.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Testimonials from "../testimonials/Testimonials";
import FAQ from "../faq/Faq";
import { Link } from "react-router-dom";
const FinancePage = () => {
const statsData = [
  { value: "7.6K+", label: "Happy homeowners" },
  { value: "14Bn+", label: "Disbursed in SAR" },
  { value: "100%", label: "Digital service" },
  { value: "0%", label: "Fees ad charges" },
];
const cardsData = [
  {
    title: "Regulated and Secure",
    description:
      "All investments on M2 operate under the Saudi Central Bank (SAMA) framework. This ensures that client funds are segregated and protected and that every property investment is held in a special purpose vehicle (SPV) -- to safeguard ownership and reduce risk.",
    img: img1,
  },
  {
    title: "Invest From Anywhere",
    description:
      "Whether you’re in Saudi, New York, London, or Singapore, you can become a property investor in minutes. PRYPCO Blocks makes it possible to browse, invest, and manage your portfolio entirely online — no travel, no paperwork, and no hassle. Real estate investing has never been this seamless or borderless.",
    img: img2,
  },
  {
    title: "Value Investment",
    description:
      "We analyze the Saudi real estate market to identify properties with strong long-term fundamentals, including location, yield potential, and growth trajectory. By focusing on value at entry, investors can build portfolios that balance steady income with future appreciation, reflecting a measured and research-driven investment strategy.",
    img: img3,
  },
  {
    title: "Earn Rental Income",
    description:
      "Join thousands of investors who’ve already earned over SAR 600,000 in rental payouts through PRYPCO Blocks. Every property generates steady monthly income, helping you grow your wealth effortlessly while your investment appreciates over time — all without the headaches of traditional property management.",
    img: img4,
  },
];
const logos = [
 logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12
];
  return (
    <>
      <Header />
      <div className="bg-light" style={{ minHeight: "100vh" }}>
    
      {/* Hero Section */}
      <section className="container my-5 position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 text-start">
           <div className="d-flex align-items-center">
  <div className="d-flex position-relative" style={{ gap: '-0.5rem' }}>
    <img
      src={user1}
      alt="avatar1"
      className="rounded-circle border border-white"
      style={{ width: '30px', height: '30px', zIndex: 3 }}
    />
    <img
      src={user2}
      alt="avatar2"
      className="rounded-circle border border-white"
      style={{ width: '30px', height: '30px', marginLeft: '-10px', zIndex: 2 }}
    />
    <img
      src={user3}
      alt="avatar3"
      className="rounded-circle border border-white"
      style={{ width: '30px', height: '30px', marginLeft: '-10px', zIndex: 1 }}
    />
  </div>
  <div className="ms-3 small text-muted">Based on 7K+ customers</div>
</div>
            <h1 className="display-4 text-start fw-bold f-2">
              Where <span className="text-success text-uppercase">Barakah</span> lives.
            </h1>
            <p className="lead mt-3">
              Your first 12 home loan installments on us, apply before 30 April 2026 to enter our lucky draw.
            </p>
            <div className="d-flex align-items-center gap-3 mt-4">
              <button className="btn btn-success btn-lg">Get Started</button>
             
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={finance}
              alt="hero"
              className="img-fluid rounded-5 shadow"
            />
          </div>
        </div>
      </section>

     

      <section className="cards d-flex justify-content-center gap-4 flex-wrap my-5">
     <div
      style={{
        width: "1440px",
        height: "349px",
        position: "relative",
        background: "var(--Background, #F7F8FA)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          left: "80px",
          top: "54px",
          position: "absolute",
          display: "inline-flex",
          gap: "12px",
        }}
      >
        {statsData.map((stat, index) => (
          <div
            key={index}
            style={{
              width: "311px",
              height: "242px",
              padding: "30px",
              background: "var(--Card-Background, white)",
              borderRadius: "25px",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                flex: "1 1 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              <div
                style={{
                  color: "var(--Primary, #0F7B6C)",
                  fontSize: "62.51px",
                  fontFamily: "Impact",
                  fontWeight: 400,
                  wordWrap: "break-word",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "var(--Primary-Text, #111827)",
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  wordWrap: "break-word",
                }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>
   <div
      style={{
        width: "1440px",
        height: "850px",
        position: "relative",
        background: "var(--Background, #F7F8FA)",
        overflow: "hidden",
      }}
    >
      {/* Header Text */}
      <div
        style={{
          width: "1272px",
          left: "84px",
          top: "50px",
          position: "absolute",
          textAlign: "center",
        }}
      >
        <span style={{ color: "var(--Primary-Text, #111827)", fontSize: 40, fontFamily: "Montserrat", fontWeight: 600 }}>
          Here’s why{" "}
        </span>
        <span style={{ color: "var(--Primary, #0F7B6C)", fontSize: 40, fontFamily: "Montserrat", fontWeight: 600 }}>
          7,600+ homeowners
        </span>
        <span style={{ color: "var(--Primary-Text, #111827)", fontSize: 40, fontFamily: "Montserrat", fontWeight: 600 }}>
          {" "}chose M2 Mortgage
        </span>
      </div>

      {/* Swiper Carousel */}
      <div
        style={{
          width: "1440px",
          left: 0,
          top: "164px",
          position: "absolute",
          padding: "0 50px", // optional padding for spacing
        }}
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={30} // gap between slides
          slidesPerView={2.5} // 2 full cards + partial third
          pagination={{ clickable: true }}
          style={{ paddingBottom: "50px" }}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  height: "596px",
                  background: "var(--Card-Background, white)",
                  boxShadow: "0px 4px 43.7px rgba(0,0,0,0.05)",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%", // important! let Swiper control width
                  maxWidth: "625px", // optional max width
                  margin: "0 auto",
                }}
              >
                <img
                  style={{ width: "100%", height: "407px", borderRadius: "25px", objectFit: "cover" }}
                  src={card.img}
                  alt={card.title}
                />
                <div
                className="text-start"
                  style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div style={{ color: "var(--Primary-Text, #111827)", fontSize: 24, fontFamily: "Montserrat", fontWeight: 600 }}>
                    {card.title}
                  </div>
                  <div className="mb-2" style={{ color: "var(--Primary-Text, #111827)", fontSize: 16, fontFamily: "Montserrat", fontWeight: 400 }}>
                    {card.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
        <section className="collaboration-section">
      <div className="container">

        <h3 className="text-center collaboration-title mb-5">
          In Partnership with
        </h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            320: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 }
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="logo-card">
                <img src={logo} alt="partner logo" className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
       <section className="steps-conatiner container-fluid px-3 px-lg-5 bg-light py-5 position-relative overflow-hidden">
    
      {/* Section Title */}
      <div className="text-center mb-5 px-lg-5">
        <h1 className="fw-medium display-5">
         We can help you with…
        </h1>
      </div>
    
          {/* Step 01 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex flex-column text-start gap-3">
     <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
               01
            </span>            <h2 className="fw-bold display-6">A new home loan
</h2>
                <p className="text-secondary fs-5">
Get expert guidance to secure the right loan for your new property.               </p>
                
              </div>
            </div>
            <div className="col-md-6">
                <div className="rounded-4 d-flex justify-content-end" style={{ minHeight: "400px" }}>
                  <img
                    src={step1}
                    className="img-fluid rounded-4"
                    style={{ maxHeight: "700px", objectFit: "contain" }}
                    alt="Step 01 visual"
                  />
                </div>
              </div>
          </div>
    
          {/* Step 02 */}
          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex flex-column text-start gap-3">
     <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
               02
            </span>            <h2 className="fw-bold display-6">Refinance</h2>
                <p className="text-secondary fs-5">
Switch to better rates and terms for your existing mortgage.
                </p>
                
              </div>
            </div>
            <div className="col-md-6">
                <div className="rounded-4 d-flex justify-content-start" style={{ minHeight: "400px" }}>
                  <img
                    src={step2}
                    className="img-fluid rounded-4"
                    style={{ maxHeight: "700px", objectFit: "contain" }}
                    alt="Step 01 visual"
                  />
                </div>
              </div>
          </div>
    
          {/* Step 03 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex flex-column text-start gap-3">
     <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
               03
            </span>            <h2 className="fw-bold display-6">Equity release</h2>
                <p className="text-secondary fs-5">
Unlock value from your property by getting cash without the need to sell.                </p>
                
              </div>
            </div>
           <div className="col-md-6">
               <div className="rounded-4 d-flex justify-content-end" style={{ minHeight: "400px" }}>
                 <img
                   src={step3}
                   className="img-fluid rounded-4"
                   style={{ maxHeight: "700px", objectFit: "contain" }}
                   alt="Step 01 visual"
                 />
               </div>
             </div>
          </div>
           {/* Step 04 */}
          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex flex-column text-start gap-3">
     <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
              04
            </span>            <h2 className="fw-bold display-6">Instant pre-approvals
</h2>
                <p className="text-secondary fs-5">
Get pre-approved in minutes with the best rates in the market.
                </p>
                <p className="text-secondary fs-5">The decision is yours!</p>
                <button className="btn text-success d-flex align-items-center gap-2">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 9.75C5.72056 9.75 9.75 5.72056 9.75 0.75C9.75 5.72056 13.7794 9.75 18.75 9.75C13.7794 9.75 9.75 13.7794 9.75 18.75C9.75 13.7794 5.72056 9.75 0.75 9.75Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
    
                Get Started           
                </button>
              </div>
            </div>
            <div className="col-md-6">
                <div className="rounded-4 d-flex justify-content-start" style={{ minHeight: "400px" }}>
                  <img
                    src={step4}
                    className="img-fluid rounded-4"
                    style={{ maxHeight: "700px", objectFit: "contain" }}
                    alt="Step 01 visual"
                  />
                </div>
              </div>
          </div>
        </section>
        <section className="advisor">
           <div
      className="position-relative overflow-hidden"
      style={{ background: "#F7F8FA", height: "683px" }}
    >
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="position-relative w-100">

          <img
            src={bg}
            alt="hero"
            className="w-100"
            style={{
              borderRadius: "25px",
              height: "583px",
              objectFit: "cover",
            }}
          />

          <div
            className="position-absolute top-50 start-50 translate-middle text-center text-white"
            style={{ maxWidth: "850px" }}
          >
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "48px",
              }}
            >
              Owning your dream home has never been this easy.
            </h1>

            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "24px",
              }}
            >
              Explore hassle-free home loan solutions with M2 Mortgage.
            </p>

           <div className="mt-3">
  <Link
    to="/contact"
    className="d-inline-flex align-items-center bg-dark rounded-pill px-4 py-2 text-decoration-none"
  >
    {/* Text */}
    <span
      className="text-white fw-semibold me-3"
      style={{ fontFamily: "Montserrat", fontSize: "18px" }}
    >
      Speak to an advisor
    </span>

    {/* Circle Arrow */}
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "50px",
        height: "50px",
        background: "#0F7B6C",
        borderRadius: "50%",
        fontSize: "24px",
        color: "white",
      }}
    >
      ➜
    </div>
  </Link>
</div>
          </div>

        </div>
      </div>
    </div>
        </section>
        <Testimonials />
        <FAQ/>
         {/* <section className="bg-light py-5">
              <div className="container text-center mb-4 rounded-4">
                <div className="row">
                  <div className="col d-flex flex-column justify-content-center align-items-start gap-3 p-5">
                   <h1 className="fw-bold text-black text-uppercase text-start" style={{ fontSize: "3rem" }}>
        Download our <span className="text-success">handbook</span>.        </h1>
        <p style={{width: 360, color: 'var(--Light-Text, #9CA3AF)', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Your ultimate guide to investing in Saudi’s real estate through fractional ownership.</p>
                <button className="btn btn-success btn-lg mt-4">
                 Download
                </button>
                  </div>
                  <div className="col">
                    <img src={download} alt="Download handbook" className="img-fluid" />
                  </div>
                </div>
               
              </div>
            </section> */}
    </div>
    <Footer />
    </>
  );
};

export default FinancePage;