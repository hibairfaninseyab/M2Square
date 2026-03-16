import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="bg-light position-relative" style={{ minHeight: "769px", padding: "100px 0" }}>
      {/* Section Heading */}
      <div className="text-center mb-5">
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
      <div className="d-flex justify-content-center gap-4 mb-5">
        {avatars.map((user, idx) => (
          <div key={idx} className="d-flex flex-column align-items-center gap-1">
            <div
              className="d-flex justify-content-center align-items-center rounded-circle"
              style={{
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
                className="rounded-circle"
                style={{ width: "88px", height: "88px" }}
              />
            </div>
            <div style={{ fontSize: "20px", fontWeight: 500 }}>{user.handle}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="d-flex flex-column"
            style={{ width: "350px", borderRadius: "25px", background: "white", padding: "20px" }}
          >
            {/* Decorative Shapes */}
            <div className="position-relative mb-3" style={{ width: "80px", height: "80px" }}>
              <div
                style={{
                  width: "40px",
                  height: "70px",
                  background: "#FFF5E0",
                  position: "absolute",
                  top: "5px",
                  left: 0,
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
                }}
              />
            </div>

            {/* Star Ratings */}
            <div className="d-flex gap-2 mb-3">
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
            <p style={{ fontSize: "16px", lineHeight: "24px", color: "#000" }}>
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="d-flex align-items-center gap-3 mt-3">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  background: "#E6F4F1",
                  borderRadius: "20px",
                }}
              >
                {/* Custom icon */}
                <div className="position-relative" style={{ width: "20px", height: "20px" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      top: "2px",
                      left: "5px",
                      outline: "1.5px #0F7B6C solid",
                      outlineOffset: "-0.75px",
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "6px",
                      position: "absolute",
                      top: "10px",
                      left: "4px",
                      outline: "1.5px #0F7B6C solid",
                      outlineOffset: "-0.75px",
                    }}
                  />
                </div>
              </div>
              <div style={{ fontSize: "18px", fontWeight: 500, lineHeight: "26px" }}>
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