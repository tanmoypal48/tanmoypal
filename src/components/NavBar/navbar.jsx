import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo_navbar.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

/**
 * Navbar component that provides global navigation and branding for the portfolio.
 * It features a responsive design with a desktop menu and a mobile hamburger menu,
 * utilizing 'react-scroll' for smooth anchor-based navigation across sections.
 * 
 * @returns {JSX.Element} The rendered Navigation Bar.
 */
const Navbar = () => { // Defines the Navbar functional component
  const [showMenu, setShowMenu] = useState(false); // State to toggle the visibility of the mobile menu overlay

  /**
   * Manually scrolls the page to the Contact section.
   * used for the desktop contact button which may require specific offset logic.
   */
  const scrollToContact = () => { // Function to handle programmatic scrolling
    const contactElem = document.getElementById("contact"); // Finds the contact section element in the DOM
    if (contactElem) { // Checks if the element exists to avoid errors
      // scrollTo expects a pixel value for position; provide offset adjustment
      scroll.scrollTo(contactElem.offsetTop - 100); // Scrolls the window to the element's position minus hair-header offset
    }
  };

  return ( // Returns the JSX structure for the component
    <nav className="navbar"> {/* Main navigation container fixed to the top of the viewport */}
      <Link // Clickable logo that returns the user to the hero/top section
        to="hero" // Target section id
        spy={true} // Highlighting active state based on scroll position
        smooth={true} // Enable animated transition
        offset={-100} // Vertical position adjustment
        duration={500} // Animation speed in milliseconds
        className="logoLink" // CSS class for logo layout
      >
        <img src={logo} alt="logo" className="logo" /> {/* Branding logo image */}
      </Link>

      {/* Desktop Menu */}
      <div className="desktopMenu"> {/* Container for navigation links visible on larger screens */}
        <Link // Navigation link to the Home/Hero section
          activeClass="active" // Class applied when the section is currently being viewed
          to="hero" // Target section id
          spy={true} // Enable scroll spying
          smooth={true} // Enable smooth scrolling
          offset={-100} // Target position offset
          duration={500} // Scroll speed
          className="desktopMenuListItem" // Item styling class
        >
          Home
        </Link>
        <Link // Navigation link to the About section
          activeClass="active" // Active state class
          to="about" // Target id
          spy={true} // Scroll spy
          smooth={true} // Smooth scroll
          offset={-50} // Offset
          duration={500} // Duration
          className="desktopMenuListItem" // Styling
        >
          About
        </Link>
        <Link // Navigation link to the Work Experience section
          activeClass="active" // Active state class
          to="experience" // Target id
          spy={true} // Scroll spy
          smooth={true} // Smooth scroll
          offset={-50} // Offset
          duration={500} // Duration
          className="desktopMenuListItem" // Styling
        >
          Experience
        </Link>
        <Link // Navigation link to the Education section
          activeClass="active" // Active state class
          to="education" // Target id
          spy={true} // Scroll spy
          smooth={true} // Smooth scroll
          offset={-100} // Offset
          duration={500} // Duration
          className="desktopMenuListItem" // Styling
        >
          Education
        </Link>
        <Link // Navigation link to the Skills section
          activeClass="active" // Active state class
          to="skills" // Target id
          spy={true} // Scroll spy
          smooth={true} // Smooth scroll
          offset={-100} // Offset
          duration={500} // Duration
          className="desktopMenuListItem" // Styling
        >
          Skills
        </Link>
        <Link // Navigation link to the Case Studies section
          activeClass="active" // Active state class
          to="projects" // Target id (mapped to 'projects' id in CaseStudies.jsx)
          spy={true} // Scroll spy
          smooth={true} // Smooth scroll
          offset={-100} // Offset
          duration={500} // Duration
          className="desktopMenuListItem" // Styling
        >
          Work and Case Studies
        </Link>
        <Link // Navigation link to the Achievements section
          activeClass="active" // Active state class
          to="achievements" // Target id
          spy={true} // Scroll spy
          smooth={true} // Smooth scroll
          offset={-100} // Offset
          duration={500} // Duration
          className="desktopMenuListItem" // Styling
        >
          Achievements
        </Link>
        <Link // Navigation link to the Certifications section
          activeClass="active" // Active state class
          to="certificates" // Target id
          spy={true} // Scroll spy
          smooth={true} // Smooth scroll
          offset={-100} // Offset
          duration={500} // Duration
          className="desktopMenuListItem" // Styling
        >
          Certifications
        </Link>
      </div> {/* End of desktop menu links */}

      {/* Desktop Contact Button */}
      <button // Standalone action button for the contact section
        className="desktopMenuBtn" // Unique branding for the contact CTA
        aria-label="Go to Contact" // Accessibility label
        onClick={scrollToContact} // Trigger programmatic smooth scroll
      >
        <FaEnvelope className="desktopMenuIcon" /> {/* Envelope icon for visual context */}
        Contact Me {/* Button text */}
      </button>

      {/* Mobile Menu Toggle Button */}
      <button // Hamburger/Close icon button for mobile navigation
        className="mobileMenuIcon" // CSS class for mobile-only visibility
        aria-label={showMenu ? "Close menu" : "Open menu"} // Dynamically updated accessibility label
        onClick={() => setShowMenu(!showMenu)} // Toggles the menu state on click
      >
        {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Alternates between 'X' and 'Hamburger' icons */}
      </button>

      {/* Mobile Menu Overlay */}
      {showMenu && ( // Conditional rendering based on showMenu state
        <div className="mobileMenu"> {/* Full-width/height overlay for mobile navigation links */}
          <Link // Mobile link for Home
            activeClass="active" // Active class
            to="hero" // Target id
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-100} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Mobile item styling
            onClick={() => setShowMenu(false)} // Auto-closes menu upon selection
          >
            Home
          </Link>
          <Link // Mobile link for About
            activeClass="active" // Active class
            to="about" // Target id
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-50} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Styling
            onClick={() => setShowMenu(false)} // Auto-close
          >
            About
          </Link>
          <Link // Mobile link for Experience
            activeClass="active" // Active class
            to="experience" // Target id
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-100} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Styling
            onClick={() => setShowMenu(false)} // Auto-close
          >
            Experience
          </Link>
          <Link // Mobile link for Education
            activeClass="active" // Active class
            to="education" // Target id
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-100} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Styling
            onClick={() => setShowMenu(false)} // Auto-close
          >
            Education
          </Link>
          <Link // Mobile link for Skills
            activeClass="active" // Active class
            to="skills" // Target id
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-95} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Styling
            onClick={() => setShowMenu(false)} // Auto-close
          >
            Skills
          </Link>
          <Link // Mobile link for Case Studies
            activeClass="active" // Active class
            to="projects" // Target id
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-100} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Styling
            onClick={() => setShowMenu(false)} // Auto-close
          >
            Work and Case Studies
          </Link>
          <Link // Mobile link for Achievements
            activeClass="active" // Active class
            to="achievements" // Target id
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-100} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Styling
            onClick={() => setShowMenu(false)} // Auto-close
          >
            Achievements
          </Link>
          <Link // Mobile link for Contact (direct scroll target)
            activeClass="active" // Active class
            to="contact" // Target id for the form
            spy={true} // Scroll spy
            smooth={true} // Smooth scroll
            offset={-100} // Offset
            duration={500} // Duration
            className="mobileMenuListItem" // Styling
            onClick={() => setShowMenu(false)} // Auto-close
          >
            Contact
          </Link>
        </div> // End of mobile overlay
      )}
    </nav> // End of navigation tag
  ); // End of return statement
}; // End of component definition

export default Navbar;
