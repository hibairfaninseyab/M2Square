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
    <div className="bg-light position-relative" style={{ minHeight: "769px", padding: "20px 0" }}>
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
            

            {/* Star Ratings */}
            <div className="d-flex gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{ width: "20px", height: "20px", position: "relative" }}
                >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91592 5.8594C11.2881 3.3978 11.9742 2.16699 13 2.16699C14.0258 2.16699 14.7119 3.39779 16.084 5.85939L16.439 6.49624C16.829 7.19575 17.0239 7.54552 17.328 7.77629C17.632 8.00706 18.0105 8.09272 18.7678 8.26405L19.4572 8.42002C22.1218 9.02293 23.4542 9.32438 23.7712 10.3437C24.0881 11.363 23.1799 12.4252 21.3632 14.5494L20.8933 15.099C20.3771 15.7026 20.1189 16.0044 20.0028 16.3778C19.8867 16.7513 19.9258 17.1539 20.0037 17.9594L20.0748 18.6926C20.3494 21.5268 20.4868 22.9439 19.657 23.5739C18.827 24.2038 17.5796 23.6295 15.0847 22.4808L14.4392 22.1835C13.7303 21.8571 13.3758 21.6939 13 21.6939C12.6242 21.6939 12.2697 21.8571 11.5608 22.1835L10.9153 22.4808C8.4204 23.6295 7.17295 24.2038 6.34308 23.5739C5.51321 22.9439 5.65054 21.5268 5.92518 18.6926L5.99623 17.9594C6.07428 17.1539 6.1133 16.7513 5.99718 16.3778C5.88107 16.0044 5.62297 15.7026 5.10675 15.099L4.63677 14.5494C2.82019 12.4252 1.91189 11.363 2.22887 10.3437C2.54585 9.32438 3.87818 9.02293 6.54283 8.42002L7.23221 8.26405C7.98942 8.09272 8.36802 8.00706 8.67202 7.77629C8.97601 7.54552 9.17099 7.19576 9.56093 6.49624L9.91592 5.8594Z" fill="#D6A84C"/>
</svg>

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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
               
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