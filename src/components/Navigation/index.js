import React from "react";
import "./navigation.css";
//import variableName from file path

import resume from "../../assets/resume.pdf";

// the 2 arguments/ props are beng parsed in from PortfolioContainer.js
function Navigation({ currentPage, handlePageChange }) {
  return (

    <ul className="nav nav-tabs">
      
      <li className={currentPage === 'AboutMe' ? 'nav-item-active' : 'nav-item'}  >
        <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")} >
          About Me
        </a>
      </li>

      <li className={currentPage === "Portfolio" ? 'nav-item-active' : 'nav-link'}>
        <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
      </li>
      
      <li className={currentPage === "Contact" ? 'nav-item-active' : 'nav-link'}>
        <a href="#Contact" onClick={() => handlePageChange("Contact")}>
        Contact
        </a>
      </li>

      <li className={currentPage === "Resume" ? 'nav-item-active' : 'nav-link'}>
        <a
          href={resume} download onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>
          Resume
        </a>
      </li>

    </ul>
  );
}

export default Navigation;
