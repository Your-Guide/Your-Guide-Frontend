import React from "react";
import "../styles/Feature.css";
import {
  FaChalkboardTeacher,
  FaSearch,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa"; // Import icons

const WhyYourGuide = () => {
  const features = [
    { icon: <FaChalkboardTeacher />, title: "Find a Mentor" },
    { icon: <FaSearch />, title: "Explore Opportunities" },
    { icon: <FaHandshake />, title: "Get Guidance" },
    { icon: <FaChartLine />, title: "Achieve Growth" },
  ];

  return (
    <section className="why-your-guide">
      <h2 className="section-title">Why Your Guide ?</h2>
      <div className="cards-container">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <div className="icon">{feature.icon}</div>
            <p className="card-text">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyYourGuide;
