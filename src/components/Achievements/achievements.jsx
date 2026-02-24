import React from "react";
import "./achievements.css";
import { FaTrophy, FaMedal, FaStar, FaAward, FaRobot, FaMicrochip, FaTheaterMasks, FaGraduationCap, FaFileAlt } from "react-icons/fa";

const achievements = [
    {
        title: "Outstanding Contribution Award",
        issuer: "Plant Leadership",
        description: "Winner of one of the highest awards in the plant, recognized for exceptional operational impact and professional excellence.",
        icon: <FaAward />,
        date: "2024",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "Organization Silver Award",
        issuer: "Corporate Organization",
        description: "One of the highest organizational honors, awarded for the successful implementation and orchestration of Autonomous Mobile Robots (AMR).",
        icon: <FaRobot />,
        date: "2024",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "Digital Transformation Program Awards",
        issuer: "Factory Heads (4 Units)",
        description: "Consistently recognized with multiple awards from four different factory heads for leading and delivering high-impact digital transformation programs.",
        icon: <FaMicrochip />,
        date: "2023-2024",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "Top Product Management Fellow",
        issuer: "Product Space",
        description: "Ranked as a top fellow at Product Space, demonstrating master-level expertise in product strategy, innovation, and roadmap execution.",
        icon: <FaStar />,
        date: "2024",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "CII National Technology Competition - GOLD",
        issuer: "Confederation of Indian Industry (CII)",
        description: "Recipient of the GOLD award and winner of the Quality Improvement Project Competition at the national technology level.",
        icon: <FaTrophy />,
        date: "2023",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "CII Digitalization & AI Competition - 1st Runners-Up",
        issuer: "Confederation of Indian Industry (CII)",
        description: "Secured 1st Runners-Up position at the CII National Competition, specializing in Digitalization and AI implementation.",
        icon: <FaStar />,
        date: "2023",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "AI Research Paper Presentation",
        issuer: "INVEST Annual Value Engineering Conference",
        description: "Published and presented research on AI-driven digital products designed to reduce Cost of Poor Quality (CoPQ).",
        icon: <FaFileAlt />,
        date: "2022",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "Cultural Excellence - Theater & Street Play",
        issuer: "KSOM & XIMB Fests",
        description: "Winner and champion of various street play and theater competitions at premium management fests (KSOM Fest, XIMB Fest).",
        icon: <FaTheaterMasks />,
        date: "Competitive Career",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    },
    {
        title: "University Merit Scholarship",
        issuer: "Academic University",
        description: "Awarded a merit-based scholarship for consistent academic brilliance and top-ranking university performance.",
        icon: <FaGraduationCap />,
        date: "Academic Career",
        link: "https://www.linkedin.com/in/tanmoy-pal-/details/honors/"
    }
];

/**
 * Achievements component that renders a grid of award and honor cards.
 * It uses the 'achievements' local data array to present professional 
 * accolades with descriptive text, relevant icons, and external validation links.
 * 
 * @returns {JSX.Element} The rendered Honors & Achievements section.
 */
const Achievements = () => { // Defines the Achievements functional component
    return ( // Returns the JSX structure for the component
        <section id="achievements" className="achievements-section"> {/* Main section container with id for navigation */}
            <div className="achievements-header-container"> {/* Wrapper for the section header components */}
                <div className="achievements-divider"></div> {/* Decorative divider line on the left */}
                <h2 className="achievements-header">Honors & Achievements</h2> {/* Primary section heading */}
                <div className="achievements-divider"></div> {/* Decorative divider line on the right */}
            </div> {/* End of header container */}
            <p className="achievements-description"> {/* Section sub-description defining the core value of these achievements */}
                Recognized for excellence in leadership, digital innovation, AI implementation, and operational strategy across national and organizational platforms. {/* Text content */}
            </p> {/* End of description paragraph */}

            <div className="achievements-grid"> {/* Grid container for achievement cards */}
                {achievements.map((item, index) => ( // Iterates over the list of achievements
                    <a // Each card is wrapped in a link for direct verification
                        key={index} // Unique key for mapping
                        href={item.link} // Destination verification URL (LinkedIn Honors)
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // Security protocol
                        className="achievement-card-link" // Styling for the anchor tag wrapper
                    >
                        <div className="achievement-card"> {/* Inner card structure for visual grouping */}
                            <div className="achievement-icon-wrapper"> {/* Wrapper for the thematic achievement icon */}
                                {item.icon} {/* The font icon representing the type of award */}
                            </div> {/* End of icon wrapper */}
                            <div className="achievement-content"> {/* Container for textual achievement details */}
                                <span className="achievement-date">{item.date}</span> {/* The year/period the award was received */}
                                <h3 className="achievement-title">{item.title}</h3> {/* Name of the award/title */}
                                <p className="achievement-issuer">{item.issuer}</p> {/* Name of the issuing organization/person */}
                                <p className="achievement-text">{item.description}</p> {/* Summary of why the award was granted */}
                            </div> {/* End of content container */}
                        </div> {/* End of card container */}
                    </a> // End of anchor tag
                ))}
            </div> {/* End of grid container */}

            <div className="achievements-more"> {/* Container for the final call-to-action */}
                <a // link to view even more details on LinkedIn
                    href="https://www.linkedin.com/in/tanmoy-pal-/details/honors/" // Master link for honors
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="linkedin-link-btn" // Branding/Action button class
                >
                    Verify Full List on LinkedIn {/* Button label */}
                </a>
            </div> {/* End of call-to-action wrapper */}
        </section> // End of main section tag
    ); // End of return statement
}; // End of component definition

export default Achievements;
