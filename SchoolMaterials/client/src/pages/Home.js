import React from 'react';
import "./../css/Home.css";
import pencilImage from "../images/pencils-4966995_1280.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-text">Welcome to School Materials App</h1>
        <p className="tagline">Empowering Learning, One Material at a Time</p>
      </div>
      <div className="hero-image">
        {/* Replace the URL with your desired image or illustration */}
        <img
          src={pencilImage}
          alt="Education illustration"
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default Home;
