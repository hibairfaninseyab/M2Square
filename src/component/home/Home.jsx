import React from "react";
import "./Home.css";

import heroImg from "../../assets/home_mockup/hero.png";
import skyscraper from "../../assets/home_mockup/skyscraper.png";
import handsHouse from "../../assets/home_mockup/hands_house.png";
import laptop from "../../assets/home_mockup/laptop.png";
import purpleApp from "../../assets/home_mockup/purple_app.png";
import banner from "../../assets/home_banner.png";
import Testimonials from "../testimonials/Testimonials";
import Faq from "../faq/Faq";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const titles = [
  "The best mortgage rates",
  "Refinance your Home",
  "Instant Pre-approvals",
  "Get a Saudi Arabia Premium Residency"
];

const images = [
  "../src/assets/card_1.png",
  "../src/assets/card_2.png",
  "../src/assets/card_3.png",
  "../src/assets/card_4.png"
];
const Home = () => {
  return (
    <div className="home-landing">
      <Header />
      {/* 1. HERO FRAME */}
      <section style={{
        width: "100%",
        minHeight: "950px",
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px 100px',
        color: 'black',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Toggle bar */}
        <div style={{ display: 'flex', background: 'white', borderRadius: 1000, border: '1px solid #E5E7EB', padding: '4px', width: 'fit-content', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ padding: '12px 24px', color: '#9CA3AF', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', cursor: 'pointer' }}>Financing</div>
          <div style={{ padding: '12px 24px', background: '#0F7B6C', borderRadius: 1000, color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_195_3078)">
                <path fillRule="evenodd" clipRule="evenodd" d="M28.1688 21.1L21.0987 28.175C20.61 28.6625 19.8187 28.6625 19.3312 28.175C18.8425 27.6875 18.8425 26.8875 19.3312 26.4L24.4825 21.25H11.25C10.5588 21.25 10 20.6875 10 20C10 19.3125 10.5588 18.75 11.25 18.75H24.4825L19.3312 13.6C18.8425 13.1125 18.8425 12.325 19.3312 11.825C19.8187 11.3375 20.61 11.3375 21.0987 11.825L28.1688 18.9C28.4688 19.2 28.5625 19.6125 28.4938 20C28.5625 20.3875 28.4688 20.8 28.1688 21.1ZM20 0C8.95375 0 0 8.95 0 20C0 31.05 8.95375 40 20 40C31.0462 40 40 31.05 40 20C40 8.95 31.0462 0 20 0Z" fill="white" />
              </g>
              <defs><clipPath id="clip0_195_3078"><rect width="40" height="40" fill="white" /></clipPath></defs>
            </svg>
            Fractional
          </div>
        </div>

        <h1 style={{ textAlign: 'center', color: 'black', fontSize: 64, fontFamily: 'Impact', fontWeight: '400', letterSpacing: 2.56, marginBottom: '20px', lineHeight: "1.1" }}>YOUR END-TO-END<br />REAL ESTATE PLATFORM.</h1>
        <p style={{ textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', maxWidth: '800px', marginBottom: '80px' }}>Navigate real estate on your terms, from traditional to tokenized, invest, finance, sell, or manage.</p>

        {/* Action panel */}
        <div style={{ background: 'white', borderRadius: 25, border: '1px #E5E7EB solid', padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1062px', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ color: 'black', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400', letterSpacing: 0.72 }}>Saudi’s real estate from just SAR 2,000.</div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 30, paddingRight: 4, background: '#111827', borderRadius: 32, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600' }}>Visit Blocks</div>
              <div style={{ width: 40, height: 40, background: '#32BBFF', borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
            </div>
            <div style={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 30, paddingRight: 4, background: '#111827', borderRadius: 32, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600' }}>Visit Mint</div>
              <div style={{ width: 40, height: 40, background: '#5222E2', borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ECOSYSTEM FEATURES */}
      <section style={{ padding: '100px 0', background: '#0B111E', color: 'white' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <h2 style={{ fontSize: 48, fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'capitalize', marginBottom: '60px', textAlign: 'left' }}>
            Own your <span style={{ color: '#0F7B6C' }}>dream home</span>, or invest in a fraction of Saudi - we got you covered
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '80px' }}>
            {/* Blocks */}
            <div style={{ background: '#090E17', borderRadius: 25, padding: 30, position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '520px' }}>
              <div style={{ color: '#32BBFF', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'capitalize' }}>Blocks</div>
              <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400' }}>Invest in a piece of Saudi’s real estate and earn passive income.</div>
              <div style={{ marginTop: 'auto', width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="../src/assets/blocks.png" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 12 }} alt="blocks" />
              </div>
              <div style={{ width: 32, height: 32, background: "#32BBFF", borderRadius: "50%", position: "absolute", bottom: 20, right: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
            </div>

            {/* Mortgage */}
            <div style={{ background: '#090E17', borderRadius: 25, padding: 30, position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '520px' }}>
              <div style={{ color: '#36B79B', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'capitalize' }}>Mortgage</div>
              <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400' }}>Get pre-approved in minutes with the best mortgage rates in the market.</div>
              <div style={{ marginTop: 'auto', width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="../src/assets/mortage.png" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 12 }} alt="mortgage" />
              </div>
              <div style={{ width: 32, height: 32, background: "#36B79B", borderRadius: "50%", position: "absolute", bottom: 20, right: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
            </div>

            {/* Mint */}
            <div style={{ background: '#090E17', borderRadius: 25, padding: 30, position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '520px' }}>
              <div style={{ color: '#5222E2', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'capitalize' }}>Mint</div>
              <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400' }}>Buy, sell & trade tokenized real estate in Saudi backed by blockchain technology.</div>
              <div style={{ marginTop: 'auto', width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="../src/assets/mint.png" style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="mint" />
              </div>
              <div style={{ width: 32, height: 32, background: "#5222E2", borderRadius: "50%", position: "absolute", bottom: 20, right: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
            </div>
          </div>

          {/* Eco Sub-bar */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'capitalize', marginBottom: '10px' }}>Our Ecosystem</h2>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400' }}>Everything real estate on one platform</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {titles.map((title, idx) => (
              <div key={idx} style={{ background: '#090E17', borderRadius: 16, overflow: "hidden", display: 'flex', flexDirection: 'column' }}>
                <img src={images[idx]} style={{ width: "100%", height: 220, objectFit: "cover" }} alt={title} />
                <div style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                  <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', marginBottom: '20px' }}>{title}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#9CA3AF", fontSize: 14 }}>
                    <span>Learn More</span> <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section" style={{ background: '#F9FAFB', padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1280px' }}>
          {[
            { number: "15Bn+", label: "SAR in transactions", color: "#1D9F75" },
            { number: "80K+", label: "Customers trust us", color: "#3B82F6" },
            { number: "11K+", label: "Real estate partners", color: "#D946EF" },
            { number: "4.6", label: "Rating on Google", color: "#FBBF24" }
          ].map((stat, idx) => (
            <div key={idx} style={{ background: '#0B111E', borderRadius: '24px', padding: '40px 30px', display: 'flex', flexDirection: 'column', gap: '40px', minHeight: '220px', justifyContent: 'center' }}>
              <div style={{ color: stat.color, fontSize: '48px', fontFamily: 'Montserrat', fontWeight: '800' }}>{stat.number}</div>
              <div style={{ color: '#9CA3AF', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: '400' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section style={{ background: '#F9FAFB', padding: '60px 0 100px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <h2 style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: '500', color: '#111827', marginBottom: '40px' }}>In partnership with leaders in the industry</h2>
          <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px', width: '100%' }} className="partners-logos scroller">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
              <div key={i} style={{ flex: '0 0 298px', height: '174px' }}>
                <img
                  src={`../src/assets/collab-img/c${i}.svg`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  alt={`Partner ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNERS SECTION */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-card dark-green-bg">
            <div className="banner-content">
              <span className="content-badge">Our Mission</span>
              <h3>We Simplify your real estate journey</h3>
              <p>Whether you're looking for your first home, growing your portfolio, or selling a property, our integration ensures smooth navigation.</p>
            </div>
            <div className="banner-image">
              <img src={skyscraper} alt="Skyscrapers" />
            </div>
          </div>
        </div>
      </section>

      <section className="banner-section reverse-flex">
        <div className="container">
          <div className="banner-card white-bg">
            <div className="banner-image">
              <img src={handsHouse} alt="Hands holding model house" />
            </div>
            <div className="banner-content">
              <span className="content-badge outline">Who We Are</span>
              <h3>To enable Real Estate Freedom for all.</h3>
              <p>We provide users with data transparent analytics, easy navigation, and seamless transactions to experience ultimate freedom.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-section">
        <div className="container">
          <div className="banner-card navy-bg">
            <div className="banner-content">
              <span className="content-badge gold">Next-Gen Tech</span>
              <h3>We put the power of real estate in your hands</h3>
              <p>Leverage intuitive workspace utilities, smart analytics dashboards, and fractional purchase setups accessible instantly.</p>
            </div>
            <div className="banner-image">
              <img src={laptop} alt="Laptop and phone workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <Faq />

      {/* PURPLE SHOWCASE */}
      <section className="purple-showcase">
        <div className="container">
          <div className="purple-banner" style={{ background: '#5222E2', borderRadius: '32px', padding: '60px 40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '30px', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '48px', fontFamily: 'Montserrat', fontWeight: '800', color: 'white', maxWidth: '800px', lineHeight: '1.2' }}>One app for all real estate agents</h2>
            <p style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '400', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '750px', lineHeight: '1.6' }}>Premium Residency</p>

            <button style={{ background: '#111827', border: 'none', borderRadius: '40px', padding: '6px 6px 6px 24px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'transform 0.2s', marginTop: '10px' }}>
              <span style={{ color: 'white', fontSize: '14px', fontWeight: '600', fontFamily: 'Montserrat' }}>Learn More</span>
              <div style={{ width: '40px', height: '40px', background: '#A5B4FC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111827' }}>
                <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i>
              </div>
            </button>

            <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'center' }}>
              <img src='../src/assets/one_app_for_all.png' style={{ width: '50%', height: 'auto', display: 'block', marginBottom: '-5px' }} alt="Three App Screens" />
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      {/* <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <h2>Subscribe to our Newsletter</h2>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      <Footer />
    </div >
  );
};

export default Home;
