import React from "react";
import "./experience.css";
import { BsBriefcase } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import GlowCard from "../GlowCard/glowcard";

const experiences = [
  {
    id: 1,
    title: "SENIOR MANAGER",
    company: "TATA MOTORS - JAMSHEDPUR",
    companyWebsite: "https://www.tatamotors.com/",
    duration: "JANUARY 2023 – Present",
    description: [
      "Architected Multimodal AI Systems: Engineered a RAG-based prescriptive maintenance portal utilizing Python, Milvus vector DB, and multi-agent orchestration (Web, RAG, and DB agents) to automate technical breakdown resolution.",
      "Spearheaded Industrial Robotics (AMR): Led the development and deployment of Autonomous Mobile Robots using ROS 2 and NVIDIA Orin, achieving a 26% increase in supply chain efficiency and significant gains in weight-pulling capacity.",
      "Implemented Computer Vision Solutions: Directed the in-house development of a Deep Learning-based switch tray verification system, eliminating manual quality checks and delivering INR 20 million in cost savings.",
      "Executed Large-Scale Digital Twins: Orchestrated the integration of OT-layer data and IoT edge devices into a real-time Digital Twin for Heat Treatment and Paint shops using Dassault 3DExperience, HiveMQ, and Node-RED.",
      "Deployed Predictive IIoT Frameworks: Designed and launched prediction-based systems to forecast equipment breakdowns by analyzing IoT sensor data and conveyor current patterns, transitioning maintenance from reactive to proactive.",
      "Optimized Manufacturing Intelligence: Implemented end-to-end digital solutions including 'Pick to Light' kitting (DEKI AIIMS) and Digital ANDON systems, automating line efficiency calculations and eliminating production delays due to part mismatch.",
      "Contributed to both greenfield projects and existing systems, balancing innovation with maintenance."
    ],
    tools: [
      "Python",
      "Next.js",
      "MERN Stack",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Agile"
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "SIEMENS,Bangalore",
    companyWebsite: "https://www.siemens-advanta.com/",
    duration: "2022 – 2023",
    description: [
      "TOTALLY INTEGRATED AUTOMATION PORTAL",
      "Implemented various product backlog items as features for import/export functionality in the TIA Portal, including tool-based integration with MDD and GSD tools.",
      "Developed multiple POCs to enhance product functionality and automate processes for improved efficiency.",
      "Developed features on export functionalities of new devices in TIA.",
      "Implemented test automations on the newly build features .",
      "Resolved bugs and performance issues in backend logic to ensure stable deployment and user experience.",
      "Worked on the text paring of the XML files and constructing validations for different automation device range..",
      "Assisted in frontend enhancements and UI fixes as required.",
      "Participated in agile sprints, version control workflows, and regular feature testing."
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "JavaScript",
      "Express.js",
      "xml",
      "Firestore",
      "NoSQL"
    ],
  },
  {
    id: 3,
    title: "R&D Member of Technical Staff I",
    company: "AVEVA(Schneider Electric), Hyderabad",
    companyWebsite: "https://www.aveva.com/en/",
    duration: "2019 – 2022",
    description: [
      "AVEVA ENGINEERING AND SCHEMATICS",
      "Applied ADS in UI and product design using WPF, adhering to new design standards for enhanced user experience.",
      "Automated the feature test cases which reduced manual effort by 5% of the total automation .",
      "AVEVA STRUCTURAL DESIGN",
      "Developed features on export functionalities of new devices in TIA.",
      "Developed a graphics feature with an algorithm based on geometrical properties for relative beams and columns, reducing 400 lines of code and doubling efficiency..",
      "Implemented product integration with other products with Structural 3D/BOCAD by the creation of suitable API layer features.",
      "Automated manual workflows using desktop-based automation methods, which increased the product test case efficiency by 16%.",
      "Implemented product integration of Aveva structural design and other software.",
      "Participated in agile sprints, version control workflows, and regular feature testing."
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "JavaScript",
      "Express.js",
      "xml",
      "Firestore",
      "NoSQL"
    ],
  },
];

/**
 * Experience component that displays a vertical list of professional work history.
 * It uses the 'experiences' data array to render detailed cards for each role,
 * including company details, durations, descriptions, and technology badges.
 * 
 * @returns {JSX.Element} The rendered Work Experience section.
 */
function Experience() { // Defines the Experience functional component
  return ( // Returns the JSX structure for the component
    <section id="experience" className="experience-section"> {/* Main section container with id for navigation */}
      <div className="experience-title-container"> {/* Wrapper for the section header with decorative dividers */}
        <div className="experience-divider"></div> {/* Left-side colored divider line */}
        <h2 className="experience-title">Work Experience</h2> {/* Main section heading */}
        <div className="experience-divider"></div> {/* Right-side colored divider line */}
      </div> {/* End of title container */}

      <div className="experience-grid"> {/* Container for the list of experience cards */}
        {experiences.map((experience) => ( // Iterates over the experiences data array
          <GlowCard // Custom wrapper component providing a spotlight/glow effect
            key={experience.id} // Unique key for React list rendering
            identifier={`experience-${experience.id}`} // Identifier for specific card targeting
          >
            <div className="experience-card"> {/* Inner wrapper for card content and styling */}
              <div className="experience-duration">{experience.duration}</div> {/* Displays the job tenure period */}
              <div className="experience-content"> {/* Container for role-specific information */}
                <div className="experience-icon"> {/* Wrapper for the career/briefcase icon */}
                  <BsBriefcase size={36} /> {/* The briefcase font icon with fixed size */}
                </div> {/* End of icon wrapper */}
                <div> {/* Main text content area for the role */}
                  <h3 className="job-title">{experience.title}</h3> {/* Job title heading */}
                  <p className="experience-company"> {/* Company name and website link container */}
                    {experience.company}{" "} {/* Name of the company */}
                    <a // External link to the company's official website
                      href={experience.companyWebsite} // Link destination
                      target="_blank" // Open in a new tab
                      rel="noopener noreferrer" // Security best practice
                      className="company-website-link" // Styling for the external link icon/text
                      aria-label={`${experience.company} website`} // Accessibility label
                    >
                      <FiExternalLink size={16} /> {/* Visual indicator icon for an external link */}
                    </a>
                  </p> {/* End of company paragraph */}
                  <ul className="experience-description-list"> {/* Unordered list for bullet points detailing responsibilities */}
                    {experience.description.map((point, index) => ( // Iterates over the array of description strings
                      <li key={index}>{point}</li> // Renders each description point as a list item
                    ))}
                  </ul> {/* End of description list */}
                  <div className="experience-tools"> {/* Container for the technologies used in this role */}
                    <strong>Tools & Technologies:</strong> {/* Group label */}
                    <div className="tools-badge-container"> {/* Flex wrapper for tool badges */}
                      {experience.tools.map((tool, index) => ( // Iterates over the list of technologies
                        <span key={index} className="tool-badge"> {/* Individual badge element for a tool */}
                          {tool} {/* Name of the technology/tool */}
                        </span>
                      ))}
                    </div> {/* End of tools badge container */}
                  </div> {/* End of tools group */}
                </div> {/* End of text area */}
              </div> {/* End of experience content */}
            </div> {/* End of experience card */}
          </GlowCard> // End of GlowCard wrapper
        ))}
      </div> {/* End of experience grid */}
    </section> // End of section tag
  ); // End of return statement
} // End of component definition

export default Experience;
