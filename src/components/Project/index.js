
import React, { useState } from 'react';

import Navigation from "../Navigation";

import "./project.css"
import AboutMe from "../Pages/About Me";
import Portfolio from "../Pages/Portfolio";




const Project = () => {
  const renderPage = () => {
    switch(currentPage){
      case "AboutMe": 
      return <AboutMe/>
      case "Portfolio": 
      return <Portfolio/>
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