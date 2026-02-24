import React from "react";
import "./certificate.css";
import { FiExternalLink } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const certifications = [
  {
    title: "Lean Six Sigma Black Belt",
    organisation: "Six Sigma Academy Amsterdam",
    skills: "Project management, process management, DMAIC, Lean Methodology",
    date: "2025",
    link: "https://www.virtualbadge.io/certificate-validator?credential=fa3d5296-816d-4538-9f11-16210143f788",
  },
  {
    title: "LLMOps Masterclass 2025- Generative AI - MLOps & AIOps",
    organisation: "Manifold AI Learning",
    skills: "LLMOps, Generative AI, MLOps, AIOps, Model Deployment",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-d366fd4d-1a7c-427f-b090-2dd3f1a35d43/",
  },
  {
    title: "Lean Six Sigma Green Belt",
    organisation: "Six Sigma Academy Amsterdam",
    skills: "Process Improvement, Statistical Analysis, Quality Control",
    date: "2024",
    link: "https://www.virtualbadge.io/certificate-validator?credential=6fe93280-8f94-4bc2-bd7d-cc22b5d80afb",
  },
  {
    title: "Design AI Products",
    organisation: "Udemy",
    skills: "AI Product Design, UX for AI, Machine Learning Integration",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-7892411a-c167-4121-968b-95b62cee8baf/",
  },
  {
    title: "Google Agent Development Kit (ADK)",
    organisation: "Udemy",
    skills: "Agentic Development, AI, Gen AI",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-2855f2b7-2e9c-414f-82e9-61e80035ffec/",
  },
  {
    title: "GenAI Application Architecture: Scalable & Secure AI Design",
    organisation: "Udemy",
    skills: "Generative AI, Application Architecture, Scalable & Secure AI",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-7c2474c9-4214-475c-a667-9521e8208827/",
  },
  {
    title: "AI Agents & Agentic AI - Microsoft Autogen",
    organisation: "KRISHAI Technologies Private Limited",
    skills: "AI Agents, Agentic AI, Microsoft Autogen",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-f2f53ce1-07a5-4f07-9f5e-d73499be34b2/",
  },
  {
    title: "RAG Bootcamp Using Langchain, LangGraph & Langsmith",
    organisation: "KRISHAI Technologies Private Limited",
    skills: "Langchain, LangGraph, Langsmith, RAG",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-1445ead6-b5ab-4a11-a7bc-493210a6be21/",
  },
  {
    title: "Complete Agentic AI Bootcamp With LangGraph and Langchain",
    organisation: "KRISHAI Technologies Private Limited",
    skills: "Agentic AI, LangGraph, Langchain",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-88779507-5904-486a-b948-0faf7f10db51/",
  },
  {
    title: "AI Prototyping for Product Managers",
    organisation: "Udemy",
    skills: "AI Prototyping, Product Management, Rapid AI Development",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-2bc01309-c9cb-40c8-a34d-763730445e5c/",
  },
  {
    title: "JIRA",
    organisation: "Udemy",
    skills: "JIRA, Agile Project Management, Issue Tracking",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-59967d8c-2c1d-4da1-a256-a9b3f8ceb925/",
  },
  {
    title: "Advanced Product Management: Vision, Strategy & Metrics",
    organisation: "Udemy",
    skills: "Vision, strategy, metrics, product management",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-26ba9ce7-80e9-4142-ab6a-800a125fe4d9/",
  },
  {
    title: "Big Data",
    organisation: "Udemy",
    skills: "Big Data, Data Analytics, Hadoop",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-1ee6f1fe-cced-4805-93d7-a7e6165184fa/",
  },
  {
    title: "Complete Figma Course",
    organisation: "Udemy",
    skills: "Figma, UI/UX Design, Prototyping",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-96256cb1-b45d-4dd6-b5c2-ea1efec4b290/",
  },
  {
    title: "McKinsey Forward Program",
    organisation: "McKinsey & Company",
    skills: "Leadership, Problem Solving, Adaptability",
    date: "2024",
    link: "https://www.credly.com/badges/5cfc97f1-9f9b-457f-9f79-d86783cfa853/linked_in_profile",
  },
  {
    title: "Product Management Certificate",
    organisation: "Institute of Product Leadership",
    skills: "Product Management, Market Research, Product Strategy",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-b98fb996-fa01-45f8-86cf-fb01681fcfad/",
  },
  {
    title: "Product Marketing: Advanced Go-To-Market (GTM) Strategy",
    organisation: "Institute of Management, Technology and Finance",
    skills: "GTM Strategy, Product Marketing, Launch Management",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Digital Business & Unit Economics",
    organisation: "Institute of Management, Technology and Finance",
    skills: "Digital Business, Unit Economics, Profitability Analysis",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "AI-Powered Product Marketing and Market Research",
    organisation: "Institute of Management, Technology and Finance",
    skills: "AI in Marketing, Market Research, Consumer Behavior",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Executive Diploma in Leadership and Management",
    organisation: "Institute of Management, Technology and Finance",
    skills: "Strategic Leadership, Operational Management",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Professional Diploma in Program Management",
    organisation: "Institute of Management, Technology and Finance",
    skills: "Program Management, Resource Allocation, Risk Management",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Professional Diploma in Advertising and Public Relations",
    organisation: "Institute of Management, Technology and Finance",
    skills: "Advertising, PR Strategy, Media Relations",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Advanced Program in Product & CX Management",
    organisation: "Institute of Management, Technology and Finance",
    skills: "CX Management, Product Excellence, Strategic Growth",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Business & Operations Management",
    organisation: "Institute of Management, Technology and Finance",
    skills: "Business Operations, Management, Strategic Efficiency",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Agile Product Management - Professional Diploma",
    organisation: "Institute of Management, Technology and Finance",
    skills: "Agile PM, Frameworks, Strategic Product Management",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Diploma in Digital Transformation",
    organisation: "Institute of Management, Technology and Finance",
    skills: "Digital Strategy, Change Management, Technology Adoption",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "The Product Management for AI & Data Science",
    organisation: "365 Careers",
    skills: "AI/ML Product Management, Data Strategy",
    date: "2024",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-94fe50bb-6aac-46ab-b47c-f6fa451512da.pdf",
  },
  {
    title: "Certified Blockchain Solutions Architect (CBSA)",
    organisation: "Udemy",
    skills: "Blockchain Architecture, Security, Design Principles",
    date: "2024",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-2f1c985e-113e-4791-9982-bafbc0f86e64.pdf",
  },
  {
    title: "Blockchain in Supply Chain Management",
    organisation: "Udemy",
    skills: "Blockchain, Supply Chain, Logistics",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Internet of Things",
    organisation: "Udemy",
    skills: "IoT, Connected Devices, Embedded Systems",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-f87c12fa-91c3-4ce9-82fe-76a6d1183f19/",
  },
  {
    title: "CGRC - Governance, Risk and Compliance Certification",
    organisation: "YouAccel",
    skills: "CGRC, Risk Management, Cybersecurity Compliance",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-930943c1-f611-4527-a21d-8bf8fbc54d68/",
  },
  {
    title: "Supply Chain Management",
    organisation: "Six Sigma Academy Amsterdam",
    skills: "SCM, Strategic Sourcing, Logistics",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-557a96a2-d8a7-4a92-a594-96cd2f04bdf2/",
  },
  {
    title: "Certified Supply Chain Professional (CSCP)",
    organisation: "YouAccel",
    skills: "Supply Chain Professional, Strategy, Management",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-cfd7e3fb-18f0-44be-b7b9-0e251779d3eb/",
  },
  {
    title: "Agile Scrum Master",
    organisation: "Simplilearn",
    skills: "Scrum Master, Agile Frameworks, Leadership",
    date: "2024",
    link: "https://simpli-web.app.link/e/2J1psCRqAVb",
  },
  {
    title: "AI Powered Business Model Design",
    organisation: "YouAccel",
    skills: "Business Model Design, AI Innovation",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-a1226956-d879-46d9-9a82-e0a5a9ad8bbe/",
  },
  {
    title: "Project Management",
    organisation: "YESI EDUCATION",
    skills: "Project Management Fundamentals, Resource Allocation",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "New Product Introduction",
    organisation: "Tata Motors",
    skills: "NPI, Manufacturing Strategy, Launch Excellence",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Product Strategy",
    organisation: "Product School",
    skills: "Product Strategy, Market Analysis, Competitive Intelligence",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Digital Adoption Certification",
    organisation: "Pendo.io",
    skills: "Digital Adoption, User Engagement",
    date: "2024",
    link: "https://www.credly.com/badges/a95b9b73-cd78-45da-8aa4-55537178fca3/linked_in_profile",
  },
  {
    title: "Product-led Certification",
    organisation: "Pendo.io",
    skills: "Product-led Growth, User Experience",
    date: "2024",
    link: "https://www.credly.com/badges/c76db5e7-b119-47a5-84b7-692d9b27934d/linked_in_profile",
  },
  {
    title: "Product Analytics Certification",
    organisation: "Pendo.io",
    skills: "Product Analytics, Behavioral Data",
    date: "2024",
    link: "https://www.credly.com/badges/a34f8fe4-3eda-4059-b4aa-3b397af5c94e/linked_in_profile",
  },
  {
    title: "AI for Product Management",
    organisation: "Pendo.io",
    skills: "AI in PM, Strategic Integration",
    date: "2024",
    link: "https://www.credly.com/badges/004d32b4-c865-48e4-b891-753f8f0ea1e4/public_url",
  },
  {
    title: "Product Management Fellowship",
    organisation: "Product Space",
    skills: "Product Excellence, Industry Networking",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Advanced Product Quality Planning (APQP & PPAP)",
    organisation: "Omnex Inc",
    skills: "APQP, PPAP, Quality Planning, Automotive Standards",
    date: "2024",
    link: "https://www.linkedin.com/in/tanmoy-pal-",
  },
  {
    title: "Trading Algorithms",
    organisation: "Indian School of Business",
    skills: "Algorithm Design, Financial Markets",
    date: "2020",
    link: "https://coursera.org/verify/WN8U63JSUJJH",
  },
  {
    title: "Financial Markets",
    organisation: "Yale University",
    skills: "Finance, Risk Management, Economics",
    date: "2020",
    link: "https://coursera.org/verify/DX32VZF3M9HK",
  },
  {
    title: "Startup India Learning Program",
    organisation: "Invest India",
    skills: "Business Scaling, Entrepreneurship",
    date: "2020",
    link: "https://www.credential.net/80c9191e-d770-48d6-a3d3-c6a2d575c48b",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    organisation: "Microsoft",
    skills: "Azure, Cloud Fundamentals",
    date: "2022",
    link: "https://www.credly.com/badges/affeec36-c505-4f7c-a67e-c10d34075722?source=linked_in_profile",
  },
  {
    title: "Deep Learning Specialization",
    organisation: "DeepLearning.AI",
    skills: "Deep Learning, Neural Networks",
    date: "2020",
    link: "https://www.coursera.org/account/accomplishments/specialization/3KF58TPL5H3X",
  },
  {
    title: "Applied Machine Learning in Python",
    organisation: "University of Michigan",
    skills: "Machine Learning, Python Scikit-learn",
    date: "2020",
    link: "https://www.coursera.org/verify/3MLLK3Y4V3CK",
  },
  {
    title: "Data Visualization with Python",
    organisation: "IBM",
    skills: "Data Viz, Python Matplotlib, Seaborn",
    date: "2020",
    link: "https://www.coursera.org/verify/9K4UTEPJE46F",
  },
];

/**
 * Certificate component that renders a grid of professional certifications.
 * It uses the 'certifications' data array to display credentials, issuing organizations,
 * skillsets acquired, and direct validation links for professional vetting.
 * 
 * @returns {JSX.Element} The rendered Certifications section.
 */
const Certificate = () => { // Defines the Certificate functional component
  return ( // Returns the JSX structure for the component
    <section id="certificates" className="certificate-section"> {/* Main section container with id for navigation */}
      <div className="certificate-header-container"> {/* Wrapper for the section heading and decorative lines */}
        <div className="certificate-divider"></div> {/* Left-hand decorative line divider */}
        <h2 className="certificate-header">Certifications</h2> {/* Primary section heading */}
        <div className="certificate-divider"></div> {/* Right-hand decorative line divider */}
      </div> {/* End of header container */}
      <p className="certificate-description"> {/* Narrative paragraph describing the purpose/value of these certifications */}
        Here is a selection of professional certifications I’ve earned to deepen my expertise and stay current with evolving technologies. {/* Text content */}
      </p> {/* End of description paragraph */}
      <div className="certificate-grid"> {/* Grid layout container for individual certificate cards */}
        {certifications.map((cert, index) => ( // Iterates over the master list of 30+ certifications
          <div key={index} className="certificate-card"> {/* Individual card wrapper for certificate details */}
            <div className="certificate-ribbon"> {/* Ribbon-style badge indicating a verified credential */}
              <FontAwesomeIcon icon={faCertificate} /> {/* Font Awesome certificate vector icon */}
            </div> {/* End of ribbon wrapper */}
            <h3 className="certificate-title">{cert.title}</h3> {/* Name of the specific certification */}
            <p className="certificate-organisation">{cert.organisation}</p> {/* Name of the issuing entity (e.g., Udemy, McKinsey, Google) */}
            <p className="certificate-skills"> {/* Field detailing specific skills validated by this certificate */}
              <strong>Skills Covered:</strong> {cert.skills} {/* Dynamic listing of skills/topics */}
            </p> {/* End of skills paragraph */}
            <p className="certificate-date"> {/* Field showing the year of issuance */}
              <strong>Date:</strong> {cert.date} {/* Issuance year */}
            </p> {/* End of date paragraph */}
            {cert.link && ( // Renders the link only if a valid external URL exists
              <a // Link to the external validation page/PDF
                href={cert.link} // Destination URL
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security protocol
                className="certificate-link" // Styling for the external link button
                aria-label={`View certification for ${cert.title}`} // Accessibility description for screen readers
              >
                <FiExternalLink /> {/* External link visual icon */}
              </a>
            )}
          </div> // End of certificate individual card
        ))}
      </div> {/* End of grid container */}
    </section> // End of main section tag
  ); // End of return statement
}; // End of component definition

export default Certificate;
