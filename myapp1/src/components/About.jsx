import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <section className="about top" id="about">
      <div className="container flex">
        <div className="left"> 
          <div className="img">
            <img src="../Home/img1.webp" alt="" className="image1" />
            <img src="../Home/img2.jpg" alt="" className="image2" />
          </div>
        </div>
        <div className="right">
          <div className="heading">
            <h5>Our Mission</h5>
            <h2>Welcome to Voice of the Kingdom</h2>
            <p>
            Experience the music and message ministries of Sarah and Olusola Akintunde.
            </p>
            <p>
            Sarah Akintunde's music is a divine blend of worship, praise, and inspiration. With a voice that transcends boundaries, Sarah's ministry brings healing and restoration through melodies that speak to the soul. Her albums and singles are crafted to lead listeners into deeper connections with God.
            </p>
            <button className="btn1">READ MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
