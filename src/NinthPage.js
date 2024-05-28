import React from "react";
import "./NinthPage.css";

function NinthPage() {
  return (
    <div className="ninth-page">
      <div className="overlay">
        <div className="text-section">
          <h1>Our Location</h1>
          <p>Find us on the map below.</p>
        </div>
        <div className="map-section">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092979149601!2d144.95592511549826!3d-37.81720997975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f42c4c18e0de!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633080245644!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default NinthPage;
