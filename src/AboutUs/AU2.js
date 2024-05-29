import React from "react";
import "../AboutUs/AU2.css";
// import backgroundImage from "./Images/side3pg.png"; // Import your background image
import mainImage from "../Images/au1.png"; // Import your main image

function AU2() {
  return (
    <div className="third-page">
      <div className="content">
        <div className="left-section">
          <img src={mainImage} alt="Main Image" className="main-image" />
        </div>
        <div className="right-section">
          <h1 className="page-heading">Welcome to the Third Page</h1>
          <p>This is the text content on the right side.</p>
          <div className="background-image"></div>
        </div>
      </div>
    </div>
  );
}

export default AU2;
