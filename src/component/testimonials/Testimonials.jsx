import React from "react";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Participate in interactive webinars and workshops tailored to various skill levels. Whether you’re a beginner or a seasoned investor, our program adapts to your needs, promoting continuous learning and growth.",
      name: "Rajiv Kapoor",
    },
    {
      quote:
        "A smart and accessible way to invest in real estate without heavy upfront costs. The platform makes investment easy and transparent with regular updates. Perfect for diversifying your portfolio with real estate exposure.",
      name: "Vedhavyasan Kr",
    },
    {
      quote:
        "Harness the power of technology to streamline your investment journey, offering insights and analytics to make informed decisions. Ideal for both novice and seasoned investors looking to explore new opportunities in the real estate market.",
      name: "Aria Patel",
    },
  ];

  const avatars = [
    { img: user1, handle: "@ Oona" },
    { img: user2, handle: "@ Joe" },
    { img: user3, handle: "@ Taha" },
  ];

  return (
    <div style={{ backgroundColor: "#F9FAFB", position: "relative", minHeight: "769px", padding: "100px 0" }}>
      {/* Section Heading */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span style={{ color: "#111827", fontSize: "48px", fontFamily: "Montserrat", fontWeight: 600 }}>
          What{" "}
        </span>
        <span style={{ color: "#0F7B6C", fontSize: "48px", fontFamily: "Montserrat", fontWeight: 600 }}>
          Clients
        </span>
        <span style={{ color: "#111827", fontSize: "48px", fontFamily: "Montserrat", fontWeight: 600 }}>
          {" "}Say About Us
        </span>
      </div>

      {/* Avatars / Handles */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
        {avatars.map((user, idx) => (
          <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                padding: "6px",
                outline: "3px #D6A84C solid",
                outlineOffset: "-3px",
              }}
            >
              <img
                src={user.img}
                alt={user.handle}
                style={{ width: "88px", height: "88px", borderRadius: "50%" }}
              />
            </div>
            <div style={{ fontSize: "20px", fontWeight: 500, fontFamily: "Montserrat" }}>{user.handle}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            style={{ display: "flex", flexDirection: "column", width: "350px", borderRadius: "25px", background: "white", padding: "24px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
          >
            {/* Decorative Shapes */}
            <div style={{ width: "80px", height: "80px", position: "relative", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "70px",
                  background: "#FFF5E0",
                  position: "absolute",
                  top: "5px",
                  left: 0,
                  borderRadius: "8px 0 0 8px"
                }}
              />
              <div
                style={{
                  width: "40px",
                  height: "70px",
                  background: "#FFF5E0",
                  position: "absolute",
                  top: "5px",
                  left: "40px",
                  borderRadius: "0 8px 8px 0"
                }}
              />
            </div>

            {/* Star Ratings */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{ width: "20px", height: "20px", position: "relative" }}
                >
                  <div
                    style={{
                      width: "17px",
                      height: "17px",
                      background: "#D6A84C",
                      position: "absolute",
                      top: "2px",
                      left: "2px",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Quote */}
            <p style={{ fontSize: "16px", lineHeight: "24px", color: "#4B5563", fontFamily: "Montserrat", flex: 1 }}>
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  background: "#E6F4F1",
                  borderRadius: "50%",
                }}
              >
                {/* Custom icon */}
                <div style={{ width: "20px", height: "20px", position: "relative" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      top: "2px",
                      left: "6px",
                      outline: "1.5px #0F7B6C solid",
                      outlineOffset: "-0.75px",
                      borderRadius: "50%"
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "6px",
                      position: "absolute",
                      top: "12px",
                      left: "4px",
                      outline: "1.5px #0F7B6C solid",
                      outlineOffset: "-0.75px",
                      borderRadius: "3px"
                    }}
                  />
                </div>
              </div>
              <div style={{ fontSize: "18px", fontWeight: 600, fontFamily: "Montserrat", color: "#111827" }}>
                {testimonial.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;