import React from "react";
import "./Footer.css";
import facebook from "../../assets/icons/facebook.svg";
import x from "../../assets/icons/x.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/insta.svg";
import youtube from "../../assets/icons/youtube.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">

      {/* Newsletter Section */}
      <div className="bg-white rounded-4 p-4 d-flex row mb-5">

        <div className="col-md-6 newsletter-left text-start">
          <h2 className="w-50">Subscribe to our Newsletter</h2>
          <p>Get all our latest updates straight to your inbox.</p>
        </div>

        <div className="col-md-6 newsletter-right text-start d-flex flex-column gap-2">

          <label className="text-muted">Email Address</label>

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
          <img src={logo} alt="M2 Square Logo" />
          <h1>
            M<sup>2</sup>
          </h1>
        </div>

        <div className="social-section">
          <span>Follow us on:</span>

          <div className="social-icons">
            <div className="icon"><img src={facebook} alt="Facebook" /></div>
            <div className="icon"><img src={x} alt="X" /></div>
            <div className="icon"><img src={linkedin} alt="LinkedIn" /></div>
            <div className="icon"><img src={instagram} alt="Instagram" /></div>
            <div className="icon"><img src={youtube} alt="YouTube" /></div>
            <div className="icon"><img src={tiktok} alt="TikTok" /></div>
          </div>
        </div>

      </div>

      <hr />

      <div className="row mt-5">

          <div className="col-md-3">
            <h6>Home</h6>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="text-secondary">Contact Us</p>
            </Link>
            <Link to="/terms-conditions" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="text-secondary">Terms & Conditions</p>
            </Link>
            <Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="text-secondary">Privacy Policy</p>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/finance" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="text-secondary">Home Financing</p>
            </Link>
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="text-secondary">Fractional Ownership</p>
            </Link>
            <Link to="/tokenized-homes" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="text-secondary">Tokenized Investments</p>
            </Link>
            <Link to="/buy-sell" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="text-secondary">Buy, sell, rent manage</p>
            </Link>
          </div>

         <div className="col-md-6">

  <p className="d-flex align-items-center gap-3">
   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.90813 3.46223L6.50548 2.55625C6.2422 1.96388 6.11056 1.66768 5.91369 1.44101C5.66696 1.15694 5.34535 0.94794 4.98556 0.83785C4.69847 0.75 4.37434 0.75 3.72609 0.75C2.77779 0.75 2.30364 0.75 1.90561 0.93229C1.43675 1.14702 1.01332 1.61328 0.844605 2.1006C0.701385 2.51429 0.742415 2.93943 0.824455 3.7897C1.69779 12.8402 6.6597 17.8021 15.7101 18.6755C16.5604 18.7575 16.9856 18.7985 17.3992 18.6553C17.8866 18.4866 18.3528 18.0632 18.5676 17.5943C18.7498 17.1963 18.7498 16.7221 18.7498 15.7738C18.7498 15.1256 18.7498 14.8015 18.662 14.5144C18.5519 14.1546 18.3429 13.833 18.0588 13.5862C17.8322 13.3894 17.536 13.2577 16.9436 12.9944L16.0376 12.5918C15.3961 12.3067 15.0753 12.1641 14.7494 12.1331C14.4374 12.1034 14.1229 12.1472 13.8309 12.2609C13.5258 12.3797 13.2562 12.6044 12.7168 13.0539C12.18 13.5012 11.9116 13.7249 11.5836 13.8447C11.2928 13.951 10.9084 13.9903 10.6022 13.9452C10.2567 13.8943 9.99223 13.7529 9.46313 13.4702C7.81713 12.5905 6.90941 11.6828 6.02975 10.0368C5.74702 9.50766 5.60566 9.24316 5.55475 8.89766C5.50962 8.59146 5.54896 8.20706 5.65518 7.91626C5.775 7.58828 5.99869 7.31986 6.44607 6.783C6.8955 6.24368 7.12022 5.97402 7.23903 5.66891C7.35273 5.37694 7.3965 5.0624 7.36683 4.75048C7.33582 4.42452 7.19325 4.10376 6.90813 3.46223Z" stroke="#D6A84C" stroke-width="1.5" stroke-linecap="round"/>
</svg>

    <span>+966 50 123 4567</span>
  </p>

  <p className="d-flex align-items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#D6A84C" stroke-width="1.5"/>
<path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#D6A84C" stroke-width="1.5"/>
<path d="M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20" stroke="#D6A84C" stroke-width="1.5" stroke-linecap="round"/>
</svg>


    <span>info@m2square.com</span>
  </p>

  <p className="d-flex align-items-start gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#D6A84C" stroke-width="1.5"/>
<path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#D6A84C" stroke-width="1.5"/>
<path d="M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20" stroke="#D6A84C" stroke-width="1.5" stroke-linecap="round"/>
</svg>

    <span>
      742 King Abdulaziz Rd, Al Murabba District, Riyadh 12613,
      Saudi Arabia.
    </span>
  </p>

</div>

        </div>

        {/* Disclaimer */}
        <div className="mt-5 text-secondary" style={{ fontSize: "14px" }}>
         Hello! M2 Ltd is registered in Saudi Central Bank (SAMA) and we are regulated by Saudi Central Bank (SAMA) with reference F007854. By using M2 you agree to be bound by the terms & conditions, Cookie policy and Privacy Policy. Risk Warning - Investment in property carry a risk and you may not receive the anticipated returns.
        </div>

    
      <hr />

      <div className="copyright">
       © 2026 M2 All rights reserved.
      </div>

    </div>
  );
};

export default Footer;