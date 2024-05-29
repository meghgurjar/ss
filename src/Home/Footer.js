import React from "react";
import "../Home/Footer.css";
import footerImage from "../Images/footer.jpg"; // Adjust the path as necessary

function Footer() {
  return (
    <footer className="footer">
      <img src={footerImage} alt="Footer" className="footer-image" />
    </footer>
  );
}

export default Footer;
