import React from "react";
import About from "../Components/AboutSection";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import HowWorks from "../Components/HowWorks";
import Navbar from "../Components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Feature></Feature>
      <HowWorks></HowWorks>
      <Footer></Footer>
    </div>
  );
}
