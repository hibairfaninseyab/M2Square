import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">

      {/* Newsletter Section */}
      <div className="newsletter-box">

        <div className="newsletter-left">
          <h2>Subscribe to our Newsletter</h2>
          <p>Get all our latest updates straight to your inbox.</p>
        </div>

        <div className="newsletter-right">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="example@email.com"
          />

          <button>Submit</button>
        </div>

      </div>

      {/* Footer Top */}
      <div className="footer-top">

        <div className="logo">
          <h1>M2 Square</h1>
        </div>

        <div className="social-section">
          <span>Follow us on:</span>

          <div className="social-icons">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>

      </div>

      <hr />

      {/* Footer Links */}
      <div className="footer-links">

        <div className="column">
          <h4>Home</h4>
          <a>Careers</a>
          <a>Brand assets</a>
          <a>Contact Us</a>
          <a>Cookie Policy</a>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
        </div>

        <div className="column">
          <h4>M2 Square</h4>
          <a>ROI calculator</a>
          <a>Properties</a>
          <a>Risk Warnings</a>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Cookie Policy</a>
        </div>

        <div className="column">
          <h4>M2 Square Mint</h4>
          <a>ROI calculator</a>
          <a>Properties</a>
          <a>Sell Your Property</a>
          <a>Media</a>
          <a>The Team</a>
          <a>Risk Warnings</a>
          <a>Terms & Conditions</a>
        </div>

        <div className="column">
          <h4>Knowledge Hub</h4>
          <a>Blog & Articles</a>
          <a>FAQs</a>
        </div>

        <div className="column">
          <h4>M2 Square Mortgage</h4>
          <a>Mortgage Calculator</a>
          <a>Instant Pre-Approval</a>
        </div>

        <div className="column">
          <h4>M2 Square Golden Visa</h4>
          <a>Check eligibility</a>
        </div>

        <div className="column">
          <h4>Policies</h4>
          <a>Privacy Statement</a>
          <a>Third Party Providers</a>
          <a>Broker-Dealer disclosure</a>
          <a>Virtual Assets standards</a>
          <a>Anti Bribery and Corruption</a>
          <a>AML Standards</a>
          <a>Complaints Handling Policy</a>
          <a>Whistleblowing Policy</a>
        </div>

      </div>

      {/* Disclaimer */}
      <div className="disclaimer">
        Hello! M2 Square Ltd is registered in Saudi International Financial
        Centre (7381) and regulated by Saudi Central Bank (SAMA)
        . Our registered office address is Unit 614, Level 6, Tower A,
        Park Towers, DIFC, Saudi Arabia. By using M2 Square you agree to the
        terms & conditions, Cookie Policy and Privacy Policy. Risk Warning -
        Investment in property carries risk and you may not receive the
        anticipated returns.
      </div>

      <hr />

      <div className="copyright">
        © 2026 PRYPCO Blocks All rights reserved.
      </div>

    </div>
  );
};

export default Footer;