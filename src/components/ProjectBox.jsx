import React from "react";

const ProjectBox = ({ image, text }) => {
  return (
    <div className="project-box">
      <img src={image} alt="Project" className="project-image" />
      <div className="project-text">{text}</div>
    </div>
  );
};

export default ProjectBox;
