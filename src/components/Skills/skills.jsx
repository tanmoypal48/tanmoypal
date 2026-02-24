import React from "react";
import {
  FaReact, FaPython, FaBrain, FaEye,
  FaCogs, FaChartLine, FaUsers, FaRocket, FaLightbulb, FaCheckDouble,
  FaSync, FaDatabase, FaNetworkWired, FaTools, FaCode, FaCubes,
  FaIndustry, FaProjectDiagram
} from "react-icons/fa";
import {
  SiMysql, SiRos, SiJira, SiDotnet, SiLangchain,
  SiTableau
} from "react-icons/si";

import "./skills.css";

const skills = [
  {
    category: "Product Leadership & Strategy",
    items: [
      { name: "Product Strategy", icon: <FaRocket size={40} /> },
      { name: "Product Roadmap", icon: <FaLightbulb size={40} /> },
      { name: "Stakeholder Management", icon: <FaUsers size={40} /> },
      { name: "Product Discovery", icon: <FaEye size={40} /> },
      { name: "Product Prototyping", icon: <FaCubes size={40} /> },
      { name: "NPI", icon: <span className="lang-icon">NP</span> },
      { name: "Strategy & GTM", icon: <FaLightbulb size={40} /> },
      { name: "Lifecycle (PLC)", icon: <FaSync size={40} /> },
    ],
  },
  {
    category: "AI & Advanced Engineering",
    items: [
      { name: "Agentic AI (Langchain, Autogen, ADK)", icon: <SiLangchain size={40} /> },
      { name: "Generative AI", icon: <FaBrain size={40} /> },
      { name: "Deep Learning", icon: <FaBrain size={40} /> },
      { name: "Computer Vision", icon: <FaEye size={40} /> },
      { name: "Hardware Product Development (Robotics & ROS2)", icon: <SiRos size={40} /> },
      { name: "IIoT", icon: <FaNetworkWired size={40} /> },
      { name: "Industrial Digital Product Development", icon: <FaIndustry size={40} /> },
      { name: "Digital Twin & Edge AI", icon: <FaCogs size={40} /> },
    ],
  },
  {
    category: "Analytics & Business Intelligence",
    items: [
      { name: "Power BI", icon: <FaChartLine size={40} /> },
      { name: "Analytics", icon: <FaChartLine size={40} /> },
      { name: "Data Visualization", icon: <SiTableau size={40} /> },
      { name: "SQL", icon: <SiMysql size={40} /> },
      { name: "Data Engineering", icon: <FaDatabase size={40} /> },
      { name: "Business Intelligence", icon: <span className="lang-icon">BI</span> },
    ],
  },
  {
    category: "Software Development & Agile",
    items: [
      { name: "SDLC (dotNet, Python, React)", icon: <FaCode size={40} /> },
      { name: "Agile Development", icon: <FaSync size={40} /> },
      { name: "Python", icon: <FaPython size={40} /> },
      { name: ".NET / C#", icon: <SiDotnet size={40} /> },
      { name: "React / Next.js", icon: <FaReact size={40} /> },
      { name: "Jira / Confluence", icon: <SiJira size={40} /> },
    ],
  },
  {
    category: "Operational Excellence",
    items: [
      { name: "Lean Six Sigma Black Belt", icon: <FaCheckDouble size={40} /> },
      { name: "Digital Transformation", icon: <FaChartLine size={40} /> },
      { name: "MLOps", icon: <FaProjectDiagram size={40} /> },
      { name: "Problem Solving", icon: <FaTools size={40} /> },
      { name: "Program Governance", icon: <FaCheckDouble size={40} /> },
    ],
  },
  {
    category: "Language Skills",
    items: [
      {
        name: "English",
        icon: <span className="lang-icon">En</span>,
      },
      {
        name: "Bengali",
        icon: <span className="lang-icon">Be</span>,
      },
      {
        name: "Hindi",
        icon: <span className="lang-icon">Hi</span>,
      },
    ],
  },
];

/**
 * Skills component that renders the technical and strategic skillset of the professional.
 * It organizes skills into thematic categories like Leadership, AI, and Technical Stack,
 * presenting each skill as a card with an identifying icon and name.
 * 
 * @returns {JSX.Element} The rendered Strategic Skills section.
 */
function Skills() { // Defines the Skills functional component
  return ( // Returns the JSX structure for the component
    <div id="skills" className="skills-section"> {/* Main container for the skills area with navigation id */}
      <div className="skills-header"> {/* Header section with title and decorative lines */}
        <div className="skills-divider"></div> {/* Left decorative line */}
        <h2 className="skills-title">Strategic Skills</h2> {/* Main section heading */}
        <div className="skills-divider"></div> {/* Right decorative line */}
      </div> {/* End of header container */}

      <div className="skills-content"> {/* Main grid container for categorized skills */}
        {skills.map((skillCategory, index) => ( // Iterates over each major category (e.g., AI, Technical Stack)
          <div key={index} className="skills-category"> {/* Container for a single skill domain/group */}
            <h3 className="category-title">{skillCategory.category}</h3> {/* Heading for the specific skill domain */}
            <div className="skills-grid"> {/* Grid layout for individual skill tiles within a category */}
              {skillCategory.items.map((skill, skillIndex) => ( // Iterates over skills within the current category
                <div key={skillIndex} className="skill-item"> {/* Wrapper for an individual skill element */}
                  <div className="skill-card"> {/* Card container for the skill icon and name */}
                    <div className="skill-icon">{skill.icon}</div> {/* Visual representation of the skill */}
                    <p className="skill-name">{skill.name}</p> {/* Label descriptive of the specific skill */}
                  </div> {/* End of individual card wrapper */}
                </div> // End of skill item container
              ))}
            </div> {/* End of category grid */}
          </div> // End of skill category container
        ))}
      </div> {/* End of main content area */}
    </div> // End of section tag
  ); // End of return statement
} // End of component definition

export default Skills;
