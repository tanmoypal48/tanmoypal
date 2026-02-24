import React from "react";
import "./about.css";
import aboutImage from "../../assets/about-image.png";

/**
 * About component that renders the "About Me" section.
 * It provides a brief professional biography and a portrait image.
 * 
 * @returns {JSX.Element} The rendered About section.
 */
const About = () => { // Defines the About functional component
  return ( // Returns the JSX structure for the component
    <section id="about" className="aboutSection" aria-label="About Me"> {/* Main section container with id for navigation and accessibility label */}
      <div className="aboutContainer"> {/* Flex/Grid container for layout centering and alignment */}
        <div className="aboutText"> {/* Wrapper for the textual content of the section */}
          <h2 className="aboutHeading">About Me</h2> {/* Section heading */}
          <p className="aboutDescription"> {/* Paragraph containing the professional summary */}
            I'm <strong>Tanmoy Pal</strong>, a Senior Technical Product Manager and Engineer dedicated to driving strategic growth through high-impact digital products. With deep expertise in <strong>AI, Industrial Robotics, and Digital Transformation</strong>, I specialize in bridging the gap between complex technical architectures and high-level product strategy. Having led cross-functional teams to deploy multi-million dollar solutions at scale, I am passionate about leveraging data-driven insights to solve intricate industrial challenges and redefine the future of manufacturing through intelligent technology. {/* Content of the biography with bold highlights */}
          </p> {/* End of description paragraph */}
        </div> {/* End of text wrapper */}
        <div className="aboutImageContainer"> {/* Wrapper for the promotional/portrait image */}
          <img // The portrait image element
            src={aboutImage} // Source path for the image asset
            alt="Tanmoy pal - Senior Manager" // Alternative text for screen readers and SEO
            className="aboutImage" // CSS class for styling the image dimensions and effects
          /> {/* End of image tag */}
        </div> {/* End of image container */}
      </div> {/* End of main container */}
    </section> // End of section tag
  ); // End of return statement
}; // End of component definition

export default About;
