import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Hangzhou Lispo Sports Co., Ltd. - Professional manufacturer and exporter of hunting decoys, outdoor equipment,
            and camping supplies. Quality products for hunters and outdoor enthusiasts worldwide.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Product Categories</h3>
          <ul className="footer-links">
            <li><Link to="/products?category=Decoys">Decoys</Link></li>
            <li><Link to="/products?category=Hunting Bags">Hunting Bags</Link></li>
            <li><Link to="/products?category=Camping Products">Camping Products</Link></li>
            <li><Link to="/products?category=Knives">Knives</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li>Email: tpmam2026@gmail.com</li>
            <li>Phone: +86 13705811629</li>
            <li>WhatsApp: +86 13705811629</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Hangzhou Lispo Sports Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
