import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-logo">
        <a href="/" aria-label="Homepage">
          Logo
        </a>
      </div>
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`} aria-label="Main Links">
        <li><a href="/" aria-label="Home">Home</a></li>
        <li><a href="/about" aria-label="About">About</a></li>
        <li><a href="/services" aria-label="Services">Services</a></li>
        <li><a href="/contact" aria-label="Contact">Contact</a></li>
      </ul>
      <button className="hamburger" onClick={handleToggle} aria-label="Toggle Navigation">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </nav>
  );
};

export default Navbar;