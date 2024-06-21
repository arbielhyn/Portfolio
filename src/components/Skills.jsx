import React from "react";
import { IoHardwareChipSharp } from "react-icons/io5"; // Importing the chip icon from react-icons/io5 library
import "../index.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-icon-container">
        <IoHardwareChipSharp className="skills-icon" />
      </div>
      <h1 className="about-title">Skills and Technology</h1>
      <div className="skills-buttons">
        <button className="skill-button">HTML</button>
        <button className="skill-button">CSS</button>
        <button className="skill-button">Javascript</button>
        <button className="skill-button">React</button>
        <button className="skill-button">PHP</button>
        <button className="skill-button">Ruby</button>
        <button className="skill-button">SQL</button>
        <button className="skill-button">Python</button>
      </div>
    </div>
  );
};

export default Skills;
