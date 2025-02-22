import React from "react";
import "../styles/Preloader.css"; // Optional: For preloader-specific styles
import logo from "../assets/logo3.png"; 

const Preloader = () => {
  return (
    <div className="preloader">
      <img
        className="preloader-logo"
        src={logo} // Replace with your logo image path
        alt="Logo"
      />
    </div>
  );
};

export default Preloader;
