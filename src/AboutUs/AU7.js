import React from "react";
import "../AboutUs/AU7.css";
import rightImage from "../Images/au4.png";
import backgroundImage from "../Images/page8-footer.png";

function AU7() {
  return (
    <div className="sixth-page">
      <div className="section">
        <div className="left-section">
          <h1 className="page-heading">Welcome to the Sixth Page</h1>
          <p>
            This is some text on the left side of the page. It can be a
            description or any other content.
          </p>
          <button className="action-button">Click Me</button>
        </div>
        <div className="right-section">
          <img src={rightImage} alt="Right Side" className="right-image" />
        </div>
      </div>
      <div
        className="search-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="search-content">
          <h1>Join To Our Newsletter</h1>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default AU7;
