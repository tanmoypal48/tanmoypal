import React from "react";
import "./education.css";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../GlowCard/glowcard";

const educations = [
  {
    id: 1,
    title: "EXECUTIVE PROGRAM IN MANAGEMENT & BUSINESS ADMINISTRATION",
    grade: "",
    institution: "Institute of Management, Technology and Finance, Lisbon, Portugal",
    duration: "2024 – 2025",
    gpa: "",
    coursework: "Business strategy, finance, Marketing, Digital Transformation, Product Management, Leadership,Project Management, Innovation & Entrepreneurship"
  },
  {
    id: 2,
    title: "Bachelor of Technology – Computer Science and Engineering",
    institution: "KIIT University, Bhubaneswar, India",
    duration: "2015 – 2019",
    gpa: "8.95/10",
    coursework: "Data Structure and Algorithms, Artificial Intelligence, Cloud Computing, Internet of Things, Discrete Mathematics, Engineering Economics, Big Data, Data Base MS, Quality Engineering and Management, Web Technology, Software Engineering"

  },
];

/**
 * Education component that renders the academic background of the professional.
 * It uses the 'educations' data array to display degrees, institutions,
 * durations, and relevant coursework in styled cards.
 * 
 * @returns {JSX.Element} The rendered Education section.
 */
function Education() { // Defines the Education functional component
  return ( // Returns the JSX structure for the component
    <section id="education" className="education-section"> {/* Main section container with id for navigation */}
      <div className="education-title-container"> {/* Wrapper for the section header components */}
        <div className="education-divider"></div> {/* Left-hand decorative divider line */}
        <h2 className="education-title">Education</h2> {/* Primary section heading */}
        <div className="education-divider"></div> {/* Right-hand decorative divider line */}
      </div> {/* End of header container */}

      <div className="education-grid"> {/* Grid container for education cards */}
        {educations.map((education) => ( // Iterates over the list of academic achievements
          <GlowCard key={education.id} identifier={`education-${education.id}`}> {/* Custom card with glow effect */}
            <div className="education-card"> {/* Main card wrapper for layout and styling */}
              <div className="education-duration">{education.duration}</div> {/* Displays the years of study */}
              <div className="education-content"> {/* Container for specific educational details */}
                <div className="education-icon"> {/* Wrapper for the educational icon */}
                  <BsPersonWorkspace size={36} /> {/* Workspace/study icon */}
                </div> {/* End of icon wrapper */}
                <div> {/* Degree and institution details container */}
                  <h3 className="education-degree"> {/* Degree title heading */}
                    {education.title} {/* The specific degree name (e.g., Bachelor of Technology) */}
                    {education.grade && ( // Conditionally renders the grade if it exists
                      <>
                        <br /> {/* Line break for cleaner presentation */}
                        <span className="education-grade">Grade: {education.grade}</span> {/* Displays the specific grade/honors */}
                      </>
                    )}
                  </h3> {/* End of degree heading */}
                  <p className="education-institution">{education.institution}</p> {/* Name of the university/university branch */}
                  {education.coursework && ( // Conditionally renders coursework details
                    <p className="education-coursework"> {/* Paragraph for specific modules/courses studied */}
                      <strong>Relevant Coursework:</strong> {education.coursework} {/* Highlights the most pertinent academic subjects */}
                    </p> // End of coursework paragraph
                  )}
                </div> {/* End of detailed content wrapper */}
              </div> {/* End of education content container */}
            </div> {/* End of individual education card */}
          </GlowCard> // End of GlowCard wrapper
        ))}
      </div> {/* End of education grid */}
    </section> // End of section tag
  ); // End of return statement
} // End of component definition

export default Education;
