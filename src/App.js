import React from "react";
import Navbar from "./Navbar";
import Hero from "./Home/Hero";
import Footer from "./Footer"; // Import the Footer component
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourPage from "./FourPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";
import EighthPage from "./EightPage";
import NinthPage from "./NinthPage";
import TenthPage from "./TenthPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Other components or content can go here */}
      <Footer />
      <SecondPage />
      <ThirdPage />
      <FourPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
      <NinthPage />
      <TenthPage />
      <Footer />
    </div>
  );
}

export default App;
