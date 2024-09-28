
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">VOK</div>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/biography">Biography</Link></li>
          <li><Link to="/about-us">AboutUs</Link></li>
          <li><Link to="/music">VOKMusic</Link></li>
          <li className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              More ▼
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/contact">Contact</Link>
              <Link to="/booking">Booking</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
