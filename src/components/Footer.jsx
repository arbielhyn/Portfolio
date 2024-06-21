import React from "react";
import "../index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-container">
        <form className="custom-contact-form">
          <div className="custom-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="arbielhyn@gmail.com"
              required
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(204) 996 - 2485"
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="social-icons">
          <a
            href="https://github.com/arbielhyn"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arbielhyn"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
