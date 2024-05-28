import React from "react";
import "./FourPage.css";

function FourPage() {
  return (
    <div className="second-page">
      <h1 className="page-heading">Our Blog For You</h1>
      <div className="box-container">
        <div className="box-1">
          <button className="box-button">Button 1</button>
        </div>
        <div className="box-2">
          <button className="box-button">Button 2</button>
        </div>
        <div className="box-3">
          <button className="box-button">Button 3</button>
        </div>
        <div className="box-4">
          <button className="box-button">Button 4</button>
        </div>
      </div>
    </div>
  );
}

export default FourPage;
