import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Testimonials from "../testimonials/Testimonials";
import Faq from "../faq/Faq";
import banner from '../../assets/teokenized-banner.png';
import tokenizationImage from '../../assets/tokenization_glance.png';
const apartments = [
  {
    id: 1,
    image: "../src/assets/re_1.png",
    title: "Downtown Highrise Apartment #1",
    location: "Dubai Marina, UAE",
    price: "AED 2,500",
    roi: "9.5% Est. ROI",
  },
  {
    id: 2,
    image: "../src/assets/re_2.png",
    title: "Downtown Highrise Apartment #2",
    location: "Dubai Marina, UAE",
    price: "AED 2,700",
    roi: "9.7% Est. ROI",
  },
  {
    id: 3,
    image: "../src/assets/re_3.png",
    title: "Downtown Highrise Apartment #3",
    location: "Dubai Marina, UAE",
    price: "AED 2,600",
    roi: "9.6% Est. ROI",
  }
];
const TokenizedHomes = () => {
  const [activeTab, setActiveTab] = useState("Invest");

  return (
    <div style={{ background: "#060A11", color: "white", fontFamily: "Montserrat", overflowX: "hidden" }}>
      <Header />

      {/* 1. HERO MARKETPLACE */}
      <section style={{
        padding: "120px 0 80px", textAlign: "center", backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', position: "relative"
      }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <h1 style={{ fontSize: "56px", fontWeight: "800", lineHeight: "1.2", marginBottom: "16px" }}>
            The M2 Square <br /> <span style={{ color: "#8B5CF6" }}>Marketplace</span> Is now Live!
          </h1>
          <p style={{ fontSize: "18px", color: "#9CA3AF", maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" }}>
            Buy, Sell, and Trade fractional real estate in premium properties starting from just AED 2,000.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "60px" }}>
            <button style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
              {/* Google Play Badges Placeholder */}
              <div style={{ width: "160px", height: "48px", background: "#111827", borderRadius: "8px", border: "1px solid #374151", display: "flex", alignItems: "center", justifyContent: "center" }}>Google Play</div>
            </button>
            <button style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
              <div style={{ width: "160px", height: "48px", background: "#111827", borderRadius: "8px", border: "1px solid #374151", display: "flex", alignItems: "center", justifyContent: "center" }}>App Store</div>
            </button>
          </div>

          <div style={{ width: "100%", height: "300px", background: "url('/placeholder-grid.png') center/cover", opacity: 0.3 }}></div>
        </div>

        {/* Top tabs toolbar sub bar */}
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          {["Tokenized Homes", "Marketplace", "How It works", "Download App", "Dashboards", "Security"].map((t, i) => (
            <span key={i} style={{ color: i === 0 ? "white" : "#6B7280", fontSize: "14px", fontWeight: i === 0 ? "600" : "400", cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* 2. PROPERTIES SELECTION */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", textAlign: "center", marginBottom: "40px" }}>The Selection That Speaks For Itself</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                style={{ background: "#111827", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div style={{ height: "350px", position: "relative" }}>
                  <img
                    src={apartment.image}
                    alt={apartment.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "#10B981",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px"
                    }}
                  >
                    Available
                  </span>
                </div>
                <div style={{ padding: "24px" }}>
                  <h4 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}>
                    {apartment.title}
                  </h4>
                  <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "16px" }}>
                    {apartment.location}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: "600" }}>
                    <span>{apartment.price}</span>
                    <span style={{ color: "#10B981" }}>{apartment.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button style={{ background: "transparent", border: "2px solid #6366F1", padding: "12px 32px", borderRadius: "30px", color: "white", fontWeight: "600", cursor: "pointer" }}>View All Properties</button>
          </div>
        </div>
      </section>

      {/* 3. FOUR FEATURES */}
      <section style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", maxWidth: "1100px" }}>
          {[
            { title: "Earn passive income", desc: "Collect monthly rental yields directly safely strictly." },
            { title: "Tokens security", desc: "Secured by DFSA compliance smart audit streams." },
            { title: "Global Visa perks", desc: "Unlock citizenship access paths overlay strictly." },
            { title: "24/7 liquidity", desc: "Trade assets freely on absolute transparent fully." }
          ].map((feature, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", background: "#4338CA", borderRadius: "8px" }}></div>
              <h5 style={{ fontSize: "18px", fontWeight: "600" }}>{feature.title}</h5>
              <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.5" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TOKENIZATION BANNERS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1200px", display: "flex", flexDirection: "column", gap: "40px" }}>

          <div style={{ background: "#111827", borderRadius: "32px", padding: "60px", display: "grid", gridTemplateColumns: "1.2fr 1fr", alignItems: "center", gap: "40px" }}>
            <div>
              <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px" }}>Tokenization explained <br /> simply at glance</h2>
              <p style={{ color: "#9CA3AF", marginBottom: "30px", lineHeight: "1.6" }}>Blockchain tokenizes safe fractionals framing standard boundaries safely loaded strictly overlay strictly framing loads safe absolute dimensions framing standard framing strictly framing safe loads margins safely layout absolute bounds dimension.</p>
              <button style={{ background: "#6366F1", border: "none", padding: "12px 24px", borderRadius: "30px", color: "white", cursor: "pointer" }}>Learn More</button>
            </div>
            <div
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "20px",
                backgroundImage: `url(${tokenizationImage})`,
                backgroundSize: "cover",      // makes the image cover the whole div
                backgroundPosition: "center", // centers the image
                backgroundRepeat: "no-repeat" // prevents tiling
              }}
            ></div>
          </div>

          <div style={{ background: "#111827", borderRadius: "32px", padding: "60px", display: "grid", gridTemplateColumns: "1fr 1.2fr", alignItems: "center", gap: "40px" }}>
            <div
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "20px",
                backgroundImage: `url(${tokenizationImage})`,
                backgroundSize: "cover",      // makes the image cover the whole div
                backgroundPosition: "center", // centers the image
                backgroundRepeat: "no-repeat" // prevents tiling
              }}
            ></div><div>
              <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px" }}>What is tokenization?</h2>
              <p style={{ color: "#9CA3AF", marginBottom: "30px", lineHeight: "1.6" }}>Transforming physical properties into safe fractional nodes loading sizing fully loaded layout loads absolute loads margins loaded absolute loads framing dimensional loaded absolute sizing spaced layers spaces layouts absolute framing spacing dimensional.</p>
              <button style={{ background: "#6366F1", border: "none", padding: "12px 24px", borderRadius: "30px", color: "white", cursor: "pointer" }}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEPS ROW */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "40px" }}>It is Really This Simple</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[1, 2, 3].map((step) => (
              <div key={step} style={{ background: "#111827", borderRadius: "24px", padding: "40px 30px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <p style={{ color: "#8B5CF6", fontWeight: "600", marginBottom: "12px" }}>STEP 0{step}</p>
                <h4 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>Create your Account setup terms safely</h4>
                <div style={{ width: "100%", height: "250px", background: "#374151", borderRadius: "16px" }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LAPTOP Mockup BANNER */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ background: "#5222E2", borderRadius: "32px", padding: "60px", display: "grid", gridTemplateColumns: "1.2fr 1fr", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px" }}>Download M2 Square or <br /> Sign up to view <br /> available Properties</h2>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "30px" }}>Take the power of fractional layouts loads loaded strictly safely framing limits safely loads spacing limits dimensions spaces.</p>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={{ background: "#111827", border: "none", padding: "10px 20px", borderRadius: "8px", color: "white" }}>App Store</button>
                <button style={{ background: "#111827", border: "none", padding: "10px 20px", borderRadius: "8px", color: "white" }}>Google Play</button>
              </div>
            </div>
            <div style={{ width: "100%", height: "250px", background: "url('/laptop.png') center/contain no-repeat" }}></div>
          </div>
        </div>
      </section>

      {/* 7. INVEST TERMS / DASHBOARD */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "30px" }}>Investing On your terms</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {["Diversification", "Secured Assets", "Analytics dashboard"].map((item, i) => (
                <div key={i} style={{ background: i === 0 ? "#1E1B4B" : "transparent", padding: "16px 24px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", background: "#6366F1", borderRadius: "50%" }}></div>
                  <span style={{ fontWeight: "600" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: "100%", height: "400px", background: "#111827", borderRadius: "24px" }}></div>
        </div>
      </section>

      {/* 8. WE TAKE CARE */}
      <section style={{ padding: "80px 0", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px" }}>We Take Care of It All</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px", textAlign: "left" }}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <h5 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>Legal & Compliance framework</h5>
                <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.5" }}>Fully auditable node streams properly compliant layout bounds loads sizes safely framing limit layout spacing spacing dimensions layout sizing fully sizing space layout loaded.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MARKETPLACE CONTROL filter tabs */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1200px", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "20px" }}>Our Marketplace, Your Control</h2>

          <div style={{ display: "inline-flex", background: "#111827", padding: "6px", borderRadius: "30px", marginBottom: "40px" }}>
            {["Invest", "Sell", "Trade"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ padding: "10px 24px", borderRadius: "20px", border: "none", background: activeTab === tab ? "#6366F1" : "transparent", color: "white", cursor: "pointer", fontWeight: "600" }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ background: "#111827", borderRadius: "20px", padding: "30px", textAlign: "left" }}>
                <h5 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>Direct Market orders placement</h5>
                <p style={{ color: "#9CA3AF", fontSize: "14px" }}>Absolute load spaces fully fully spaces fully absolute fully loads fully absolute load spacing layout fully absolute load spacing layout fully absolute load spacing layout spacing.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSED COMPONENTS */}
      <Testimonials />
      <Faq />

      {/* 10. HANDBOOK BANNER */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="container">
          <div style={{ background: "#5222E2", borderRadius: "32px", padding: "60px", display: "grid", gridTemplateColumns: "1fr 1.2fr", alignItems: "center", gap: "40px" }}>
            <div style={{ width: "100%", height: "300px", background: "#1E1B4B", borderRadius: "24px" }}></div>
            <div>
              <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px" }}>Download Our <br /> <span style={{ textDecoration: "underline" }}>Handbook</span></h2>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "30px" }}>Absolute sizing layouts spacing sizing layout spacing width sizing full size overlap framing limit spacer absolutely spacing dimension loads safe spacing load.</p>
              <button style={{ background: "#A5B4FC", border: "none", padding: "12px 32px", borderRadius: "30px", color: "#111827", fontWeight: "600", cursor: "pointer" }}>Get It Now</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TokenizedHomes;
