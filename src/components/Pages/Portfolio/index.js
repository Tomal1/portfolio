import React from "react";
import "./portfolio.css";

import image1 from "../../../assets/images/codeQuiz.png";
import image2 from "../../../assets/images/noteScreenshot.png";
import image3 from "../../../assets/images/passwordScreenshot.png";
import image4 from "../../../assets/images/rpsScreenshot.png";
import image5 from "../../../assets/images/WDS.png";
import image6 from "../../../assets/images/weatherScreenshot.png";



const Portfolio = () => {
    return(
        <div className="tumbnailCon">
            <figure className="tumbnails">
                <figcaption>xyz</figcaption>             
                <img src={image1} className="thumb1 images"/>
                <input className="portoBTN" type="button" value="website"></input>
                <input className="portoBTN" type="button" value="github"></input>  
            </figure>
            <figure className="tumbnails">
                <figcaption>xyz</figcaption>             
                <img src={image2} className="thumb2 images"/>
                <input className="portoBTN" type="button" value="website"></input>
                <input className="portoBTN" type="button" value="github"></input>
            </figure>
            <figure className="tumbnails">
                <figcaption>xyz</figcaption>             
                <img src={image3} className="thumb3 images"/>
                <input className="portoBTN" type="button" value="website"></input>
                <input className="portoBTN" type="button" value="github"></input>
            </figure>
            <figure className="tumbnails">
                <figcaption>xyz</figcaption>             
                <img src={image4} className="thumb4 images"/>
                <input className="portoBTN" type="button" value="website"></input>
                <input className="portoBTN" type="button" value="github"></input>     
            </figure>
            <figure className="tumbnails">
                <figcaption>xyz</figcaption>             
                <img src={image5} className="thumb5 images"/>
                <input className="portoBTN" type="button" value="website"></input>
                <input className="portoBTN" type="button" value="github"></input>
            </figure>
            <figure className="tumbnails">
                <figcaption>xyz</figcaption>
                <img src={image6} className="thumb6 images"/>
                <input className="portoBTN" type="button" value="website"></input>
                <input className="portoBTN" type="button" value="github"></input>
            </figure>
        </div>
    )
}

export default Portfolio;