import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Preloader from "./Components/Preloader"; // Import Preloader Component
import "./App.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 3000);
  }, []);

  return (
    <div className="app-container">
      {/* Preloader */}
      {!showContent && <Preloader />}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Show Navbar only on Home Page */}
          {location.pathname === "/" && <Navbar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          {Footer}
          
        </>
      )}
    </div>
  );
};

export default App;
