import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    // Check if email and password are empty
    if (!email || !password) {
      toast.error("Both fields are required!");
      return;
    }

    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData
      );
      console.log(response.data);
      localStorage.setItem("auth", JSON.stringify(response.data.token));
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      console.log("Error:", err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You are already logged in");
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="login-main">
      {/* <div className="login-left">
        <img src={Image} alt="" />
      </div> */}
      <div className="login-right">
        <div className="login-right-container">
          
          <div className="login-center">
            <h2>Welcome back! </h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLoginSubmit}>
              <input type="text" placeholder="Username" name="email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
  
              <div className="login-center-options">
                
                </div>

                <div>
                  <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
             
                
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
  
          <p className="login-bottom-p">
            Don't have an account? <Link to="/Registration">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Login;
