import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo3.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - Left Side */}
        <div className="logo">
          <Link to="/" onClick={() => window.location.reload()}>
            <img src={logo} alt="Your Guide Logo" className="logo-img" />
          </Link>
        </div>

        {/* Desktop Menu - Right Side */}
        <div className="nav-links">
          <Link to="/" onClick={() => window.location.reload()}>Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => { setIsOpen(false); window.location.reload(); }}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
