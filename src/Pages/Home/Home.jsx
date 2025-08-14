import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import About from "../About/About";
import Team from "../Team/Team";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import WhyChoose from "../WhyChoose/WhyChoose";
import AdvanceServices from "../AdvanceServices/AdvanceServices";
// import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <div id="home" className="header-container">
        <Header />
      </div>

      <div id="about" className="about-container">
        <About />
      </div>

      <div id="whychoose" className="contact-container">
        <WhyChoose />
      </div>

      <div id="advanceservices" className="contact-container">
        <AdvanceServices />
      </div>

      <div id="services" className="container">
        <Services />
      </div>

      <div id="team" className="team-container">
        <Team />
      </div>

      <div id="contact" className="contact-container">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
