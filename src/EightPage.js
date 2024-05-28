import React from "react";
import "./EightPage.css";
import image1 from "./Images/pg8-1.png"; // Import your gallery images
import image2 from "./Images/pg8-2.png";
import image3 from "./Images/pg8-3.png";
import image4 from "./Images/pg8-4.png";
import backgroundImage from "./Images/page8-footer.png";

function EighthPage() {
  return (
    <div className="eighth-page">
      <div className="text-section">
        <h1>Gallery Page</h1>
        <p>Check out our amazing gallery below.</p>
      </div>
      <div className="gallery-section">
        <div className="gallery-item">
          <img src={image1} alt="Gallery 1" />
        </div>
        <div className="gallery-item">
          <img src={image2} alt="Gallery 2" />
        </div>
        <div className="gallery-item">
          <img src={image3} alt="Gallery 3" />
        </div>
        <div className="gallery-item">
          <img src={image4} alt="Gallery 4" />
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

export default EighthPage;
