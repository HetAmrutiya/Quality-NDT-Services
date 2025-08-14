import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import contactImage from "../../assets/contact1.png";

const contactData = [
  {
    icon: <SlLocationPin style={{ fontSize: 30, color: "#cc1616" }} />,
    title: "Our Address",
    description: (
      <>
        3A Basement,Vimal Udhyog Bhavan,
        <br />
        M.N. Road,Matunga (W.R), Mumbai, India
      </>
    ),
  },
  {
    icon: <HiOutlineMail style={{ fontSize: 30, color: "#cc1616" }} />,
    title: "Email Us",
    description: "info@qualityndt.in",
  },
  {
    icon: <LuPhoneCall style={{ fontSize: 30, color: "#cc1616" }} />,
    title: "Call Us",
    description: (
      <>
        +91 97692 82854
        <br /> +91 76006 48888
      </>
    ),
  },
];

const Contact = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-section-container">
      <div>
        <p className="contact-section-title">CONTACT</p>
        <h1 className="contact-section-subtitle">CONTACT</h1>
      </div>

      <div className="contact-section-card-container">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="contact-section-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="contact-section-icon">{item.icon}</div>
            <h2 className="contact-section-card-title">{item.title}</h2>
            <p className="contact-section-card-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <section className="contact" id="contact">
        <h2 className="heading">
          <i className="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>

        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src={contactImage} alt="Contact" />
            </div>

            <form
              id="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="5162d798-f96f-4824-a967-12cdaad116e8"
              />

              <div className="form-group">
                <div className="field">
                  <i className="fas fa-user"></i>
                  <input type="text" name="name" placeholder="Name" required />
                </div>

                <div className="field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="field">
                  <i className="fas fa-phone-alt"></i>
                  <input type="text" name="phone" placeholder="Phone" />
                </div>

                <div className="message">
                  <i className="fas fa-comment-dots"></i>
                  <textarea name="message" placeholder="Message" required />
                </div>
              </div>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
