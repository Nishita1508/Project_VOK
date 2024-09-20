import React, { useState } from 'react';
import './contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="left">
        <h2>Get In Touch</h2>
        <p>Connect, collaborate, book or simply to say hello. Reach out to us today!</p>
        <p className="phone"><i className="fas fa-phone-alt"></i> +234 811 203 0870</p>
        <p className="email"><i className="fas fa-envelope"></i> info@adeyinkaalaseyori.com</p>
        <p className="address"><i className="fas fa-map-marker-alt"></i> 39 Shyllon Street Ilupeju Lagos</p>
        <h5>Get direction</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6483741744416!2d3.3631549!3d6.5394738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d12ef7b736b%3A0xf108e4418b73d3a7!2s39%20Shyllon%20St%2C%20Ilupeju%20102415%2C%20Lagos!5e0!3m2!1sen!2sng!4v1631241234567"
          width="100%"
          height="250"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="right">
        <h2>Send A Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name<span>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email<span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message<span>*</span></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
