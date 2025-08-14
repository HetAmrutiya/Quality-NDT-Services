import React, { useEffect, useState } from "react";
import "./AdvanceServices.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaUpRightFromSquare } from "react-icons/fa6";
import indianoil from "../../assets/indianoil.png";
import gujaratgas from "../../assets/gujaratgas.png";
import hle from "../../assets/hle.png";
import ampo from "../../assets/ampo.jpg";
import incryo from "../../assets/incryo.jpg";
import f from "../../assets/f.png";
import lt from "../../assets/lt.png";
import nayara from "../../assets/nayara.png";
import ongc from "../../assets/ongc.png";
import psl from "../../assets/psl.png";
import rd from "../../assets/rd.png";
import sopan from "../../assets/sopan.jpg";
import tata from "../../assets/tata.png";
import tema from "../../assets/tema.png";
import vtv from "../../assets/vtv.jpg";

const serviceData = [
  {
    title: "Computed Radiography (CR)",
    description:
      "Digital Imaging for Non-Destructive Testing Computed Radiography (CR) is an advanced non-destructive testing (NDT) technique that replaces traditional film radiography with digital imaging technology. It uses phosphor imaging plates to capture X-ray or gamma-ray exposure data, which is then processed using a laser scanner to create a high-resolution digital image. This digital image can be enhanced, analyzed, and stored electronically, offering a faster, more efficient, and environmentally friendly alternative to conventional radiographic methods.",
    items: [
      "Legacy of Trust Since 1990",
      "Client-Focused, Solution-Driven",
      "Comprehensive NDT Solutions",
      "Zero Compromise on Quality & Safety",
      "Cutting-Edge Technology",
      "Fast Response, Reliable Service",
      "Certified, Skilled Professionals",
      "Most economical rates (value for money)",
    ],
  },
  {
    title: "Phased Array Ultrasonic Test (PAUT)",
    description:
      "Advanced Ultrasonic Imaging for High-Precision Inspection Phased Array Ultrasonic Testing (PAUT) is a sophisticated non-destructive testing (NDT) technique that uses multiple ultrasonic elements and electronic time delays to steer, focus, and scan beams of sound waves. This allows for detailed imaging of internal structures and detection of flaws with a high degree of accuracy. Unlike conventional ultrasonic testing, PAUT can generate multiple inspection angles and focal depths from a single probe, significantly improving coverage, speed, and data quality.",
    item: [
      "Real-time cross-sectional imaging (sectorial and linear scans)",
      "Precise defect sizing and location",
      "High-speed scanning and data acquisition",
      "Customizable scan angles without mechanical probe movement",
      "Digital data storage and advanced reporting capabilities",
    ],
  },
  {
    title: "Mobile Spectrometer – On-Site Elemental Analysis",
    description:
      "High-Precision On-Site Metal Analysis A Mobile Spectrometer using Optical Emission Spectroscopy (OES) is a highly reliable and accurate tool for on-site chemical analysis of metallic materials. OES technology is especially valuable in detecting light elements such as carbon (C), sulfur (S), phosphorus (P), and boron (B)—elements that are critical in determining alloy grades and material properties. This technique involves generating a controlled electric spark that excites atoms on the metal surface. These atoms emit light at specific wavelengths, which are then analyzed by the spectrometer to identify and quantify the elements present.",
    item: [
      "Detection of light elements (e.g., C, P, S, B, N) not measurable by XRF",
      "Highly accurate elemental analysis of ferrous and non-ferrous metals",
      "Instant grade verification for stainless steels, low alloy steels, aluminum, copper, and nickel alloys",
      "Rugged and mobile design for use in harsh industrial environments",
      "On-board software for data logging, material certification, and reporting",
    ],
  },
  {
    title: "Electro Magnetic Testing (Eddy Current Test)",
    description:
      "Non-Destructive Evaluation Using Electromagnetic Induction Eddy Current Testing (ECT) is a widely used non-destructive testing (NDT) technique based on the principles of electromagnetic induction. It is primarily used for detecting surface and near-surface flaws in conductive materials, such as cracks, corrosion, inclusions, or changes in material properties. In ECT, an alternating current is passed through a coil to generate an oscillating magnetic field. When this coil is placed near the conductive material, it induces circulating eddy currents within the surface of the material. Disruptions in the flow of these eddy currents—caused by defects or material variations—are detected and analyzed to assess the integrity of the component.",
    item: [
      "Surface and near-surface defect detection",
      "No need for couplant (dry testing method)",
      "Instant results with real-time signal analysis",
      "Highly sensitive to small cracks, especially in non-ferrous metals",
      "Can detect changes in hardness, conductivity, and heat treatment",
    ],
  },
];

const AdvanceServices = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="advanceservices-container">
      <div data-aos="fade-down">
        <p className="title">Advance Inspection Services</p>
        <h1 className="subtitle">Advance Inspection Services</h1>
      </div>

      <div className="accordion-wrapper">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              <p className="accordion-title">{item.title}</p>

              <IoIosArrowDown
                size={20}
                className={openIndex === index ? "rotate-icon" : ""}
              />
            </div>

            {openIndex === index && (
              <div className="accordion-body">
                <p className="accordion-description">{item.description}</p>

                {(item.items || item.item) && (
                  <>
                    <p className="key-features-title">Key Features:</p>

                    <div className="features-list">
                      {(item.items || item.item).map((feature, i) => (
                        <div className="feature-item" key={i}>
                          <FaUpRightFromSquare className="feature-icon" />
                          <p className="feature-text">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="client-section">
        <div>
          <p className="title">Our Valuable Clients</p>
          <h1 className="subtitle">Our Valuable Clients</h1>
        </div>

        <div className="slider-container">
          <div className="slider">
            {[
              indianoil,
              gujaratgas,
              hle,
              ampo,
              incryo,
              f,
              lt,
              nayara,
              ongc,
              psl,
              rd,
              sopan,
              tata,
              tema,
              vtv,
            ].map((img, index) => (
              <img key={index} src={img} alt={`Client ${index}`} />
            ))}

            {[
              indianoil,
              gujaratgas,
              hle,
              ampo,
              incryo,
              f,
              lt,
              nayara,
              ongc,
              psl,
              rd,
              sopan,
              tata,
              tema,
              vtv,
            ].map((img, index) => (
              <img
                key={`duplicate-${index}`}
                src={img}
                alt={`Client duplicate ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceServices;
