import React, { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // For scroll shadow
  const navigate = useNavigate();

  const handleLoginBtn = () => {
    navigate("/login");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false); // Close menu on selection
  };

  useEffect(() => {
    const handleScroll = () => {
      // For active menu highlight
      const sections = ["home", "about", "services", "team", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setMenu(section);
            break;
          }
        }
      }

      // For navbar shadow
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <p className="logo-text">QUALITY INDUSTRIAL X-RAY</p>
      </div>

      <div
        className={`menu-btn ${isSidebarOpen ? "rotate" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <IoCloseSharp size={25} /> : <FiMenu size={25} />}
      </div>

      <ul className={`navbar-menu ${isSidebarOpen ? "show" : ""}`}>
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>
        <li
          className={menu === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>
        <li
          className={`dropdown ${menu === "services" ? "active" : ""}`}
          onMouseEnter={() => setMenu("services")}
          onMouseLeave={() => setMenu("")}
        >
          Services
          <ul className="dropdown-menu">
            <li onClick={() => scrollToSection("services")}>
              Ultrasonic Testing
            </li>
            <li onClick={() => scrollToSection("services")}>
              Radiography Testing
            </li>
            <li onClick={() => scrollToSection("services")}>
              Die Penetrant Testing
            </li>
            <li onClick={() => scrollToSection("services")}>
              Magnetic Particle Testing
            </li>
            <li onClick={() => scrollToSection("services")}>
              Thickness Measurement
            </li>
          </ul>
        </li>
        <li
          className={menu === "team" ? "active" : ""}
          onClick={() => scrollToSection("team")}
        >
          Team
        </li>
        <li
          className={menu === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
