import React from "react";
import "./FifthPage.css";
import introImage from "./Images/intro.jpg";

function FifthPage() {
  return (
    <div className="fifth-page">
      <div className="intro-section">
        <img src={introImage} alt="Introduction" className="intro-image" />
        <div className="intro-text">
          <h1 className="intro-heading">Introduction</h1>
          <p className="intro-description">
            This is an introduction text about the image shown. It provides some
            context and information about the subject of the image. This text
            can be descriptive and informative to give users a better
            understanding of what the image represents.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
