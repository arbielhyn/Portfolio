import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  // Dummy projects data
  const projects = [
    {
      image: "src/assets/assets/Blog.png",
      title: "Dynamic Blogging Platform",
      text: "Developed a dynamic blogging platform with PHP, granting users CRUD capabilities for seamless post management. Utilized phpMyAdmin for efficient database storage.",
      link: "https://example.com/project1",
    },
    {
      image: "src/assets/assets/Road Closure.png",
      title: "Road Closure Information",
      text: "Developed an AJAX search form to let users find road closures in Winnipeg, integrating real-time data from the Open Data API for up-to-date information.",
      link: "https://arbielhyn.github.io/Road-Closure/",
    },
    {
      image: "src/assets/assets/Roastly.png",
      title: "Coffee CMS",
      text: "Developed a dynamic CMS for showcasing coffee and tea drinks with a comprehensive admin dashboard for seamless CRUD operations. Users can create posts and comment, fostering an interactive community. The visually appealing display enhances user experience and encourages exploration.",
      link: "https://example.com/project1",
    },
    {
      image: "src/assets/assets/Weather Forecast.png",
      title: "Weather Forecast",
      text: "Developed a React-based weather site using an API for real-time forecasts, displaying current conditions, interval forecasts, and weekly averages. Implemented dynamic background color changes based on weather.",
      link: "https://xz5n4m.csb.app/",
    },
  ];

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (e, section) => {
    e.preventDefault();
    let offset = 0;
    switch (section) {
      case "landing":
        offset = landingRef.current.offsetTop;
        break;
      case "about":
        offset = aboutRef.current.offsetTop;
        break;
      case "skills":
        offset = skillsRef.current.offsetTop;
        break;
      case "projects":
        offset = projectsRef.current.offsetTop;
        break;
      case "contact":
        offset = contactRef.current.offsetTop;
        break;
      default:
        break;
    }
    window.scrollTo({
      top: offset - 250, // Adjust offset as needed
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1c1c1e, #2b2b2f)",
        minHeight: "100vh",
      }}>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={landingRef}>
        <Landing />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects projects={projects} />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
