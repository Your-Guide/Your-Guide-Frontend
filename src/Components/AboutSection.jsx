import React, { useState, useEffect } from "react";
import "../styles/AboutSection.css"; // Import external CSS
import about from "../assets/about.png";

const AboutSection = () => {
  const words = ["MENTORSHIP", "INTERVIEW"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animation, setAnimation] = useState("slide-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("slide-out"); // Start slide-out animation

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimation("slide-in"); // Start slide-in animation
      }, 500); // Delay before switching words
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        {/* Left Side - Image */}
        <div className="image-container">
          <img src={about} alt="About Us" className="about-image" />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-content">
          <h2 className="headline">
            YOUR GUIDE TO &nbsp;{"  "}
            <b>  <span className={`changing-word ${animation}`}>
              {words[currentWordIndex]}
            </span>{" "}</b>
           <br/> AND CAREER SUCCESS
          </h2>
          <p className="subheadline">
            Step into your dream tech career... connect with seniors, gain insights, and ace interviews.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
