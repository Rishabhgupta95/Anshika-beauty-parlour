import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function toggle() {
    setOpen((s) => !s);
  }

  function close() {
    setOpen(false);
  }

  // Close the mobile menu whenever the route changes — ensures menu doesn't stay open or re-open unexpectedly
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="navbar">
      <div className="logo"> Anshika  Beauty Parlour </div>

      <button
        className="nav-toggle"
        onClick={toggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <nav>
        {/* Desktop/large-screen nav stays inside header (styled by .nav-links) */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile drawer rendered into document.body so it sits above all content */}
      {createPortal(
        <div
          className={`nav-drawer ${open ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <ul className="drawer-links" role="menu">
            <li><Link to="/" onClick={close}>Home</Link></li>
            <li><Link to="/services" onClick={close}>Services</Link></li>
            <li><Link to="/gallery" onClick={close}>Gallery</Link></li>
            <li><Link to="/about" onClick={close}>About</Link></li>
            <li><Link to="/contact" onClick={close}>Contact</Link></li>
          </ul>
        </div>,
        document.body
      )}
    </header>
  );
}

export default Navbar;
