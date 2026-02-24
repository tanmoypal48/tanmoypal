import React from "react";
import "./caseStudies.css";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { caseStudies } from "./database/caseStudiesData";

/**
 * CaseStudies component renders a gallery of professional case studies.
 * It maps through the caseStudies data and generates categorized cards 
 * with descriptions, strategic tools used, and direct PDF links.
 * 
 * @returns {JSX.Element} The rendered Work and Case Studies section.
 */
function CaseStudies() { // Defines the CaseStudies functional component
    return ( // Returns the JSX structure for the component
        <section id="projects" className="projects-section" aria-label="Work and Case Studies"> {/* Main section container with id for navigation hooks */}
            <div className="projects-header"> {/* Wrapper for the section heading and horizontal dividers */}
                <div className="projects-divider"></div> {/* Left-hand decorative line divider */}
                <h2 className="projects-title">Work and Case Studies</h2> {/* Primary section heading */}
                <div className="projects-divider"></div> {/* Right-hand decorative line divider */}
            </div> {/* End of header container */}

            <p className="projects-description"> {/* Section introductory text explaining the scope of the work displayed */}
                A collection of strategic case studies and professional work highlighting my expertise in AI,
                Product Management, and Digital Transformation. {/* Narrative content */}
            </p> {/* End of description paragraph */}

            <div className="projects-grid"> {/* Grid container for displaying individual case study cards */}
                {caseStudies.length > 0 ? ( // Conditional check to see if there are any case studies to display
                    caseStudies.map((project, index) => ( // Iterates over the caseStudies data list
                        <article key={index} className="project-card"> {/* Individual case study card container with transition effects */}
                            <div className="project-category-badge">{project.category}</div> {/* Strategic category badge (e.g., RCA, Growth) */}
                            <h3 className="project-name">{project.name}</h3> {/* The title of the specific case study */}
                            <p className="project-description">{project.description}</p> {/* Brief overview/summary of the case study */}
                            <div className="project-tools"> {/* Container for the skills/tools badges used in this study */}
                                {project.tools && project.tools.map((tool, toolIndex) => ( // Iterates through the list of tools
                                    <span key={toolIndex} className="tool"> {/* Individual badge element for a skill/tool */}
                                        {tool} {/* The tool/skill name */}
                                    </span>
                                ))}
                            </div> {/* End of tools badge container */}
                            <div className="project-card-links"> {/* Container for call-to-action buttons/links */}
                                {project.demo && ( // Renders the link only if a PDF demo URL exists
                                    <a // link to view the full PDF document
                                        href={project.demo} // Destination URL (relative internal path)
                                        target="_blank" // Opens the PDF in a new browser tab/viewer
                                        rel="noopener noreferrer" // Security protocol for external/new-tab links
                                        className="demo-link" // Styling for the action button
                                        aria-label={`View PDF for ${project.name}`} // Accessibility description
                                    >
                                        <GrView size={25} /> {/* Visual eye icon for global/viewing action */}
                                        <span>View Full Case Study (PDF)</span> {/* Text label for the button */}
                                    </a>
                                )}
                            </div> {/* End of links container */}
                        </article> // End of individual project card
                    )) // End of map function
                ) : ( // Fallback UI if the caseStudies array is empty
                    <p className="no-projects">Case studies coming soon...</p> // Displays a placeholder message
                )}
            </div> {/* End of projects grid */}
        </section> // End of main section tag
    ); // End of return statement
} // End of component definition

export default CaseStudies;
