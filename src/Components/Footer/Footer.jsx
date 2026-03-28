import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ShopSite</h2>
          <p>Your one-stop shop for everything!</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Socials */}

        <div className="footer-section">
          <h3>Socials</h3>
          <ul>
            <li className="flex gap-1"><FaFacebook/> <p>Facebook</p></li>
            <li className="flex gap-1"><BsInstagram/> <p>Instagram</p></li>
            <li className="flex gap-1"><BsTwitter/> <p>Twitter</p></li>
            
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@myshop.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;