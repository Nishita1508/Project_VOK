
import React from 'react';
import './About.css'; // Updated CSS for styling

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Voice of the Kingdom</h1>
        <p className="about-intro">
          Welcome to Voice of the Kingdom (VOK), the central hub for the inspiring music and ministry work of Sarah and Olusola Akintunde. Our mission is to reach hearts across the globe through powerful music, spiritual guidance, and community engagement.
        </p>

        <div className="about-content">
          <div className="about-item">
            <img src={'https://wallpapers.com/images/hd/spiritual-awakening-3245xa16l0ustokt.jpg'} alt="Sarah Akintunde" className="about-image" />
            <h2>Sarah Akintunde's Music Ministry</h2>
            <p>
              Sarah Akintunde’s music ministry has touched the lives of many, offering melodies that speak directly to the soul. Her journey, filled with divine inspiration, is showcased in her music catalog, which includes albums, singles, and live performances. Explore her works through our music section and stay updated on her upcoming events.
            </p>
          </div>

          <div className="about-item">
            <img src={'https://wallpapers.com/images/hd/spiritual-awakening-3245xa16l0ustokt.jpg'} alt="Olusola Akintunde" className="about-image" />
            <h2>Olusola Akintunde's Message Ministry</h2>
            <p>
              Olusola Akintunde is a passionate preacher whose messages bring spiritual guidance to many. His message ministry focuses on sharing profound biblical teachings that inspire personal growth and community unity. You can find his sermons and message content in our dedicated VOK Message section.
            </p>
          </div>
        </div>

        <div className="about-community">
          <img src={'https://wallpapers.com/images/hd/spiritual-awakening-3245xa16l0ustokt.jpg'} alt="Community" className="community-image" />
          <h2>Fostering Community</h2>
          <p>
            We encourage engagement and interaction among our followers and the larger community. Through events, online interactions, and media outreach, VOK strives to create a space where individuals can connect, grow, and be part of something greater.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
