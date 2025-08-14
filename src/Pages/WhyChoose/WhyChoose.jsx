import React, { useEffect, useState } from "react";
import "./WhyChoose.css";
import { useInView } from "react-intersection-observer";
import { FaUpRightFromSquare } from "react-icons/fa6";

const features = [
  {
    id: "01",
    title: "TIMELY SERVICE",
    description:
      "On time quality service is the motive of our firm. Hence we are having a huge team of skilled employees and multiple testing devices to provide services on committed timeline.",
  },
  {
    id: "02",
    title: "TOP QUALITY SERVICE",
    description:
      "We are well known for our quality services and customer relationship. Quality is our responsibility and you will feel it once in direct contact with us.",
  },
  {
    id: "03",
    title: "INTEGRITY",
    description:
      "We uphold transparency and honesty in all our actions. We are certified with LEVEL I and LEVEL II.",
  },
];

const items = [
  "Legacy of Trust Since 1990",
  "Client-Focused, Solution-Driven",
  "Comprehensive NDT Solutions",
  "Zero Compromise on Quality & Safety",
  "Cutting-Edge Technology",
  "Fast Response, Reliable Service",
  "Certified, Skilled Professionals",
  "Most economical rates (value for money)",
];

const WhyChoose = () => {
  const { ref: featureRef, inView: featureInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: statRef, inView: statInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    let interval1, interval2;

    if (statInView) {
      interval1 = setInterval(() => {
        setCount1((prev) => {
          if (prev < 35) return prev + 1;
          clearInterval(interval1);
          return 35;
        });
      }, 50);

      interval2 = setInterval(() => {
        setCount2((prev) => {
          if (prev < 500) return prev + 10;
          clearInterval(interval2);
          return 500;
        });
      }, 15);
    }

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [statInView]);

  return (
    <div className="whychoose-container">
      <div>
        <p className="whychoose-title">Why Choose Us</p>
        <h1 className="whychoose-subtitle">Why Choose Us</h1>
      </div>

      <div className="whychoose-two-column-list">
        <div className="whychoose-item-grid">
          {items.map((text, index) => (
            <div key={index} className="whychoose-item">
              <FaUpRightFromSquare className="whychoose-icon" />
              <p className="whychoose-item-text">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="whatwebring-section">
        <div className="whatwebring-header">
          <h1 className="whatwebring-title">What We Are Bring On Board..</h1>
          <p className="whatwebring-subtitle">
            State-of-the-art NDT Testing Infrastructure in india
          </p>
        </div>

        <div className="whatwebring-stats" ref={statRef}>
          <div className="whatwebring-stat-item">
            <h1 className="stat-number">{count1}</h1>
            <p>Experience</p>
          </div>
          <div className="whatwebring-stat-item">
            <h1 className="stat-number">{count2}</h1>
            <p>Satisfied Clients</p>
          </div>
          <div className="whatwebring-stat-item">
            <h1 className="stat-number">7</h1>
            <p>Aerospace Quality System / Commercial NDT Testing</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <p className="what-we-title">What we value most</p>
        <h1 className="what-we-subtitle">What we value most</h1>
      </div>

      <div
        className={`whychoose-feature-grid ${
          featureInView ? "whychoose-animate-fadeInUp" : ""
        }`}
        ref={featureRef}
      >
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="whychoose-feature-card"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="whychoose-feature-content">
              <div className="whychoose-feature-id">{feature.id}</div>
              <h3 className="whychoose-feature-title">{feature.title}</h3>
              <p className="whychoose-feature-text">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
