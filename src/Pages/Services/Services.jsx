import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import rt from "../../assets/rt.jpg";
import ut from "../../assets/ut.jpg";
import mpt from "../../assets/mpt.jpg";
import dp from "../../assets/dp.jpg";
import thickness from "../../assets/thickness.jpg";
import pmi from "../../assets/pmi.jpg";
import nabl from "../../assets/nabl.png";
import aerb from "../../assets/aerb.png";
import ndt from "../../assets/ndt.png";
import asnt from "../../assets/asnt.png";
import barc from "../../assets/barc.png";
import czech from "../../assets/czech.png";
import {
  FaCamera,
  FaMagnet,
  FaWaveSquare,
  FaFlask,
  FaSearch,
  FaRuler,
} from "react-icons/fa";
const servicesData = [
  {
    id: 1,
    title: "Radiography Testing",
    description:
      "In radiographic testing (RT), a source of X-Ray or Gamma-Ray radiation is used to produce an image of the component on photographic film (by placing the radiation source on one side of the component and the film on the other). Following exposure to radiation, the film is then processed and then viewed on an illuminated screen for visual interpretation of the image. Radiography gives a permanent record (the exposed film), which is a major advantage of the method, and is widely used to detect volumetric flaws (surface and internal).",
    image: rt,
    icon: <FaCamera />,
  },
  {
    id: 2,
    title: "Magnetic Particle Testing",
    description:
      "This method is used for the detection of surface and near-surface flaws in ferromagnetic materials and is primarily used for crack detection. The specimen is magnetized either locally or overall, and if the material is sound the magnetic flux is predominantly inside the material. If, however, there is a surface-breaking flaw, the magnetic field is distorted, causing local magnetic flux leakage around the flaw. This leakage flux is displayed by covering the surface with very fine iron particles applied either dry or suspended in a liquid.",
    image: mpt,

    icon: <FaMagnet />,
  },
  {
    id: 3,
    title: "Ultrasonic Testing",
    description:
      "Ultrasonic testing (UT) comprises a range of non-destructive testing (NDT) techniques that send ultrasonic waves through an object or material. These high frequency sound waves are transmitted into materials to characterize the material or for flaw detecting. Most UT inspection applications use short pulse waves with frequencies ranging from 0.1-15 MHz, although frequencies up to 50 MHz can be used. Ultrasonic inspection uses a piezoelectric transducer connected to a flaw detector, which in its most basic form is a pulser-receiver and oscilloscope display.",
    image: ut,

    icon: <FaWaveSquare />,
  },
  {
    id: 4,
    title: "Liquid Penetrant Testing",
    description:
      "This non-destructive testing technique, also known as Dye Penetrant Inspection (DPI), is a cost-effective method used to locate surface breaking flaws such as cracks, porosity, laps, seams and other surface discontinuities. This can be applied to both ferrous and non-ferrous and all non-porous materials.",
    image: dp,

    icon: <FaFlask />,
  },
  {
    id: 5,
    title: "Positive Material Identification",
    description:
      "A rapid, non-destructive method, positive material identification is performed on a wide range of components and assets, and provides a semi-quantitative chemical analysis. It is used for both material verification and identification.",
    image: pmi,

    icon: <FaSearch />,
  },
  {
    id: 6,
    title: "Thickness Measurement",
    description:
      "Thickness measuring is essential across many industries to monitor corrosion, erosion and damage. Ultrasonic thickness measurement (UTM) is commonly used and the method can be applied to a wide range of structures and components that includes ship hulls, piping, pressure vessels and structural steel.",
    image: thickness,

    icon: <FaRuler />,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="con">
      <div>
        <p className="title">SERVICES</p>
        <h1 className="subtitle">SERVICES</h1>
      </div>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card" data-aos="fade-up">
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-icon-container">
                <div className="service-icon-border">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <div>
        <div>
          <p className="title">Certification & Membership</p>
          <h1 className="subtitle">Certification & Membership</h1>
        </div>
        <div className="certifications-container">
          <img src={nabl} alt="NABL" className="certification-logo" />
          <img src={aerb} alt="AERB" className="certification-logo" />
          <img src={ndt} alt="NDT" className="certification-logo" />
          <img src={asnt} alt="ASNT" className="certification-logo" />
          <img src={barc} alt="BARC" className="certification-logo" />
          <img src={czech} alt="CZECH" className="certification-logo" />
        </div>
      </div>
    </div>
  );
};

export default Services;
