// src/pages/About.js

import React from "react";
import "../styles/About.css"; // Optional: For styling the About page

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
      Welcome to our website! 
      We are a team of students dedicated to creating a platform that bridges the gap between 
      juniors and seniors. Our mission is to provide a space where juniors can connect with seniors,
      share insights, and get valuable guidance on interviews and career development. 
      We aim to make the experience seamless and enriching for everyone involved.
      </p>
      <h2>Our Story</h2>
      <p>
        We started with a simple idea: to create a platform that bridges the
        gap between juniors and seniors (Doubts and solutions). Over time, we've expanded and
        grown, but our core values remain the same.
      </p>
      <h2>Our Team</h2>
      <p>
        Our team is a diverse group of passionate developers about what we
        do. We are always striving for innovation and excellence.
      </p>
      <footer>
        <p>&copy; 2025 Your Guide. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
