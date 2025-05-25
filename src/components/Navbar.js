import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Navbar({ mystyle, btntext, toggle_btn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-bar" style={mystyle}>
      <h1 className="logo"><a href="/">Wordwiz</a></h1>

      {/* Render desktop menu and toggle btn only on desktop */}
      {isDesktop && (
        <>
          <ul className="desktop-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <button className="toggle-btn desktop-btn" onClick={toggle_btn}>
            {btntext}
          </button>
        </>
      )}

      {/* Hamburger icon always rendered, but only visible on mobile by CSS */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li>
            <button className="toggle-btn" onClick={() => { toggle_btn(); closeMenu(); }}>
              {btntext}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
