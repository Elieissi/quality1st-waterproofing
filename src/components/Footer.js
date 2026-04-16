import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Quality 1st Basement Waterproofing"
            className="footer__logo"
          />
          <p>Protecting Michigan homes from water damage for over 16 years.</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__services">
          <h4>Our Services</h4>
          <ul>
            <li>Sump Pump Installation</li>
            <li>Foundation Repair</li>
            <li>Crawl Space Encapsulation</li>
            <li>Crack Injection</li>
            <li>Interior Waterproofing</li>
            <li>Exterior Waterproofing</li>
            <li>French Drain</li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact Us</h4>
          <p><a href="tel:5869001900">586-900-1900</a></p>
          <p>Southeast Michigan</p>
          <a href="tel:5869001900" className="footer__cta">Get FREE Estimate</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Quality 1st Basement Waterproofing. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
