import React from "react";
import "../styles/HowWorks.css"; // External CSS file
import { FaUserPlus, FaSearch, FaHandshake, FaTrophy } from "react-icons/fa"; // Icons

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-heading">How It Works ? </h2>

      <div className="steps-container">
        <div className="step">
          <FaUserPlus className="step-icon" />
          <p>Sign Up</p>
        </div>
        <div className="arrow">➡</div>
        <div className="step">
          <FaSearch className="step-icon" />
          <p>Find a Mentor</p>
        </div>
        <div className="arrow">➡</div>
        <div className="step">
          <FaHandshake className="step-icon" />
          <p>Connect</p>
        </div>
        <div className="arrow">➡</div>
        <div className="step">
          <FaTrophy className="step-icon" />
          <p>Succeed</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
