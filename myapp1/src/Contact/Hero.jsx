import React from 'react';
import './Hero.css'; // Import the CSS for styling

const ContactHero = ({ title }) => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Contact & Booking</h1>
      </div>
    </div>
  );
};

export default ContactHero;
