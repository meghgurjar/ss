import React from "react";
import "../exercise/exercises.css";
import image1 from "../Images/pg8-1.png"; // Import your gallery images
import image2 from "../Images/pg8-2.png";
import image3 from "../Images/pg8-3.png";
import image4 from "../Images/pg8-4.png";
import Footer from "../Home/Footer";
function Exercise() {
  return (
    <div className="eighth-page">
      <div className="text-section">
        <h1><b>Tips and Exercises</b></h1>
        <p>Have a issue ? We got some tips for you.</p>
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
      <Footer/>

 </div>
  );
}


export default Exercise;
