import React from "react";
import "./SeventhPage.css";
import backgroundImage from "./Images/page7.png";

function SeventhPage() {
  return (
    <div
      className="seventh-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="centered-text">
        <h1>
          "Mental health needs a great deal of attention. It's <br />
          the final taboo and it needs to be faced and dealt with."
          <br /> - Adam Ant
        </h1>
        {/* <p>This is some centered text over a background image.</p> */}
      </div>
    </div>
  );
}

export default SeventhPage;
