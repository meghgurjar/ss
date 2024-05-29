import React from "react";
import "../Home/SixthPage.css";
import rightImage from "../Images/page6.png";

function SixthPage() {
  return (
    <div className="sixth-page">
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
  );
}

export default SixthPage;
