import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="stay-connected">
        <h3>Stay Connected</h3>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footer-info">
        <div className="info-block">
          <h4>Phone</h4>
          <p>+234 811 203 0870</p>
        </div>
        <div className="info-block">
          <h4>Email</h4>
          <p>info@adeyinkaalaseyori.com</p>
        </div>
        <div className="info-block">
          <h4>Address</h4>
          <p>39 Shyllon Street Ilupeju Lagos</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <strong>Adeyinka Alaseyori</strong>
        </p>
        <p>Copyright © 2024 Adeyinka Alaseyori</p>
        <p>Designed by The Bridge</p>
      </div>
    </footer>
  );
};

export default Footer;
