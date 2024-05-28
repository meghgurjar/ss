import React from "react";
import "./SecondPage.css";
import photo1 from "./Images/photo1.png"; // Import your photos
import photo2 from "./Images/photo2.png";
import photo3 from "./Images/photo3.png";

function SecondPage() {
  return (
    <div className="second-page">
      <h1 className="page-heading">Why Our Mental Health Consultants are <br/> the Best Choice</h1>
      <div className="box-container">
        <div className="box-1">
          <img src={photo1} alt="Photo 1" />
          <button className="box-button">Button 1</button>
        </div>
        <div className="box-2">
          <img src={photo2} alt="Photo 2" />
          <button className="box-button">Button 2</button>
        </div>
        <div className="box-3">
          <img src={photo3} alt="Photo 3" />
          <button className="box-button">Button 3</button>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
