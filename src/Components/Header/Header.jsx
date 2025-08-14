import React, { useEffect, useState } from "react";
import "./Header.css";
import ut from "../../assets/ut.jpg";
import ndt2 from "../../assets/ndt1.jpg";
import ndt3 from "../../assets/ndt2.jpg";

const sliderImages = [ut, ndt2, ndt3];

const Header = () => {
  const services = [
    "Ultrasonic Testing",
    "Radiography Testing",
    "Die Penetrant Testing",
    "Magnetic Particle Testing",
    "Thickness Measurement",
    "Positive Material Identification",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  // Typing Animation
  useEffect(() => {
    const currentService = services[index];

    if (subIndex === currentService.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % services.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
        setText(currentService.substring(0, subIndex));
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Background Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-container" id="home">
      <img
        src={sliderImages[bgIndex]}
        alt="Header Background"
        className="header-image fade-in"
        key={bgIndex}
      />
      <div className="header-overlay"></div>

      <div className="header-content animate-slide-up">
        <h1 className="header-title">
          QUALITY INDUSTRIAL X-RAY COMPANY PVT LTD
        </h1>
        <h2 className="header-subtitle">
          Leading service provider for{" "}
          <span className="header-highlight">{text}</span>
          <span className="header-cursor"></span>
        </h2>
        <button className="header-button" onClick={handleStart}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Header;
