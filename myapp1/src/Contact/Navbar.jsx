// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS for styling

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Toggle the mobile menu
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="/path/to/logo.png" alt="Logo" className="logo-img" />
//       </div>

//       {/* Hamburger icon for mobile */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//       </div>

//       <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
//         <li>
//           <Link to="/" onClick={toggleMenu}>Home</Link>
//         </li>
//         <li>
//           <Link to="/biography" onClick={toggleMenu}>Biography</Link>
//         </li>
//         <li className="dropdown">
//           <Link to="/contact-book" onClick={toggleMenu}>Contact & Book</Link>
//         </li>
//         <li>
//           <Link to="/events" onClick={toggleMenu}>Events</Link>
//         </li>
//         <li>
//           <Link to="/discography" onClick={toggleMenu}>Discography</Link>
//         </li>
//         <li className="dropdown">
//           <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
//         </li>
//         <li>
//           <Link to="/news" onClick={toggleMenu}>News</Link>
//         </li>
//         <li>
//           <Link to="/team" onClick={toggleMenu}>Team Members</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
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
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/add">Add</Link></li>
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
