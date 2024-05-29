import React from "react";
import "../Home/Navbar.css";
function About() {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li>
          <a link href="#home">
            Home
            <link />
          </a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#page">Page</a>
        </li>
      </ul>
      <button className="contact-button">Contact Us</button>
    </nav>
  );
}

export default About;
