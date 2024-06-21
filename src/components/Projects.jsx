import React from "react";
import { FaCode } from "react-icons/fa";
import "../index.css";

const ProjectBox = ({ image, title, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link">
      <div className="project-box">
        <div className="project-image-container">
          <img src={image} alt="Project" className="project-image" />
        </div>
        <div className="project-content">
          <div className="project-title">{title}</div>
          <div className="project-text">{text}</div>
        </div>
      </div>
    </a>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="project-container">
      <div className="skills-icon-container">
        <FaCode className="skills-icon" />
      </div>
      <h1 className="about-title">Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            image={project.image}
            title={project.title}
            text={project.text}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
