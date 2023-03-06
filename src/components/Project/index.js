
import React, { useState } from 'react';

import Navigation from "../Navigation";

import "./project.css"
import AboutMe from "../Pages/About Me";
import Portfolio from "../Pages/Portfolio";
import Contact from '../Pages/Contact';




const Project = () => {
  const renderPage = () => {
    switch(currentPage){
      case "AboutMe": 
      return <AboutMe/>
      case "Portfolio": 
      return <Portfolio/>
      case "Contact": 
      return <Contact/>
    }
  }
  
  const [currentPage, setCurrentPage] = useState("AboutMe");
  
  
  const handlePageChange = (page) =>{ 
    setCurrentPage(page);
  }

    return(
        <div className="contentCon">
         <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
         {renderPage()}
        </div>
    )
}

export default Project;