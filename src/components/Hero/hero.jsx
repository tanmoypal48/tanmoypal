import React, { useState, useEffect } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaUser, FaCalendar } from "react-icons/fa";
import { Link } from "react-scroll";
import heroimage from "../../assets/hero-image.png";
import heroLogo from "../../assets/hero-logo.png";
import "./hero.css";

/**
 * Hero component that renders the introduction section of the portfolio.
 * It includes a background logo with a mouse-following light effect, 
 * a typewriter-animated name, social media icons, and action buttons.
 * 
 * @returns {JSX.Element} The rendered Hero section.
 */
const Hero = () => { // Defines the Hero functional component
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 }); // State for tracking mouse coordinates (x, y) relative to the section
  const [isHovering, setIsHovering] = useState(false); // State to track whether the mouse is over the hero section

  // Typewriter effect state
  const firstName = "TANMOY"; // The name to be displayed character-by-character
  const [displayText, setDisplayText] = useState(""); // State of the currently typed text
  const [isTyping, setIsTyping] = useState(true); // Flag to control if the typewriter should be typing or in a pause state

  useEffect(() => { // Hook to manage the typewriter animation lifecycle
    let timeout; // Variable to store the timeout reference for cleanup
    if (isTyping) { // Logic to execute when in 'typing' mode
      if (displayText.length < firstName.length) { // Check if the full name hasn't been typed yet
        timeout = setTimeout(() => { // Set a delay between typing characters
          setDisplayText(firstName.slice(0, displayText.length + 1)); // Increment the displayed text by one character
        }, 150); // Speed of character appearance in milliseconds
      } else { // Trigger when the full name is completely displayed
        timeout = setTimeout(() => { // Set a delay before clearing the text
          setIsTyping(false); // Switch to the pause/non-typing state
        }, 5000); // 5-second visibility pause
      }
    } else { // Logic to execute after the pause period
      // Loop: clear and restart after the 5s pause
      setDisplayText(""); // Reset the typed text to an empty string
      setIsTyping(true); // Switch back to 'typing' mode to restart the loop
    }

    return () => clearTimeout(timeout); // Cleanup function to prevent memory leaks or state updates on unmounted components
  }, [displayText, isTyping]); // Recalculate effect whenever displayText or typing status changes

  /**
   * Handles the mouse movement within the hero section to calculate relative position.
   * used for the CSS-variable-based spotlight effect.
   * 
   * @param {React.MouseEvent} e - The mouse event object.
   */
  const handleMouseMove = (e) => { // Function to update mouse position state
    const rect = e.currentTarget.getBoundingClientRect(); // Get the dimensions and position of the hero section container
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Calculate the horizontal percentage position of the mouse
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Calculate the vertical percentage position of the mouse
    setMousePos({ x, y }); // Update state with the new percentage-based coordinates
  };

  return ( // Returns the JSX structure for the component
    <section // Main section container for the hero area
      id="hero" // Unique identifier for smooth scrolling anchors
      className="heroSection" // Base CSS class for styling
      aria-label="Introduction" // Accessibility label describing the section
      onMouseMove={handleMouseMove} // Event listener for mouse movement to trigger spotlight effects
      onMouseEnter={() => setIsHovering(true)} // Event listener to enable spotlight visibility
      onMouseLeave={() => setIsHovering(false)} // Event listener to hide spotlight visibility
      style={{ // Inline styles used to pass dynamic values to CSS variables
        "--mouse-x": `${mousePos.x}%`, // Pass the custom horizontal mouse coordinate to CSS
        "--mouse-y": `${mousePos.y}%`, // Pass the custom vertical mouse coordinate to CSS
        "--show-light": isHovering ? 1 : 0 // Pass vertical opacity multiplier (1 for visible, 0 for hidden)
      }}
    >
      {/* Background Logo with Mouse Light Effect */}
      <div className="heroLogoBackground"> {/* Wrapper for the background decorative elements */}
        <img src={heroLogo} alt="Background Logo" className="logoBgImage" /> {/* Large background logo image */}
        <div className="mouseLightOverlay"></div> {/* Layer that receives the CSS spotlight effect based on mouse variables */}
      </div>

      <div className="heroContainer"> {/* Central container for text content and buttons */}
        <p className="heroHello" aria-label="Greeting">Hello,</p> {/* Greeting sub-text */}
        <h1 className="heroTitle"> {/* Main heading */}
          I'm <span className="heroName">{displayText}<span className="typingCursor">|</span></span> PAL {/* Dynamic name with active typewriter cursor */}
        </h1>
        <h2 className="heroSubtitle">SENIOR MANAGER</h2> {/* Professional title/subtitle */}
        <p className="heroDescription"> {/* Specialized keywords describing professional expertise */}
          PRODUCT | AI | IIOT | DIGITAL TRANSFORMATION | INDUSTRIAL SOFTWARE
        </p>
        <div className="iconRow" role="navigation" aria-label="Social media links"> {/* Row for social media icons */}
          <a // Link to LinkedIn
            href="https://www.linkedin.com/in/tanmoy-pal-/" // Destination URL
            target="_blank" // Open in a new browser tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="iconButton" // Button style class
            aria-label="LinkedIn Profile" // Accessibility label
          >
            <FaLinkedin /> {/* LinkedIn font icon */}
          </a>
          <a // Link to GitHub
            href="https://github.com/tanmoypal48" // Destination URL
            target="_blank" // Open in a new browser tab
            rel="noopener noreferrer" // Security best practice
            className="iconButton" // Button style class
            aria-label="GitHub Profile" // Accessibility label
          >
            <FaGithub /> {/* GitHub font icon */}
          </a>
          <a // Email link
            href="mailto:paltanmoy48@gmail.com" // Destination email address
            target="_blank" // Try to open in mail client
            rel="noopener noreferrer" // Security best practice
            className="iconButton" // Button style class
            aria-label="Send Email" // Accessibility label
          >
            <FaEnvelope /> {/* Envelope font icon */}
          </a>
          <a // Link to Topmate/Mentor profile
            href="https://topmate.io/tanmoy_pal" // Destination URL
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
            className="iconButton" // Button style class
            aria-label="Topmate Profile" // Accessibility label
          >
            <FaUser /> {/* User font icon */}
          </a>
          <a // Link to Calendly booking
            href="https://calendly.com/paltanmoy48" // Destination URL
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
            className="iconButton" // Button style class
            aria-label="Schedule meeting" // Accessibility label
          >
            <FaCalendar /> {/* Calendar font icon */}
          </a>
        </div>
        <div className="buttonRow"> {/* Action button container */}
          <a // Resume download link
            href={`${process.env.PUBLIC_URL}/TANMOY_PAL_Resume.pdf`} // Path to the PDF in the public folder
            target="_blank" // Open file in a new tab
            rel="noopener noreferrer" // Security best practice
            className="heroBtn" // Primary button style
            aria-label="Download Resume" // Accessibility label
          >
            <FaDownload className="icon" /> Download Resume {/* Label with download icon */}
          </a>
          <a // Primary meeting scheduling button
            href="https://calendly.com/paltanmoy48" // Link back to booking platform
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
            className="heroBtn" // Primary button style
            aria-label="Schedule 1-1 meeting" // Accessibility label
          >
            <FaCalendar className="icon" /> 1-1 meeting {/* Label with calendar icon */}
          </a>
        </div>
      </div>

      {/* Original Portrait Image */}
      <img src={heroimage} alt="Portrait of TANMOY PAL" className="heroImage" /> {/* Hero portrait image positioned usually via CSS */}
    </section>
  );
};

export default Hero;
