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
      {/* TOP FIGMA COMPILATIONS ABSOLUTE WRAPPER */}
      <div style={{ position: "relative", height: "2328px", width: "100%", background: "#090E17" }}>
        {/* Block 1: Hero Frame */}
        <div style={{
          width: "100%", height: 979, left: "50%", transform: "translateX(-50%)", top: 0, position: 'absolute', backgroundImage: `url(${banner})`, backgroundSize: 'cover',
          backgroundPosition: 'center', overflow: 'hidden', borderBottomRightRadius: 50, borderBottomLeftRadius: 50, zIndex: 10
        }}>
          <div style={{ width: 1440, height: 981, left: 0, top: 0, position: 'absolute', zIndex: -1 }} />
          {/* <img style={{ width: 3393, height: 603, left: -827, top: 381, position: 'absolute' }} src="https://placehold.co/3393x603" alt="bg" /> */}

          {/* Toggle bar */}
          <div style={{ width: 406, height: 56, left: 517, top: 135, position: 'absolute' }}>
            <div style={{ width: 406, height: 56, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 1000, border: '1px var(--Border-Color, #E5E7EB) solid' }} ></div>
            <div style={{ width: 227, height: 52, left: 177, top: 2, position: 'absolute', background: '#0F7B6C', borderRadius: 1000 }} />
            <div style={{ left: 30, top: 18, position: 'absolute', color: '#9CA3AF', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400' }}>Financing</div>
            <div style={{ left: 271, top: 18, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500' }}>Fractional</div>
            <div style={{ width: 40, height: 40, left: 183, top: 8, position: 'absolute', overflow: 'hidden' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_195_3078)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1688 21.1L21.0987 28.175C20.61 28.6625 19.8187 28.6625 19.3312 28.175C18.8425 27.6875 18.8425 26.8875 19.3312 26.4L24.4825 21.25H11.25C10.5588 21.25 10 20.6875 10 20C10 19.3125 10.5588 18.75 11.25 18.75H24.4825L19.3312 13.6C18.8425 13.1125 18.8425 12.325 19.3312 11.825C19.8187 11.3375 20.61 11.3375 21.0987 11.825L28.1688 18.9C28.4688 19.2 28.5625 19.6125 28.4938 20C28.5625 20.3875 28.4688 20.8 28.1688 21.1ZM20 0C8.95375 0 0 8.95 0 20C0 31.05 8.95375 40 20 40C31.0462 40 40 31.05 40 20C40 8.95 31.0462 0 20 0Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_195_3078">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </div>
          </div>

          <div style={{ left: "50%", transform: "translateX(-50%)", top: 216, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 64, fontFamily: 'Impact', fontWeight: '400', letterSpacing: 2.56, wordWrap: 'break-word' }}>YOUR END-TO-END<br />REAL ESTATE PLATFORM.</div>
          <div style={{ left: "50%", transform: "translateX(-50%)", marginTop: 420, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Navigate real estate on your terms, from traditional to tokenized, invest, finance, sell, or manage.</div>

          {/* Action panel */}
          <div style={{ width: 1062, height: 104, left: 189, top: 836, position: 'absolute', background: 'white', borderRadius: 25, border: '1px #E5E7EB solid' }} />

          <div style={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 30, paddingRight: 4, left: 829.50, top: 859, position: 'absolute', background: '#111827', borderRadius: 32, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600' }}>Visit Blocks</div>
            <div style={{ width: 40, height: 40, background: '#32BBFF', borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
          </div>

          <div style={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 30, paddingRight: 4, left: 1053.50, top: 859, position: 'absolute', background: '#111827', borderRadius: 32, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600' }}>Visit Mint</div>
            <div style={{ width: 40, height: 40, background: '#5222E2', borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
          </div>

          <div style={{ left: 293, top: 877, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400', letterSpacing: 0.72 }}>Saudi’s real estate from just SAR 2,000.</div>
        </div>

        {/* Block 2: Blocks Mortgage Mint Grid Container */}
        <div style={{ width: 1440, height: 1349, left: "50%", transform: "translateX(-50%)", top: 978, position: 'absolute', background: '#0B111E', overflow: 'hidden' }}>
          <div style={{ width: 1077, left: 80, top: 50, position: 'absolute' }}><span style={{ color: 'white', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'capitalize' }}>Own your </span><span style={{ color: '#0F7B6C', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'capitalize' }}>dream home</span><span style={{ color: 'white', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'capitalize' }}>, or invest in a fraction of Saudi - we got you covered</span></div>

          {/* Mint */}
          <div style={{ width: 407, height: 536, left: 952, top: 208, position: 'absolute', background: '#090E17', borderRadius: 25, padding: 30 }}>
            <div style={{ color: '#5222E2', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'capitalize', marginBottom: 15 }}>Mint</div>
            <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400', marginBottom: 30 }}>Buy, sell & trade tokenized real estate in Saudi backed by blockchain technology.</div>
            <img src="../src/assets/mint.png" style={{ width: "100%", height: "300px", objectFit: "contain", position: "absolute", bottom: 0, left: 0 }} alt="mint" />
            <div style={{ width: 32, height: 32, background: "#5222E2", borderRadius: "50%", position: "absolute", bottom: 20, right: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
          </div>

          {/* Blocks */}
          <div style={{ width: 407, height: 536, left: 80, top: 208, position: 'absolute', background: '#090E17', borderRadius: 25, padding: 30 }}>
            <div style={{ color: '#32BBFF', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'capitalize', marginBottom: 15 }}>Blocks</div>
            <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400' }}>Invest in a piece of Saudi’s real estate and earn passive income.</div>
            <img src="../src/assets/blocks.png" style={{ width: "100%", objectFit: "cover", borderRadius: 12 }} alt="mortgage" />

            <div style={{ width: 32, height: 32, background: "#32BBFF", borderRadius: "50%", position: "absolute", bottom: 20, right: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
          </div>

          {/* Mortgage */}
          <div style={{ width: 407, height: 536, left: 516, top: 208, position: 'absolute', background: '#090E17', borderRadius: 25, padding: 30 }}>
            <div style={{ color: '#36B79B', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700', textTransform: 'capitalize', marginBottom: 15 }}>Mortgage</div>
            <div style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '400', marginBottom: 20 }}>Get pre-approved in minutes with the best mortgage rates in the market.</div>
            <img src="../src/assets/mortage.png" style={{ width: "100%", objectFit: "cover", borderRadius: 12 }} alt="mortgage" />
            <div style={{ width: 32, height: 32, background: "#36B79B", borderRadius: "50%", position: "absolute", bottom: 20, right: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><i className="fa-solid fa-arrow-right"></i></div>
          </div>

          {/* Ecosystem Sub-bar */}
          <div style={{ width: 462, left: 80, top: 804, position: 'absolute', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ color: 'white', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'capitalize' }}>Our Ecosystem</div>
            <div style={{ color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400' }}>Everything real estate on one platform</div>
          </div>

          <div style={{ display: 'flex', gap: 16, position: 'absolute', left: 80, top: 947, width: 1280 }}>
            {titles.map((title, idx) => (
              <div
                key={idx}
                style={{ width: 298, height: 352, background: '#090E17', borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src={images[idx]}
                  style={{ width: "100%", height: 220, objectFit: "cover" }}
                  alt={title}
                />
                <div style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-between", height: 132 }}>
                  <div style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '600' }}>
                    {title}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#9CA3AF", fontSize: 14 }}>
                    <span>Learn More</span>
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            <p style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '400', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '750px', lineHeight: '1.6' }}>Unlock the full power of real estate tools — find and share listings, access in-depth project data, and earn commissions with Mortgage and Golden Visa referrals.</p>

            <button style={{ background: '#111827', border: 'none', borderRadius: '40px', padding: '6px 6px 6px 24px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'transform 0.2s', marginTop: '10px' }}>
              <span style={{ color: 'white', fontSize: '14px', fontWeight: '600', fontFamily: 'Montserrat' }}>Learn More</span>
              <div style={{ width: '40px', height: '40px', background: '#A5B4FC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111827' }}>
                <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i>
              </div>
            </button>

            <div style={{ width: '100%', maxWidth: '1000px', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
              <img src='../src/assets/one_app_for_all.png' style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '-5px' }} alt="Three App Screens" />
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
