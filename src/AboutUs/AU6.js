import React from "react";
import "../AboutUs/AU6.css";
import rightImage from "../Images/au3.png";
import backgroundImage from "../Images/page8-footer.png";

function AU6() {
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
      <br />
      <div className="numbers">{/* <p>heading</p> */}</div>
    </div>
  );
}

export default AU6;
