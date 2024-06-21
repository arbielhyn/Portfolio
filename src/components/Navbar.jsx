import React from "react";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <a
          href="#landing"
          onClick={(e) => scrollToSection(e, "about")}
          className="navbar-link">
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => scrollToSection(e, "skills")}
          className="navbar-link">
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, "projects")}
          className="navbar-link">
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="navbar-link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
