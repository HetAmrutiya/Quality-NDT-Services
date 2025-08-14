import React, { useState, useEffect } from "react";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Services from "../src/Pages/Services/Services";
import Team from "../src/Pages/Team/Team";
import WhyChoose from "../src/Pages/WhyChoose/WhyChoose";
import "./index.css";
import Contact from "../src/Pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Loader/Loader";
import AdvanceServices from "./Pages/AdvanceServices/AdvanceServices";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/whychoose" element={<WhyChoose />} />
              <Route path="/advanceservices" element={<AdvanceServices />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
};

export default App;
