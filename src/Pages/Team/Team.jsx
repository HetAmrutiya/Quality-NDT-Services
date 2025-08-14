import React from "react";
import parth from "../../assets/parth.jpg";
import dhaval from "../../assets/harsh.png";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import "./Team.css";

const teamMembers = [
  {
    id: 1,
    name: "Parth Patel",
    role: "Managing Director",
    image: parth,
    description: "ASNT Level III , EN ISO 9712 Level II",
  },
  {
    id: 2,
    name: "Harsh Gandhi",
    role: "Technical Director",
    image: dhaval,
    description: "BARC Level II (RSO)",
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <p className="team-title">MANAGING TEAM</p>
      <h1 className="team-subtitle">MANAGING TEAM</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <div
              key={member.id}
              ref={ref}
              className={`team-card ${inView ? "fade-in-up" : ""}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <p className="member-name">{member.name}</p>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
              <div className="social-icon-row">
                {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                  (Icon, idx) => (
                    <div className="icon" key={idx}>
                      <Icon color="white" />
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
