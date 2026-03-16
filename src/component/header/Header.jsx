import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import flag from "../../assets/flag-for-saudi-arabia.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="nav-item px-3 py-2">Menu <span className="arrow"></span></div>
        </nav>

        {/* Right Actions */}
        <div className="header-actions d-flex align-items-center gap-3 mt-3 mt-lg-0">
          <div className="flag-circle">
            <img src={flag} alt="Language" className="flag-image" style={{ width: "30px", height: "30px" }} />
          </div>
          <button className="btn btn-success d-flex align-items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;