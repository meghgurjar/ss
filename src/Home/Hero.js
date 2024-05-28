import React from "react";
import "./Home.css";
import heroImage from '../Images/hero.png';


function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Welcome to Our Website</h1>
        <p>Your success is our priority.</p>
        <button className="hero-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img src={heroImage}  alt="Hero"  />
      </div>
    </div>
  );
}

export default Hero;
