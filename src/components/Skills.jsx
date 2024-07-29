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
        <button className="skill-button">JavaScript</button>
        <button className="skill-button">React</button>
        <button className="skill-button">PHP</button>
        <button className="skill-button">Ruby</button>
        <button className="skill-button">SQL</button>
        <button className="skill-button">Python</button>
      </div>
      <p className="skills-description">
        I have a solid background in web development with HTML, CSS, and
        JavaScript, and I'm skilled in creating interactive UIs with React. I
        also have experience with server-side languages like PHP and Ruby, and
        use SQL and Python for database management and scripting. I'm passionate
        about building efficient, user-friendly web applications.
      </p>

      <h2 className="about-title">Developer Setup</h2>
      <div className="skills-buttons">
        <button className="skill-button">Git</button>
        <button className="skill-button">Prettier</button>
        <button className="skill-button">Terminal</button>
      </div>
      <p className="skills-description">
        My development setup includes essential tools like Git for version
        control and Prettier for code formatting. I also prefer using Roboto as
        my choice of font.
      </p>
    </div>
  );
};

export default Skills;
