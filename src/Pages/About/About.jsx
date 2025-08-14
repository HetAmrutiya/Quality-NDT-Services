import React from "react";
import "./About.css";
import utImage from "../../assets/ut2.jpg";
import { useInView } from "react-intersection-observer";

const features = [
  {
    id: "01",
    title: "Vision",
    description:
      "To be a trusted leader in Non-Destructive Testing by delivering innovative, reliable, safe and timely inspection solutions that uphold the highest standards of quality and integrity across industries.",
  },
  {
    id: "02",
    title: "Mission",
    description:
      "To safeguard industries and infrastructure through precision-driven Non-Destructive Testing solutions, delivered with integrity, innovation, and an unwavering commitment to excellence.",
  },
  {
    id: "03",
    title: "Quality Policy",
    description:
      "Quality is not just a standard, it is our identity. We are committed to delivering accurate, reliable, and world-class Non-Destructive Testing (NDT) services that meet or exceed customer expectations, comply with international standards, and contribute to the safety and integrity of critical infrastructure.",
  },
];

const About = () => {
  const { ref: aboutTopRef, inView: aboutTopInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: featureRef, inView: featureInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="about-container">
      <div
        className={`about-top ${aboutTopInView ? "animate-slideInLeft" : ""}`}
        ref={aboutTopRef}
      >
        <div className="about-text">
          <p className="about-heading">
            QUALITY INDUSTRIAL X-RAY COMPANY PRIVATE LIMITED
          </p>
          <p className="about-paragraph">
            QUALITY INDUSTRIAL X-RAY COMPANY PRIVATE LIMITED is Established in
            1990, a leading Non-Destructive Testing (NDT) service provider based
            in India. With over three decades of industry expertise, we have
            built a strong reputation for delivering reliable, high-quality NDT
            solutions tailored to meet the needs of various industrial sectors.
          </p>
          <p className="about-paragraph">
            Our team comprises specially qualified EN Level-II and ASNT
            Level-III certified professionals and a multi-disciplinary group of
            senior engineers who bring deep technical knowledge and hands-on
            experience to every project. We pride ourselves on our
            customer-centric approach, focusing on delivering precision, safety,
            and efficiency in all our services.
          </p>
          <p className="about-paragraph">
            QUALITY INDUSTRIAL X-RAY COMPANY PRIVATE LIMITED is an ISO 9001:2015
            certified organization committed to maintaining the highest
            standards of quality and compliance. Our processes and methodologies
            are aligned with international standards, ensuring consistent and
            accurate results for our clients.
          </p>
        </div>
        <div className="about-image">
          <img src={utImage} alt="UT Testing" />
        </div>
      </div>

      <div
        className={`feature-grid ${featureInView ? "animate-fadeInUp" : ""}`}
        ref={featureRef}
      >
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="feature-card"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="feature-content">
              <div className="feature-id">{feature.id}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
