import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-columns">
        <div className="footer-column company-info">
          <p className="company-name">Quality Industrial X-Ray Co. Pvt. Ltd</p>
          <p className="address">
           3A Basement, <br /> Vimal Udhyog Bhavan, <br />
            M.N. Road,Matunga (W.R), Mumbai, India

          </p>
          <p className="contact-info">Phone: +91 97692 82854</p>
          <p className="contact-info">Phone: +91 76006 48888</p>
          <p>Email: info@qualityndt.in</p>
          <div className="social-icons">
            {[FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn].map(
              (Icon, index) => (
                <div key={index} className="social-media-icon">
                  <Icon color="white" />
                </div>
              )
            )}
          </div>
        </div>

        <div className="footer-column">
          <p className="section-title">Useful Links</p>
          <div className="links-container">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Team", id: "team" },
              { name: "Contact", id: "contact" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="link-item"
                onClick={() => scrollToSection(item.id)}
                style={{ cursor: "pointer" }}
              >
                <IoIosArrowForward className="link-arrow" />
                <p className="text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <p className="section-title">Our Services</p>
          <div className="links-container">
            {[
              { name: "Ultrasonic Testing", id: "services" },
              { name: "Radiography Testing", id: "services" },
              { name: "Magnetic Particle Testing", id: "services" },
              { name: "Dye Penetrant Testing", id: "services" },
              { name: "Thickness Measurement", id: "services" },
              { name: "Positive material identification", id: "services" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="service-item"
                onClick={() => scrollToSection(item.id)}
                style={{ cursor: "pointer" }}
              >
                <IoIosArrowForward className="link-arrow" />
                <p className="text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #252524", marginTop: 80 }}></div>
      <div style={{ marginTop: 50, textAlign: "center" }}>
        <p>Copyright © 2025. All Rights Reserved.</p>
      </div>
      {showTopBtn && (
        <div className="back-to-top" onClick={goToTop}>
          <FaArrowUp className="top-arrow-icon" />
        </div>
      )}
    </div>
  );
};

export default Footer;
