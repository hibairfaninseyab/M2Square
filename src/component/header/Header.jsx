import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import flag from "../../assets/flag-for-saudi-arabia.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const leftSidebar = [
    { text: "Home", link: "/home" },
    { text: "Knowledge Hub", link: "#" },
    { text: "Golden Visa", link: "#" },
    { text: "One - for agents", link: "#" },
    { text: "Contact Us", link: "#" }
  ];

  const leftSubSidebar = [
    { text: "Careers", link: "#" },
    { text: "Terms & Conditions", link: "#" },
    { text: "Privacy Statements", link: "#" },
    { text: "Cookie Policy", link: "#" }
  ];

  const cardItems = [
    {
      title: "Home Financing",
      subtitle: "M2 Square Mortgage",
      bgClass: "bg-img",
      arrowBg: "#28C76F",
      link: "#"
    },
    {
      title: "Fractional Ownership",
      subtitle: "M2 Square Blocks",
      bgClass: "",
      arrowBg: "#00CFE8",
      link: "#"
    },
    {
      title: "Tokenized Investments",
      subtitle: "M2 Square Mint",
      bgClass: "",
      arrowBg: "#7367F0",
      link: "/tokenized-homes"
    },
    {
      title: "Buy, sell, rent manage",
      subtitle: "M2 Square",
      bgClass: "",
      arrowBg: "#10162A",
      link: "#"
    }
  ];

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header py-3 bg-white shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">

        {/* Logo */}
        <div className="logo me-3">
          <img src={logo} alt="M2 Square Logo" className="logo-image" style={{ maxHeight: "50px" }} />
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="d-lg-none btn border-0 btn-blank p-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <nav
          className={`nav-menu d-flex flex-column flex-lg-row align-items-lg-center gap-3 ${menuOpen ? "d-flex" : "d-none d-lg-flex"}`}
        >
          <div className="nav-item px-3 py-2">Explore <span className="arrow"></span></div>
          <div className="nav-item px-3 py-2">Investor Hub <span className="arrow"></span></div>
          <div
            ref={dropdownRef}
            className={`nav-item px-3 py-2 ${dropdownOpen ? "active" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ position: "relative" }}
          >
            Menu <span className="arrow"></span>

            <div className={`dropdown-mega-menu ${dropdownOpen ? "show" : ""}`}>
              <div className="mega-menu-content">

                {/* Left Sidebar */}
                <div className="mega-menu-sidebar">
                  <ul className="sidebar-list">
                    {leftSidebar.map((item, index) => (
                      <li key={index} className={`sidebar-item ${index === 0 ? "active" : ""}`}>
                        <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="sidebar-sublist">
                    {leftSubSidebar.map((item, index) => (
                      <li key={index} className="sublist-item">
                        <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Grid Content */}
                <div className="mega-menu-grid">
                  {cardItems.map((card, index) => (
                    <Link to={card.link} key={index} style={{ textDecoration: 'none', color: 'inherit', gridColumn: card.bgClass ? 'span 2' : 'span 1' }}>
                      <div className={`mega-card ${card.bgClass}`} style={{ height: '100%' }}>
                        <h5>{card.title}</h5>
                        <p>{card.subtitle}</p>
                        <button className="card-link-circle" style={{ backgroundColor: card.arrowBg }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>

              {/* Footer list social */}
              <div className="mega-menu-footer">
                <span>Follow us on:</span>
                <div className="social-icons-strip">
                  <div className="social-icon-box"><i className="fa-brands fa-facebook-f"></i></div>
                  <div className="social-icon-box"><i className="fa-brands fa-instagram"></i></div>
                  <div className="social-icon-box"><i className="fa-brands fa-linkedin-in"></i></div>
                  <div className="social-icon-box"><i className="fa-brands fa-x-twitter"></i></div>
                  <div className="social-icon-box"><i className="fa-brands fa-tiktok"></i></div>
                  <div className="social-icon-box"><i className="fa-brands fa-youtube"></i></div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="header-actions d-flex align-items-center gap-3 mt-3 mt-lg-0">
          <div className="flag-circle">
            <img src={flag} alt="Language" className="flag-image" style={{ width: "30px", height: "30px" }} />
          </div>
          <button className="btn btn-success d-flex align-items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;