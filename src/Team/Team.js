import React from "react";
import "../exercise/exercises.css";
import image1 from "../Images/pg8-1.png"; // Import your gallery images
import image2 from "../Images/pg8-2.png";
import image3 from "../Images/pg8-3.png";
import image4 from "../Images/pg8-4.png";
import Footer from "../Home/Footer";
function Team() {
  return (
    <div className="eighth-page">
      <div className="text-section">
        <h1>
          <b>Team of Experts</b>
        </h1>
        <p>Caring for Your Mental Health Get to Know Our Team of Experts</p>
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
        <div className="gallery-item">
          <img src={image1} alt="Gallery 1" />
        </div>
        <div className="gallery-item">
          <img src={image2} alt="Gallery 2" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
