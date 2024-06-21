import React from "react";
import { FiUser } from "react-icons/fi"; // Importing the user icon from react-icons library
import "../index.css";

const About = () => {
  // Replace with your resume PDF URL
  const resumeUrl = "src/assets/assets/Arbie Lhyn Lacanlale - Resume.pdf";

  return (
    <div className="about-box">
      <div className="skill-icon-container">
        <FiUser className="about-icon" />
      </div>
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-paragraph">
          <p>
            Hello! I'm Arbie, my journey into web development started with a
            curiosity for how websites are built and has grown into a
            full-fledged passion for coding and problem-solving. I'm always
            eager to learn new skills and take on new challenges.
          </p>
          <p>
            When I'm not coding, I'm off on adventures! I love traveling to new
            places and blending in with the locals. I'm also a big fan of trying
            out new hobbies and diving headfirst into them. Right now, I'm all
            about rock climbing/bouldering.
          </p>
          <p>
            If you want to see my resume, you can find it{" "}
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
