import React from "react";
import "./Hero.css";
import mobiles from "../../assets/mobile.svg";
import background from "../../assets/hero-bg.svg";
import applestore from "../../assets/apple-store.svg";
import googleplay from "../../assets/google-play.svg";
import step1 from "../../assets/step1.svg";
import step2 from "../../assets/step2.svg";
import step3 from "../../assets/step3.svg";
import step4 from "../../assets/step4.svg";
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
import makeMoney from "../../assets/make-money.mp4";
import client1 from "../../assets/clients/img1.svg";
import client2 from "../../assets/clients/img2.svg";
import client3 from "../../assets/clients/img3.svg";
import client4 from "../../assets/clients/img4.svg";
import readyToInvest from "../../assets/ready-to-invest.svg";
import "./OfferBar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Testimonials from "../testimonials/Testimonials";

const offers = [
  {
    color: "rgba(177, 0, 0, 0.10)",
    outline: "#B20000",
    text: "Iftar and Suhoor offer",
    svg: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.25V11.25C3 13.7248 3 14.9623 3.76885 15.7312C4.53769 16.5 5.77513 16.5 8.25 16.5H9.75C12.2249 16.5 13.4623 16.5 14.2312 15.7312C15 14.9623 15 13.7248 15 11.25V8.25" stroke="#B20000" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.25 6.75C2.25 6.18923 2.25 5.90885 2.40072 5.7C2.49946 5.56318 2.64148 5.44957 2.8125 5.37058C3.07356 5.25 3.42403 5.25 4.125 5.25H13.875C14.5759 5.25 14.9264 5.25 15.1875 5.37058C15.3585 5.44957 15.5005 5.56318 15.5992 5.7C15.75 5.90885 15.75 6.18923 15.75 6.75C15.75 7.31077 15.75 7.59113 15.5992 7.8C15.5005 7.9368 15.3585 8.05043 15.1875 8.1294C14.9264 8.25 14.5759 8.25 13.875 8.25H4.125C3.42403 8.25 3.07356 8.25 2.8125 8.1294C2.64148 8.05043 2.49946 7.9368 2.40072 7.8C2.25 7.59113 2.25 7.31077 2.25 6.75Z" stroke="#B20000" stroke-linejoin="round" />
      <path d="M4.5 2.83928C4.5 2.09962 5.09962 1.5 5.83928 1.5H6.10715C7.70483 1.5 9 2.79517 9 4.39285V5.25H6.91072C5.57931 5.25 4.5 4.17068 4.5 2.83928Z" stroke="#B20000" stroke-linejoin="round" />
      <path d="M13.5 2.83928C13.5 2.09962 12.9004 1.5 12.1607 1.5H11.8928C10.2952 1.5 9 2.79517 9 4.39285V5.25H11.0893C12.4207 5.25 13.5 4.17068 13.5 2.83928Z" stroke="#B20000" stroke-linejoin="round" />
      <path d="M9 8.25V16.5" stroke="#B20000" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    )
  },
  {
    color: "rgba(20, 27, 52, 0.10)",
    outline: "#141B34",
    text: "Save up to 5%",
    svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#141B34" fill-opacity="0.1" />
      <path d="M8.76878 17.7121C9.21205 17.7121 9.43369 17.7121 9.6356 17.787C9.66365 17.7973 9.69129 17.8088 9.71848 17.8213C9.91423 17.9111 10.0709 18.0678 10.3844 18.3812C11.1058 19.1027 11.4665 19.4634 11.9104 19.4966C11.97 19.5011 12.03 19.5011 12.0896 19.4966C12.5335 19.4634 12.8942 19.1027 13.6156 18.3812C13.9291 18.0678 14.0857 17.9111 14.2815 17.8213C14.3087 17.8088 14.3363 17.7973 14.3644 17.787C14.5664 17.7121 14.788 17.7121 15.2312 17.7121H15.313C16.4439 17.7121 17.0094 17.7121 17.3607 17.3607C17.7121 17.0094 17.7121 16.4439 17.7121 15.313V15.2312C17.7121 14.788 17.7121 14.5664 17.787 14.3644C17.7973 14.3363 17.8088 14.3087 17.8213 14.2815C17.9111 14.0857 18.0678 13.9291 18.3812 13.6156C19.1027 12.8942 19.4634 12.5335 19.4966 12.0896C19.5011 12.03 19.5011 11.97 19.4966 11.9104C19.4634 11.4665 19.1027 11.1058 18.3812 10.3844C18.0678 10.0709 17.9111 9.91423 17.8213 9.71848C17.8088 9.69129 17.7973 9.66365 17.787 9.6356C17.7121 9.43369 17.7121 9.21205 17.7121 8.76878V8.68702C17.7121 7.55609 17.7121 6.99062 17.3607 6.63929C17.0094 6.28795 16.4439 6.28796 15.313 6.28796H15.2312C14.788 6.28796 14.5664 6.28795 14.3644 6.21304C14.3363 6.20263 14.3087 6.19118 14.2815 6.17871C14.0857 6.08891 13.9291 5.93219 13.6156 5.61875C12.8942 4.89733 12.5335 4.53661 12.0896 4.50335C12.03 4.49888 11.97 4.49888 11.9104 4.50335C11.4665 4.53661 11.1058 4.89733 10.3844 5.61875C10.0709 5.93219 9.91423 6.08891 9.71848 6.17871C9.69129 6.19118 9.66365 6.20263 9.6356 6.21304C9.43369 6.28795 9.21205 6.28796 8.76878 6.28796H8.68702C7.55609 6.28796 6.99062 6.28795 6.63929 6.63929C6.28795 6.99062 6.28796 7.55609 6.28796 8.68702V8.76878C6.28796 9.21205 6.28795 9.43369 6.21304 9.6356C6.20263 9.66365 6.19118 9.69129 6.17871 9.71848C6.08891 9.91423 5.93219 10.0709 5.61875 10.3844C4.89733 11.1058 4.53661 11.4665 4.50335 11.9104C4.49888 11.97 4.49888 12.03 4.50335 12.0896C4.53661 12.5335 4.89733 12.8942 5.61875 13.6156C5.93219 13.9291 6.08891 14.0857 6.17871 14.2815C6.19118 14.3087 6.20263 14.3363 6.21304 14.3644C6.28795 14.5664 6.28796 14.788 6.28796 15.2312V15.313C6.28796 16.4439 6.28795 17.0094 6.63929 17.3607C6.99062 17.7121 7.55609 17.7121 8.68702 17.7121H8.76878Z" stroke="#141B34" />
      <path d="M14.25 9.75L9.75 14.25" stroke="#141B34" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.25 14.25H14.2419M9.75807 9.75H9.75" stroke="#141B34" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    )
  },
  {
    color: "rgba(116, 25, 107, 0.10)",
    outline: "#74196B",
    text: "1 investment = 1 meal",
    svg: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.80802 14.9758C5.69206 13.3935 1.5 9.7761 1.5 6.52083C1.5 4.36922 3.07894 2.625 5.25 2.625C6.375 2.625 7.5 3 9 4.5C10.5 3 11.625 2.625 12.75 2.625C14.921 2.625 16.5 4.36922 16.5 6.52083C16.5 9.7761 12.308 13.3935 10.192 14.9758C9.47993 15.5082 8.52007 15.5082 7.80802 14.9758Z" stroke="#74196B" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    )
  },
  // Repeat as needed
];

const stats = [
  {
    title: "Expected Annual ROI",
    value: "8-10%",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15V19" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 9V19" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 22H2" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 13V19" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.60009 8.79993C5.23521 8.31419 4.6543 8 4 8C2.89543 8 2 8.89543 2 10C2 11.1046 2.89543 12 4 12C5.10457 12 6 11.1046 6 10C6 9.54973 5.8512 9.13421 5.60009 8.79993ZM5.60009 8.79993L10.3999 5.20007M10.3999 5.20007C10.7648 5.68581 11.3457 6 12 6C12.783 6 13.4609 5.55006 13.7892 4.89462M10.3999 5.20007C10.1488 4.86579 10 4.45027 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 4.32158 13.9241 4.62543 13.7892 4.89462M13.7892 4.89462L18.2108 7.10538M18.2108 7.10538C18.0759 7.37457 18 7.67842 18 8C18 9.10457 18.8954 10 20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C19.217 6 18.5391 6.44994 18.2108 7.10538Z" stroke="#0F7B6C" stroke-width="1.5" />
      </svg>

    ),
  },
  {
    title: "AED Rent Disbursed",
    value: "50Mn+",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15V19" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 9V19" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 22H2" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 13V19" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.60009 8.79993C5.23521 8.31419 4.6543 8 4 8C2.89543 8 2 8.89543 2 10C2 11.1046 2.89543 12 4 12C5.10457 12 6 11.1046 6 10C6 9.54973 5.8512 9.13421 5.60009 8.79993ZM5.60009 8.79993L10.3999 5.20007M10.3999 5.20007C10.7648 5.68581 11.3457 6 12 6C12.783 6 13.4609 5.55006 13.7892 4.89462M10.3999 5.20007C10.1488 4.86579 10 4.45027 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 4.32158 13.9241 4.62543 13.7892 4.89462M13.7892 4.89462L18.2108 7.10538M18.2108 7.10538C18.0759 7.37457 18 7.67842 18 8C18 9.10457 18.8954 10 20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C19.217 6 18.5391 6.44994 18.2108 7.10538Z" stroke="#0F7B6C" stroke-width="1.5" />
      </svg>

    ),
  },
  {
    title: "AED to get Started",
    value: "2,000",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4998 12.001C14.4998 13.3817 13.3805 14.501 11.9998 14.501C10.6191 14.501 9.49982 13.3817 9.49982 12.001C9.49982 10.6203 10.6191 9.50098 11.9998 9.50098C13.3805 9.50098 14.4998 10.6203 14.4998 12.001Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 5.00098C18.4794 5.00098 20.1903 5.38518 21.1329 5.6773C21.6756 5.84549 22 6.35987 22 6.92803V16.6833C22 17.7984 20.7719 18.6374 19.6762 18.4305C18.7361 18.253 17.5107 18.1104 16 18.1104C11.2491 18.1104 10.1096 19.9161 3.1448 18.3802C2.47265 18.232 2 17.6275 2 16.9392V6.92214C2 5.94628 2.92079 5.23464 3.87798 5.42458C10.1967 6.67844 11.4209 5.00098 16 5.00098Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 9.00098C3.95133 9.00098 5.70483 7.40605 5.92901 5.75514M18.5005 5.50098C18.5005 7.54062 20.2655 9.46997 22 9.46997M22 15.001C20.1009 15.001 18.2601 16.3112 18.102 18.0993M6.00049 18.4971C6.00049 16.2879 4.20963 14.4971 2.00049 14.4971" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ),
  },
  {
    title: "Nationalities Eligible",
    value: "8-10%",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>


    ),
  },
];
const logos = [
 logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12
];
  const cards = [
    {
      title: "Regulated and Secure",
      text: "All investments on M2 Square operate under the Dubai Financial Services Authority (DFSA) framework. This ensures that client funds are segregated and protected and that every property investment is held in a special purpose vehicle (SPV) -- to safeguard ownership and reduce risk.",
      img:client1,
    },
    {
      title: "Invest From Anywhere",
      text: "Whether you’re in Dubai, New York, London, or Singapore, you can become a property investor in minutes. PRYPCO Blocks makes it possible to browse, invest, and manage your portfolio entirely online — no travel, no paperwork, and no hassle. Real estate investing has never been this seamless or borderless.",
      img:client2,
    },
    {
      title: "Value Investment",
      text: "We analyze the Dubai real estate market to identify properties with strong long-term fundamentals, including location, yield potential, and growth trajectory. By focusing on value at entry, investors can build portfolios that balance steady income with future appreciation, reflecting a measured and research-driven investment strategy.",
      img:client3,
    },
    {
      title: "Earn Rental Income",
      text: "Join thousands of investors who’ve already earned over AED 600,000 in rental payouts through PRYPCO Blocks. Every property generates steady monthly income, helping you grow your wealth effortlessly while your investment appreciates over time — all without the headaches of traditional property management.",
      img:client4,
    },
  ];

   const properties = [
    {
      img: "https://placehold.co/516x560",
      status1: "Rented",
      status2: "Sold Out",
      location1: "Downtown",
      type1: "Townhouse",
      title: "3 Bedroom Townhouse",
      price: "AED 1,850,000",
      valuation: "AED 2,050,000",
      roi: "8.75%",
    },
    {
      img: "https://placehold.co/516x560",
      status1: "Ready",
      status2: "Available",
      location1: "Jumeirah Village Circle",
      type1: "Apartment",
      title: "One Bedroom Apartment",
      price: "AED 1,144,000",
      valuation: "AED 1,229,896",
      roi: "10.64%",
    },
    {
      img: "https://placehold.co/516x560",
      status1: "Ready",
      status2: "Available",
      location1: "Business Bay",
      type1: "Apartment",
      title: "Studio Apartment",
      price: "AED 950,000",
      valuation: "AED 1,020,000",
      roi: "9.5%",
    },
  ];
const Hero = () => {
  return (
    <>

      <div className="home">
        {/* Background circles */}
        <img src={background} alt="Background" className="hero-bg" />

        <div className="offer-bar">
          <div className="offer-list">
            {/* Repeat offers array twice for smooth loop */}
            {offers.concat(offers).map((offer, index) => (
              <div key={index} className="offer-item">
                <div
                  className="offer-icon"
                  style={{ backgroundColor: offer.color }}
                >
                  {offer.svg}
                </div>
                <div className="offer-text">{offer.text}</div>
              </div>
            ))}
          </div>
        </div>
        <section className="hero">



          <div className="hero-container">

            {/* LEFT CONTENT */}
            <div className="hero-content">

              <h1 className="hero-title">
                Small <span>shares.</span><br />
                Big <span>Barakah.</span>
              </h1>

              <p className="hero-desc">
                Invest in Dubai's best rental properties, starting from just AED 2,000.
                Save up to 5% on your real estate investments this Ramadan.
              </p>

              <div className="hero-buttons flex gap-4 mt-10">
                {/* Google Play Button */}
                <a href="#" className="cursor-pointer">
                  <img src={googleplay} alt="Google Play" className="h-14 md:h-16" />
                </a>

                {/* App Store Button */}
                <a href="#" className="cursor-pointer">
                  <img src={applestore} alt="App Store" className="h-14 md:h-16" />
                </a>
              </div>

            </div>

            {/* RIGHT IMAGES */}
            <div className="hero-images">

              <img src={mobiles} alt="app" className="phone" />

            </div>

          </div>



        </section>






      </div>
      <div className="hero-stats py-5 card-container bg-white shadow-sm rounded-4 px-4">
        <div className="container">
          <div className="row justify-content-center g-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 p-3 text-center border rounded-4 shadow-sm">
                  {/* Title & Icon */}
                  <div className="row">
                    <div className="col">
                      <div className="d-flex justify-content-between gap-3 align-items-start mb-3">
                        <div className="text-start fw-sm">{stat.title}</div>
                        <div className="d-flex justify-content-center align-items-center rounded-3" style={{ width: '44px', height: '44px', backgroundColor: '#E6F4F1' }}>
                          {stat.icon}
                        </div>
                      </div>
                      </div>
                      
                        <div className="col">
                          <div className="d-flex align-items-start" style={{
                            color: 'var(--Primary, #0F7B6C)',
                            fontSize: '2.5rem',
                            fontFamily: 'Impact, sans-serif',
                            fontWeight: '400',
                            wordWrap: 'break-word'
                          }}>
                            {stat.value}
                          </div>
                        </div>
                    
                    </div>


                    {/* Value */}

                  </div>
                </div>
      ))}
              </div>
  </div>
        </div>

       <div className="steps-conatiner container-fluid px-3 px-lg-5 bg-light py-5 position-relative overflow-hidden">

  {/* Section Title */}
  <div className="text-center mb-5 px-lg-5">
    <h1 className="fw-medium display-5">
      Your <span className="text-success text-uppercase">digital gateway</span> to fractional ownership in 
      <span className="text-success text-uppercase"> Dubai’s real estate</span> market.
    </h1>
  </div>

      {/* Step 01 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="d-flex flex-column text-start gap-3">
 <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
          Step 01
        </span>            <h2 className="fw-bold display-6">Browse</h2>
            <p className="text-secondary fs-5">
              Explore curated, income-generating Dubai properties verified and handpicked by our leading experts.
            </p>
            <button className="btn text-success d-flex align-items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.9523 3.05293C5.1303 0.707361 21.5135 6.4532 21.5 8.551C21.4847 10.9299 15.1019 11.6617 13.3328 12.1581C12.2689 12.4565 11.984 12.7625 11.7387 13.8781C10.6277 18.9305 10.0699 21.4435 8.7986 21.4996C6.7722 21.5892 0.826701 5.342 2.9523 3.05293Z" stroke="#0F7B6C" stroke-width="1.5"/>
            <path d="M12.5001 12.5L9.0001 9" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              Start Browsing
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <div className="rounded-4 d-flex justify-content-end" style={{ minHeight: "400px"}}>
            <img src={step1} className="img-fluid h-60" alt="Step 01 visual" />
          </div>
        </div>
      </div>

      {/* Step 02 */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="d-flex flex-column text-start gap-3">
 <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
          Step 02
        </span>            <h2 className="fw-bold display-6">Invest</h2>
            <p className="text-secondary fs-5">
              Build your investment portfolio with Blocks of properties, from only AED 2,000 on our crowdfunding fractional ownership platform.
            </p>
            <button className="btn text-success d-flex align-items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3H5C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7H18C18 6.07003 18 5.60504 17.8978 5.22354C17.6204 4.18827 16.8117 3.37962 15.7765 3.10222C15.395 3 14.93 3 14 3Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 5V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V13C21 10.1716 21 8.75736 20.1213 7.87868C19.2426 7 17.8284 7 15 7H7" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12H19C18.535 12 18.3025 12 18.1118 12.0511C17.5941 12.1898 17.1898 12.5941 17.0511 13.1118C17 13.3025 17 13.535 17 14C17 14.465 17 14.6975 17.0511 14.8882C17.1898 15.4059 17.5941 15.8102 18.1118 15.9489C18.3025 16 18.535 16 19 16H21" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              Invest Now
            </button>
          </div>
        </div>
        <div className="col-md-7 ">
          <div className="rounded-4 overflow-hidden" style={{ minHeight: "400px" }}>
            <img src={step2} className="img-fluid" alt="Step 02 visual" />
          </div>
        </div>
      </div>

      {/* Step 03 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="d-flex flex-column text-start gap-3">
 <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
          Step 03
        </span>            <h2 className="fw-bold display-6">Earn</h2>
            <p className="text-secondary fs-5">
              Build your investment portfolio with Blocks of properties, from only AED 2,000 on our crowdfunding fractional ownership platform.
            </p>
            <button className="btn text-success d-flex align-items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11L5.5 8.5C6.51706 7.48294 7.02558 6.97442 7.63723 6.8616C7.87705 6.81737 8.12295 6.81737 8.36277 6.8616C8.97442 6.97442 9.48295 7.48295 10.5 8.5C11.5171 9.51705 12.0256 10.0256 12.6372 10.1384C12.8771 10.1826 13.1229 10.1826 13.3628 10.1384C13.9744 10.0256 14.4829 9.51705 15.5 8.5L21 3" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 15V21M9 13V21M15 16V21M21 9V21" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              Start Earning
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <div className="rounded-4 overflow-hidden" style={{ minHeight: "400px" }}>
            <img src={step3} className="img-fluid" alt="Step 03 visual" />
          </div>
        </div>
      </div>
       {/* Step 04 */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="d-flex flex-column text-start gap-3">
 <span className="px-4 py-2 bg-warning bg-opacity-10 rounded-pill fw-semibold text-warning align-self-start">
          Step 04
        </span>            <h2 className="fw-bold display-6">Manage</h2>
            <p className="text-secondary fs-5">
            You can choose to add, hold, or withdraw your investments after the lock-in period.
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
        <div className="col-md-7">
          <div className="rounded-4 overflow-hidden" style={{ minHeight: "400px" }}>
            <img src={step4} className="img-fluid" alt="Step 04 manage" />
          </div>
        </div>
      </div>
    </div>

    <section className="collaboration-section">
      <div className="container">

        <h3 className="text-center collaboration-title mb-5">
          In Collaboration with
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
      <section className="earn-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="earn-title">
            Make <span className="text-success">your money</span> work for you
          </h2>
          <p className="earn-subtitle">
            Here’s how you earn money on our platform
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
          <video
                className="img-fluid earn-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={makeMoney} type="video/mp4" />
              </video>

</div>
          {/* Accordion */}
          <div className="col-lg-6">

            <div className="accordion" id="earnAccordion">

              {/* Item 1 */}
              <div className="accordion-item earn-accordion">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button gap-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4998 12.001C14.4998 13.3817 13.3805 14.501 11.9998 14.501C10.6191 14.501 9.49982 13.3817 9.49982 12.001C9.49982 10.6203 10.6191 9.50098 11.9998 9.50098C13.3805 9.50098 14.4998 10.6203 14.4998 12.001Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 5.00098C18.4794 5.00098 20.1903 5.38518 21.1329 5.6773C21.6756 5.84549 22 6.35987 22 6.92803V16.6833C22 17.7984 20.7719 18.6374 19.6762 18.4305C18.7361 18.253 17.5107 18.1104 16 18.1104C11.2491 18.1104 10.1096 19.9161 3.1448 18.3802C2.47265 18.232 2 17.6275 2 16.9392V6.92214C2 5.94628 2.92079 5.23464 3.87798 5.42458C10.1967 6.67844 11.4209 5.00098 16 5.00098Z" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 9.00098C3.95133 9.00098 5.70483 7.40605 5.92901 5.75514M18.5005 5.50098C18.5005 7.54062 20.2655 9.46997 22 9.46997M22 15.001C20.1009 15.001 18.2601 16.3112 18.102 18.0993M6.00049 18.4971C6.00049 16.2879 4.20963 14.4971 2.00049 14.4971" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-center d-flex m-0">Rental Income</p>

                    
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#earnAccordion"
                >
                  <div className="accordion-body text-start">
                    Receive regular passive income every month as tenants pay
                    rent on the properties you’ve invested in.
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item earn-accordion">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed gap-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4V14C3 16.8284 3 18.2426 3.87868 19.1213C4.75736 20 6.17157 20 9 20H21" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 14L9.25 10.75C9.89405 10.1059 10.2161 9.78392 10.5927 9.67766C10.8591 9.60254 11.1409 9.60254 11.4073 9.67766C11.7839 9.78392 12.1059 10.1059 12.75 10.75C13.3941 11.3941 13.7161 11.7161 14.0927 11.8223C14.3591 11.8975 14.6409 11.8975 14.9073 11.8223C15.2839 11.7161 15.6059 11.3941 16.25 10.75L20 7" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className="text-center d-flex m-0"> Capital Appreciation</p>
                   
                  </button>
                </h2>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#earnAccordion"
                >
                  <div className="accordion-body text-start">
                    As property values increase over time, your investment
                    value grows, giving you long-term capital gains.
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item earn-accordion">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed gap-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.60007 13.5447V8.97114M7.60007 8.97114V3.42671C7.60007 2.60507 8.31572 2.00195 9.15459 2.00195C9.99346 2.00195 10.6655 2.60507 10.6655 3.42671L10.7336 8.49935M7.60007 8.97114C6.25503 10.165 4.78345 11.5468 4.58854 11.9332C3.68163 13.2853 3.75296 14.4971 5.29666 16.5675C6.2809 17.8876 7.4477 19.2328 7.52014 19.3027C8.32096 20.0757 8.10396 21.1213 8.10396 21.998M10.7336 8.49935V11.0292M10.7336 8.49935C11.4501 7.65738 13.3752 7.95654 13.7789 9.67674M13.7789 9.67674C13.7806 9.68398 13.7823 9.69124 13.7839 9.69853C13.7904 9.72739 13.7957 9.75648 13.8 9.78571M13.7789 9.67674C13.7831 9.71179 13.7901 9.74812 13.8 9.78571M13.7789 9.67674C14.007 8.49935 16.7374 8.77004 16.8637 10.8787V12.0247M13.8154 11.0252V10.0223C13.8154 9.94324 13.8114 9.86393 13.8 9.78571M17.8439 21.9934V20.9543C17.883 19.7277 18.9213 19.3567 19.5381 18.0168C20.1618 16.7845 19.973 13.655 19.973 12.1564C20 11.801 19.7572 10.7666 18.6313 10.3753C18.2775 10.2075 17.482 9.96641 16.7971 10.4489" stroke="#0F7B6C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
<p className="text-center d-flex m-0">  Flexibility at your fingertips</p>
                  
                  </button>
                </h2>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#earnAccordion"
                >
                  <div className="accordion-body text-start">
                    Manage your investments easily from the platform and
                    track earnings anytime.
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>

      <section className="py-5 bg-light">
      {/* Heading */}
      <div className="text-center mb-5 px-3">
        <h1 className="fw-bold" style={{ fontSize: "2.5rem", lineHeight: 1.2 }}>
          Here’s why{" "}
          <span className="text-success">50,000+</span>{" "}
          others chose M2 Square
        </h1>
      </div>

      {/* Cards */}
      <div className="container">
        <div className="row justify-content-center g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 d-flex">
              <div className="card shadow-sm flex-fill">
                <img
                  src={card.img}
                  className="card-img-top rounded-top"
                  alt={card.title}
                />
                <div className="card-body d-flex flex-column text-start gap-2">
                  <h5 className="card-title fw-semibold">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          <div className="bg-dark rounded-pill" style={{ width: 35, height: 10 }}></div>
          <div className="bg-secondary rounded-circle" style={{ width: 10, height: 10 }}></div>
          <div className="bg-secondary rounded-circle" style={{ width: 10, height: 10 }}></div>
          <div className="bg-secondary rounded-circle" style={{ width: 10, height: 10 }}></div>
        </div>
      </div>
    </section>
     <section className="bg-light py-5">
      <div className="container text-center mb-4">
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          Our <span className="text-success">Properties</span>
        </h1>
        <p className="mt-3" style={{ fontSize: "1.25rem" }}>
          Swipe to see high-potential properties hand-picked by our experts.
        </p>
      </div>

      {/* Properties Carousel */}
      <div
        id="propertiesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {properties.map((property, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex justify-content-center flex-wrap gap-4 px-3">
                <div className="card shadow" style={{ borderRadius: "25px" }}>
                  <img
                    src={property.img}
                    className="card-img-top"
                    alt={property.title}
                    style={{ borderRadius: "25px 25px 0 0" }}
                  />
                  <div className="card-body">
                    {/* Status Pills */}
                    <div className="d-flex gap-2 mb-2 flex-wrap">
                      <span className="badge bg-dark">{property.status1}</span>
                      <span className="badge bg-warning text-dark">
                        {property.status2}
                      </span>
                    </div>

                    {/* Location & Type */}
                    <div className="d-flex gap-3 mb-2 flex-wrap align-items-center">
                      <div className="d-flex align-items-center gap-1">
                        <div className="bg-white rounded-circle" style={{width:18,height:18}} />
                        <span className="text-muted">{property.location1}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <div className="bg-white rounded-circle" style={{width:18,height:18}} />
                        <span className="text-muted">{property.type1}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h5 className="fw-semibold">{property.title}</h5>

                    {/* Price / Valuation / ROI */}
                    <div className="d-flex gap-4 mt-3 flex-wrap">
                      <div>
                        <small className="text-muted d-block">Listing Price</small>
                        <strong>{property.price}</strong>
                      </div>
                      <div>
                        <small className="text-muted d-block">Current Valuation</small>
                        <strong>{property.valuation}</strong>
                      </div>
                      <div>
                        <small className="text-muted d-block">Annual ROI</small>
                        <strong>{property.roi}</strong>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-3">
                      <button className="btn btn-outline-warning w-100">
                        Log in to view details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#propertiesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#propertiesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Dots */}
        <div className="carousel-indicators mt-3">
          {properties.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#propertiesCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-light py-5">
      <div className="container text-center mb-4 rounded-4" style={{ background: 'linear-gradient(134deg, #0F7B6C 0%, #13FBDD 100%)' }}>
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-start gap-3 p-5">
           <h1 className="fw-bold text-white text-uppercase text-start" style={{ fontSize: "3rem" }}>
          Download M2 Square or Sign up to View Available Properties 
        </h1>
        <button className="btn btn-success btn-lg mt-4">
          Get Started Now
        </button>
          </div>
          <div className="col">
            <img src={readyToInvest} alt="Ready to invest" className="img-fluid" />
          </div>
        </div>
       
      </div>
    </section>
    <Testimonials />
      </>
      );
};

      export default Hero;