import React, { useRef, useState } from "react";
import "./contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

/**
 * Contact component that provides a form for users to send emails directly to the professional.
 * It integrates with EmailJS for backend-less email handling and includes social media links
 * for alternative communication channels.
 * 
 * @returns {JSX.Element} The rendered Contact section.
 */
const Contact = () => { // Defines the Contact functional component
  const form = useRef(); // Creates a reference to the form element for data extraction
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track the successful submission of the form

  /**
   * Handles the form submission by sending the data via EmailJS.
   * 
   * @param {React.FormEvent} e - The form submission event object.
   */
  const sendEmail = (e) => { // Function to process email sending
    e.preventDefault(); // Prevents the default browser form submission behavior

    emailjs // Invokes the EmailJS library
      .sendForm("service_hfl9cay", "template_1k172zf", form.current, { // Service ID, Template ID, and form reference
        publicKey: "7qi5W6HigQoOexIn2", // Public key for authentication with the EmailJS API
      })
      .then( // Promised-based handling for success
        () => {
          console.log("SUCCESS!"); // Log success to the console for debugging
          setIsSubmitted(true); // Updates state to show the success message UI
          form.current.reset(); // Clears all input fields in the form
          setTimeout(() => setIsSubmitted(false), 5000); // Hides the success message after 5 seconds
        },
        (error) => { // Promised-based handling for failure
          console.log("FAILED...", error.text); // Log error details to the console
        }
      );
  };

  return ( // Returns the JSX structure for the component
    <section id="contact" className="contactPage"> {/* Main section container with id for navigation */}
      <div className="contact-header"> {/* Wrapper for the section heading and decorative lines */}
        <div className="contact-divider"></div> {/* Left decorative line */}
        <h2 className="contact-title">Contact</h2> {/* Primary section heading */}
        <div className="contact-divider"></div> {/* Right decorative line */}
      </div> {/* End of header container */}

      <p className="contact-description"> {/* Instructional text for the user */}
        Feel free to reach out by filling out the form below. I'm happy to discuss project opportunities, collaborations, or any tech-related inquiries. {/* Content body */}
      </p> {/* End of description paragraph */}

      <form className="contactForm" ref={form} onSubmit={sendEmail}> {/* The interactive form element with reference and submit handler */}
        <input // Text input for the sender's name
          type="text" // Input type
          className="name" // CSS class for styling
          placeholder="Your Name" // Hint text displayed inside the field
          name="your_name" // Key name used by EmailJS template
          required // Field must be filled before submission
        />
        <input // Email input for the sender's contact address
          type="email" // Ensures valid email format
          className="email" // CSS class
          placeholder="Your Email" // Hint text
          name="your_email" // Key name
          required // Field must be filled
        />
        <textarea // Larger text area for the main message
          name="message" // Key name
          className="message" // CSS class
          rows="5" // Fixed vertical height (5 lines)
          placeholder="Your Message" // Hint text
          required // Field must be filled
        ></textarea>
        <button type="submit" value="Send" className="SubmitBtn"> {/* Button to trigger the form submission handler */}
          Submit {/* Button label */}
        </button>
      </form>

      {isSubmitted && ( // Conditionally renders the success notification if state is true
        <p className="successMessage">Your message has been sent successfully!</p> // Feedback text
      )}

      <div className="links"> {/* Container for direct social media links */}
        <a // Link to LinkedIn profile
          href="https://www.linkedin.com/in/tanmoy-pal-/" // Destination URL
          target="_blank" // New tab
          rel="noopener noreferrer" // Security protocol
          className="social-link linkedin" // Branding class
          aria-label="Visit my LinkedIn profile" // Accessibility label
        >
          <FaLinkedin size={30} /> {/* LinkedIn font icon */}
        </a>
        <a // Link to GitHub profile
          href="https://github.com/tanmoypal48" // Destination URL
          target="_blank" // New tab
          rel="noopener noreferrer" // Security protocol
          className="social-link github" // Branding class
          aria-label="Visit my GitHub profile" // Accessibility label
        >
          <FaGithub size={30} /> {/* GitHub font icon */}
        </a>
        <a // Mailto link for direct emailing
          href="mailto:paltanmoy48@gmail.com" // Destination address
          className="social-link email" // Branding class
          aria-label="Send me an email" // Accessibility label
        >
          <FaEnvelope size={30} /> {/* Envelope font icon */}
        </a>
      </div> {/* End of social links container */}
    </section> // End of section tag
  ); // End of return statement
}; // End of component definition

export default Contact;
