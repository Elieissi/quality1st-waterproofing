import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__top">
        <span>📞 <a href="tel:5869001900">586-900-1900</a></span>
        <span>FREE Estimates — Serving Southeast Michigan</span>
      </div>
      <div className="navbar__main">
        <div className="navbar__container">
          <Link to="/" className="navbar__brand">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Quality 1st Basement Waterproofing"
              className="navbar__logo"
            />
          </Link>

          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
            <ul className="navbar__links">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              </li>
              <li>
                <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
              </li>
            </ul>
            <a href="tel:5869001900" className="navbar__cta">
              FREE Estimate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
