import React from "react";
import "./footer.css";

/**
 * Footer component that displays the concluding information of the website.
 * It provides a dynamic copyright notice that automatically updates the year.
 * 
 * @returns {JSX.Element} The rendered Footer section.
 */
const Footer = () => { // Defines the Footer functional component
  return ( // Returns the JSX structure for the component
    <footer className="footer" role="contentinfo"> {/* Main footer container with semantic role for accessibility */}
      <div className="footer-container"> {/* Layout wrapper for alignment and padding control */}
        <p className="footer-text"> {/* Text container for copyright and ownership information */}
          Copyright &copy; {new Date().getFullYear()} Tanmoy Pal. All rights reserved. {/* Dynamic year generation using JS Date object */}
        </p> {/* End of text paragraph */}
      </div> {/* End of footer container */}
    </footer> // End of footer tag
  ); // End of return statement
}; // End of component definition

export default Footer;
