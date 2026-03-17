import React, { useState, useRef } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Testimonials from "../testimonials/Testimonials";
import Faq from "../faq/Faq";
import banner from '../../assets/teokenized-banner.png';
import tokenizationImage from '../../assets/tokenization_glance.png';
const apartments = [
  {
    id: 1,
    image: "../src/assets/re_2.png",
    title: "Studio Apartment",
    location: "Al Murabba District, Riyadh",
    propertyType: "Apartment",
    listingPrice: "SAR 1,144,000",
    currentValuation: "SAR 1,229,896",
    annualRoi: "10.64%",
    badges: ["Available", "Ready"]
  },
  {
    id: 2,
    image: "../src/assets/re_1.png",
    title: "3 Bedroom",
    location: "Al Faisaliyah District, Dammam",
    propertyType: "Townhouse",
    listingPrice: "SAR 2,300,000",
    currentValuation: "SAR 2,450,000",
    annualRoi: "8.90%",
    badges: ["Unavailable"]
  },
  {
    id: 3,
    image: "../src/assets/re_3.png",
    title: "Studio Apartment",
    location: "Al Aziziyah District",
    propertyType: "Apartment",
    listingPrice: "SAR 1,144,000",
    currentValuation: "SAR 1,229,896",
    annualRoi: "10.64%",
    badges: ["Available", "Ready"]
  },
  {
    id: 4,
    image: "../src/assets/re_4.png",
    title: "One Bedroom Apartment",
    location: "Al Zahra District",
    propertyType: "Apartment",
    listingPrice: "SAR 1,144,000",
    currentValuation: "SAR 1,229,896",
    annualRoi: "10.64%",
    badges: ["Available", "Ready"]
  }
];
const TokenizedHomes = () => {
  const [activeTab, setActiveTab] = useState("Invest");
  const [expandedItem, setExpandedItem] = useState("Liquidity");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const carouselRef = useRef(null);

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
            The M<sup>2</sup> Square <br /> <span style={{ color: "#8B5CF6" }}>Marketplace</span> Is now Live!
          </h1>
          <p style={{ fontSize: "18px", color: "#9CA3AF", maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" }}>
            Invest in Saudi Arabia's best rental properties, starting from just SAR 2,000 on your real estate investments this month.</p>



          <div style={{ width: "100%", height: "300px", background: "url('/placeholder-grid.png') center/cover", opacity: 0.3 }}></div>
        </div>

        {/* Top tabs toolbar sub bar */}
        {/* <div style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            {["Tokenized Homes", "Marketplace", "How It works", "Download App", "Dashboards", "Security"].map((t, i) => (
              <span key={i} style={{ color: i === 0 ? "white" : "#6B7280", fontSize: "14px", fontWeight: i === 0 ? "600" : "400", cursor: "pointer" }}>{t}</span>
            ))}
          </div> */}
      </section>

      {/* 2. PROPERTIES SELECTION */}
      <section style={{ padding: "80px 0", background: "#060A11" }}>
        <style>
          {`
            .carousel-container::-webkit-scrollbar { display: none; }
            .carousel-container { -ms-overflow-style: none; scrollbar-width: none; }
          `}
        </style>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", textAlign: "center", marginBottom: "50px", color: "white" }}>The Future Of Real Estate Starts Here</h2>
          <div
            ref={carouselRef}
            className="carousel-container"
            onScroll={(e) => {
              const scrollPosition = e.target.scrollLeft;
              const cardWidth = e.target.offsetWidth / 3; // Approx card width
              const index = Math.round(scrollPosition / cardWidth);
              if (index >= 0 && index < apartments.length) {
                setActiveCardIndex(index);
              }
            }}
            style={{
              display: "flex",
              gap: "24px",
              marginBottom: "40px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: "10px"
            }}
          >
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                style={{
                  backgroundImage: `url(${apartment.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  width: "calc(33.333% - 16px)", // Matches earlier logic for 3 visible layout
                  flexShrink: 0,
                  scrollSnapAlign: "start"
                }}
              >
                {/* Overlay gradient */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", background: "linear-gradient(to top, rgba(6,10,17,1) 0%, rgba(6,10,17,0.7) 30%, rgba(0,0,0,0) 80%)", zIndex: 1 }}></div>

                {/* Badges */}
                <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", zIndex: 2 }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {apartment.badges.map((b, i) => (
                      <span key={i} style={{ background: b === "Available" ? "#10B981" : b === "Ready" ? "#111827" : "rgba(239, 68, 68, 0.4)", color: "white", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", border: b === "Unavailable" ? "1px solid #EF4444" : "none" }}>{b}</span>
                    ))}
                  </div>
                  {apartment.id === 1 && <span style={{ background: "rgba(0,0,0,0.5)", color: "white", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", border: "1px solid rgba(255,255,255,0.2)" }}>Under Offer</span>}
                </div>

                {/* Content Overlay */}
                <div style={{ position: "absolute", bottom: "30px", left: "24px", right: "24px", zIndex: 2 }}>
                  <div style={{ display: "flex", gap: "16px", marginBottom: "12px", color: "#9CA3AF", fontSize: "12px", alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fa-solid fa-location-dot"></i> {apartment.location}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fa-solid fa-building"></i> {apartment.propertyType}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: "white" }}>{apartment.title}</h4>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#FBBF24", fontSize: "14px", marginBottom: "4px" }}>
                        <i className="fa-solid fa-money-bill-wave"></i>
                      </div>
                      <p style={{ color: "#9CA3AF", fontSize: "11px", marginBottom: "2px" }}>Listing Price</p>
                      <p style={{ fontSize: "14px", fontWeight: "700", color: "white" }}>{apartment.listingPrice}</p>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#FBBF24", fontSize: "14px", marginBottom: "4px" }}>
                        <i className="fa-solid fa-coins"></i>
                      </div>
                      <p style={{ color: "#9CA3AF", fontSize: "11px", marginBottom: "2px" }}>Current Valuation</p>
                      <p style={{ fontSize: "14px", fontWeight: "700", color: "white" }}>{apartment.currentValuation}</p>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#FBBF24", fontSize: "14px", marginBottom: "4px" }}>
                        <i className="fa-solid fa-chart-line"></i>
                      </div>
                      <p style={{ color: "#9CA3AF", fontSize: "11px", marginBottom: "2px" }}>Annual ROI</p>
                      <p style={{ fontSize: "14px", fontWeight: "700", color: "white" }}>{apartment.annualRoi}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "40px" }}>
            {apartments.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const container = carouselRef.current;
                    const targetNode = container.childNodes[index];
                    if (targetNode) {
                      const offsetLeft = targetNode.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft;
                      container.scrollTo({ left: offsetLeft, behavior: "smooth" });
                    }
                  }
                }}
                style={{
                  width: activeCardIndex === index ? "24px" : "8px",
                  height: "8px",
                  background: activeCardIndex === index ? "#8B5CF6" : "#1F2937",
                  borderRadius: activeCardIndex === index ? "10px" : "50%",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
              ></div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button style={{ background: "#8B5CF6", border: "none", padding: "14px 40px", borderRadius: "30px", color: "white", fontWeight: "600", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              View Funded Properties
              <div style={{ width: "24px", height: "24px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-arrow-right" style={{ transform: "rotate(-45deg)", fontSize: "12px" }}></i>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. FOUR FEATURES */}
      <section style={{ padding: "100px 0", background: "#060A11" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "60px 40px", maxWidth: "1100px" }}>
          {[
            {
              title: "Bridging real estate and the digital age",
              desc: <>M<sup>2</sup> Square is revolutionizing real estate investment in the MENA region by seamlessly bridging traditional real estate with the digital age.</>
            },
            {
              title: "Backed by Saudi’s Leading Authorities",
              desc: "We’re licensed by the Saudi Virtual Assets Regulatory Authority (VARA) and are strategic partners of the Saudi Land Department (SALD)."
            },
            {
              title: "Own and trade property tokens securely",
              desc: "Our platform lets you securely and seamlessly own and sell property tokens on our Marketplace, giving you full control and transparency."
            },
            {
              title: "Save on Saudi Land Department (SALD) fees",
              desc: <>With M<sup>2</sup> Square, investors pay only half the DLD fees —just 2% instead of the standard 4%—making real estate investments more affordable and accessible.</>
            }
          ].map((feature, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* 4 diamond icon */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px", width: "24px", transform: "rotate(45deg)", marginBottom: "4px" }}>
                <div style={{ width: "10px", height: "10px", background: "#8B5CF6", borderRadius: "2px" }}></div>
                <div style={{ width: "10px", height: "10px", background: "#8B5CF6", borderRadius: "2px" }}></div>
                <div style={{ width: "10px", height: "10px", background: "#8B5CF6", borderRadius: "2px" }}></div>
                <div style={{ width: "10px", height: "10px", background: "#8B5CF6", borderRadius: "2px" }}></div>
              </div>
              <h4 style={{ fontSize: "20px", fontWeight: "700", color: "white", lineHeight: "1.4" }}>{feature.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: "1.6", fontWeight: "400" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TOKENIZATION BANNERS */}
      <section style={{ padding: "100px 0", background: "#060A11" }}>
        <div className="container" style={{ maxWidth: "1200px", display: "flex", flexDirection: "column", gap: "80px" }}>

          {/* First Banner */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "60px" }}>
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px", color: "white", fontFamily: "Montserrat" }}>Tokenization <br /> at a glance</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "20px", lineHeight: "1.6", fontSize: "16px" }}>
                Real estate tokenization is the process of transforming real-world assets (properties) into virtual assets (tokens) stored on a blockchain.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6", fontSize: "16px" }}>
                Instead of relying on traditional methods and lengthy transactions, the properties' title deeds are registered on the blockchain, making real estate fractional ownership easier, transparent, and more accessible.
              </p>
            </div>

            <div style={{ width: "100%", height: "480px", background: "#191B4C", borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              {/* 3D Token illustration mockup */}
              <div style={{ width: "260px", height: "260px", background: "#4338CA", borderRadius: "50%", position: "relative", border: "12px solid #6366F1", boxShadow: "0 0 50px rgba(99, 102, 241, 0.4)", transform: "rotate(-15deg)" }}>
                <div style={{ width: "180px", height: "180px", borderRadius: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "linear-gradient(135deg, #D9F99D, #84CC16)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", width: "70px", height: "70px", transform: "translate(55px, 55px) rotate(45deg)" }}>
                    <div style={{ width: "30px", height: "30px", background: "#4338CA", borderRadius: "4px" }}></div>
                    <div style={{ width: "30px", height: "30px", background: "#4338CA", borderRadius: "4px" }}></div>
                    <div style={{ width: "30px", height: "30px", background: "#4338CA", borderRadius: "4px" }}></div>
                    <div style={{ width: "30px", height: "30px", background: "#4338CA", borderRadius: "4px" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Banner */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "60px" }}>
            <div style={{ width: "100%", height: "480px", background: "#191B4C", borderRadius: "32px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              {/* Grid Mockup */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 25px)", gap: "6px", opacity: 0.6 }}>
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} style={{ width: "25px", height: "25px", background: i > 23 && i < 30 ? "#6366F1" : "#1E1B4B", borderRadius: "4px", border: i > 23 && i < 30 ? "1px solid #A5B4FC" : "1px solid rgba(255,255,255,0.05)", boxShadow: i > 23 && i < 30 ? "0 0 10px rgba(99,102,241,0.8)" : "none" }}></div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px", color: "white", fontFamily: "Montserrat" }}>What is a <span style={{ color: "#8B5CF6" }}>token?</span></h2>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "20px", lineHeight: "1.6", fontSize: "16px" }}>
                A token is a digital unit of ownership stored on a blockchain.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "30px", lineHeight: "1.6", fontSize: "16px" }}>
                For example, in real estate, a property can be divided into 1,000,000 tokens, and each token represents a fraction of ownership. Buying 10,000 tokens would give you 1% ownership of the property.
              </p>

              <button style={{ background: "#8B5CF6", border: "none", padding: "12px 32px", borderRadius: "30px", color: "white", fontWeight: "600", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Get Started
                <div style={{ width: "24px", height: "24px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fa-solid fa-arrow-right" style={{ transform: "rotate(-45deg)", fontSize: "12px" }}></i>
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. STEPS ROW */}
      <section style={{ padding: "100px 0", textAlign: "center", background: "#060A11" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "16px", color: "white" }}>It’s Really This Simple</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto 60px", fontSize: "16px", lineHeight: "1.6" }}>
            Start building wealth and earn passive income in 3 easy steps.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                title: "Buy",
                desc: "Browse our expertly curated portfolio and invest in tokenised Saudi Arabia properties from SAR 2,000.",
                image: "../src/assets/image_3.png"
              },
              {
                title: "Mortgage",
                desc: <>Receive returns from monthly rental income and capital appreciation, directly in your M<sup>2</sup> Square Mint Wallet.</>,
                image: "../src/assets/image_4.png"
              },
              {
                title: "Mint",
                desc: <>Easily sell your tokens on the M<sup>2</sup> Square Mint Marketplace, offering faster and flexible transactions.</>,
                image: "../src/assets/image_5.png"
              }
            ].map((step, index) => (
              <div key={index} style={{ background: "#111428", borderRadius: "32px", padding: "40px 30px 0", border: "1px solid rgba(255,255,255,0.03)", textAlign: "left", display: "flex", flexDirection: "column", gap: "16px", overflow: "hidden" }}>
                <h4 style={{ fontSize: "28px", fontWeight: "700", color: "#8B5CF6" }}>{step.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px", minHeight: "70px" }}>{step.desc}</p>

                {/* iPhone Mockup Image container */}
                <div style={{ width: "100%", height: "350px", background: "rgba(255,255,255,0.02)", borderTopLeftRadius: "24px", borderTopRightRadius: "24px", overflow: "hidden" }}>
                  <img src={step.image} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} alt={step.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5B. BREAKING DOWN BARRIERS */}
      <section style={{ padding: "100px 0", background: "#060A11" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "800", textAlign: "center", marginBottom: "16px", color: "white" }}>Breaking Down Barriers</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto 60px", fontSize: "16px", textAlign: "center" }}>
            Here's how we make Saudi Arabia's real estate accessible to everyone.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "flex-start" }}>
            {/* Left Column: Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  id: "Liquidity",
                  title: "Liquidity",
                  icon: "fa-eye",
                  content: <>Traditional real estate can be slow to sell, with long processes and high costs. M<sup>2</sup> changes that by offering fractional ownership, allowing investors to easily buy and sell digital tokens, which represent a share of a property, at any time through our Marketplace.</>
                },
                {
                  id: "Accessibility",
                  title: "Accessibility",
                  icon: "fa-globe",
                  content: <>M<sup>2</sup> Mint eliminates the need for large capital investments. By lowering the barriers to entry, it opens the door for investors to participate in Saudi Arabia’s real estate market, which was previously inaccessible to many.</>
                },
                {
                  id: "Transparency",
                  title: "Transparency",
                  icon: "fa-eye",
                  content: <>M<sup>2</sup> Mint ensures security and transparency through blockchain offering full transaction visibility and SAMA-issued token ownership certificate. Investors can access their tokens via M<sup>2</sup> Wallet.</>
                },
                {
                  id: "Diversification",
                  title: "Diversification",
                  icon: "fa-chart-pie",
                  content: "Tokenization enables investors to own fractions of multiple properties, reducing risk and enhancing portfolio diversity. This approach creates a more balanced investment strategy compared to investing in a single property."
                }
              ].map((item) => {
                const isExpanded = expandedItem === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setExpandedItem(isExpanded ? "" : item.id)}
                    style={{
                      background: isExpanded ? "#0E0E32" : "#0E0E32",
                      border: isExpanded ? "2px solid rgba(139, 92, 246, 0.4)" : "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      boxShadow: isExpanded ? "0 4px 20px rgba(139, 92, 246, 0.1)" : "none"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <i className={`fa-solid ${item.icon}`} style={{ color: "#8B5CF6", fontSize: "18px" }}></i>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "white" }}>{item.title}</span>
                      </div>
                      <i className={`fa-solid ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "14px" }}></i>
                    </div>
                    {isExpanded && (
                      <div style={{ marginTop: "16px", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", lineHeight: "1.6" }}>
                        {item.content}
                      </div>
                    )}

                    {/* Dotted Connection Line (Only for expanded Liquidity to match image) */}
                    {isExpanded && item.id === "Liquidity" && (
                      <div style={{
                        position: "absolute",
                        right: "-61px",
                        top: "50%",
                        width: "60px",
                        height: "0px",
                        borderBottom: "2px dashed #3B82F6",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center"
                      }}>
                        <div style={{
                          position: "absolute",
                          right: "-5px",
                          width: "10px",
                          height: "10px",
                          background: "#0EA5E9",
                          borderRadius: "50%",
                          boxShadow: "0 0 10px rgba(14, 165, 233, 0.8)",
                          border: "1px solid #FFF"
                        }}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Visual */}
            <div style={{
              width: "100%",
              height: "500px",
              background: "#18173B",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}>
              {/* Central Circle */}
              <div style={{
                width: "220px",
                height: "220px",
                background: "#DDF79D",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(221, 247, 157, 0.2)",
                position: "relative",
                zIndex: 2
              }}>
                <p style={{ color: "#4B5563", fontSize: "11px", marginBottom: "8px", fontWeight: "600" }}></p>
                <div style={{
                  width: "110px",
                  height: "110px",
                  background: "#3730A3",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {/* Logo Inner */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px", width: "40px", height: "40px", transform: "rotate(45deg)" }}>
                    <div style={{ width: "17px", height: "17px", background: "#A3E635", borderRadius: "3px" }}></div>
                    <div style={{ width: "17px", height: "17px", background: "#A3E635", borderRadius: "3px" }}></div>
                    <div style={{ width: "17px", height: "17px", background: "#A3E635", borderRadius: "3px" }}></div>
                    <div style={{ width: "17px", height: "17px", background: "#A3E635", borderRadius: "3px" }}></div>
                  </div>
                </div>
              </div>

              {/* Left Side Sliding Items */}
              <div style={{
                position: "absolute",
                left: "-40px",
                width: "90px",
                height: "90px",
                background: "#A3E635",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px", width: "24px", height: "24px", transform: "rotate(45deg)" }}>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                </div>
              </div>

              {/* Right Side Sliding Items */}
              <div style={{
                position: "absolute",
                right: "-40px",
                width: "90px",
                height: "90px",
                background: "#A3E635",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px", width: "24px", height: "24px", transform: "rotate(45deg)" }}>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                  <div style={{ width: "10px", height: "10px", background: "#3730A3", borderRadius: "2px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LAPTOP Mockup BANNER */}
      {/* <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ background: "#5222E2", borderRadius: "32px", padding: "60px", display: "grid", gridTemplateColumns: "1.2fr 1fr", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px" }}>Download M<sup>2</sup> Square or <br /> Sign up to view <br /> available Properties</h2>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "30px" }}>Take the power of fractional layouts loads loaded strictly safely framing limits safely loads spacing limits dimensions spaces.</p>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={{ background: "#111827", border: "none", padding: "10px 20px", borderRadius: "8px", color: "white" }}>App Store</button>
                <button style={{ background: "#111827", border: "none", padding: "10px 20px", borderRadius: "8px", color: "white" }}>Google Play</button>
              </div>
            </div>
            <div style={{ width: "100%", height: "250px", background: "url('/laptop.png') center/contain no-repeat" }}></div>
          </div>
        </div>
      </section> */}

      {/* 7. INVEST TERMS / DASHBOARD */}
      {/* <section style={{ padding: "80px 0" }}>
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
      </section> */}

      {/* 8. WE TAKE CARE */}
      <section style={{ padding: "100px 0", background: "#060A11" }}>
        <div className="container" style={{ maxWidth: "1100px", textAlign: "center" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "60px", color: "white" }}>We Take Care Of It All</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "50px 60px", textAlign: "left" }}>
            {[
              { title: "Property sourcing", desc: "Our expert team identifies and selects high-potential properties for tokenization." },
              { title: "Property funding", desc: "The property is listed on our platform and opened for investor funding." },
              { title: "Asset tokenization", desc: "The property is divided into digital tokens, allowing investors to own them directly through our platform." },
              { title: "Property management", desc: "We take care of everything, from tenant selection to maintenance, and everything in between." },
              { title: "Dividend distribution", desc: <>Investors receive their share of monthly rental income directly in their M<sup>2</sup> Square Mint Wallet.</> },
              { title: "Exit strategy", desc: "We seamlessly handle the sale when the property reaches its target value or investors vote to sell." }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ width: "2px", height: "45px", background: "#8B5CF6", flexShrink: 0 }}></div>
                <div>
                  <h5 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px", color: "white" }}>{item.title}</h5>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MARKETPLACE CONTROL filter tabs */}
      {/* <section style={{ padding: "100px 0", background: "#060A11" }}>
        <div className="container" style={{ maxWidth: "1200px", textAlign: "center" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "30px", color: "white" }}>Our Marketplace, Your Control</h2>

          <div style={{ display: "inline-flex", background: "#111428", padding: "4px", borderRadius: "30px", marginBottom: "50px", border: "1px solid rgba(255,255,255,0.05)" }}>
            {["Sell tokens", "Buy Tokens", "Compliance"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "12px 36px",
                  borderRadius: "24px",
                  border: "none",
                  background: (activeTab === tab || tab === "Sell tokens") ? "#8B5CF6" : "transparent",
                  color: (activeTab === tab || tab === "Sell tokens") ? "white" : "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s"
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "left" }}>
            {[
              { title: "Price compliance", desc: "Tokens are listed within ±15% of the latest DLD valuation, and we ensure they stay within this range." },
              { title: "Lock-in period", desc: "Tokens can only be listed after a 3-month lock-in period from the property’s original purchase date." },
              { title: "Listing process", desc: "Once the price and lock-in conditions are met, sellers can list the tokens they wish to sell." },
              { title: "Token listing", desc: "Sellers have the flexibility to list their tokens at any time and at different prices." },
              { title: "Market visibility", desc: "The tokens listed for sale are visible only to approved buyers in the Marketplace." }
            ].map((item, index) => (
              <div key={index} style={{ background: "#0B0F19", borderRadius: "24px", padding: "40px", display: "flex", flexDirection: "column", gap: "16px", minHeight: "220px", border: "1px solid rgba(255,255,255,0.02)" }}>
                <h4 style={{ fontSize: "22px", fontWeight: "700", color: "white" }}>{item.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* REUSED COMPONENTS */}
      <Testimonials />
      <Faq />

      {/* 10. HANDBOOK BANNER */}
      {/* <section style={{ padding: "80px 0 120px" }}>
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
      </section> */}

      <Footer />
    </div>
  );
};

export default TokenizedHomes;
