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
                <figcaption>Code Quiz</figcaption>             
                <img src={image1} className="thumb1 images"/>
                <a href="https://tomal1.github.io/Code_quiz/" target="_blank"><input className="portoBTN" type="button" value="website"></input></a>
                <a href="https://github.com/Tomal1/challenge_WK4_code_quiz" target="_blank"><input className="portoBTN" type="button" value="github"></input></a>
            </figure>
            <figure className="tumbnails">
                <figcaption>Note Taker</figcaption>             
                <img src={image2} className="thumb2 images"/>
                <a href="https://arcane-savannah-67499.herokuapp.com/notes" target="_blank"><input className="portoBTN" type="button" value="website"></input></a>
                <a href=" https://github.com/Tomal1/Note-Taker" target="_blank"><input className="portoBTN" type="button" value="github"></input></a>
            </figure>
            <figure className="tumbnails">
                <figcaption>Password Generator</figcaption>             
                <img src={image3} className="thumb3 images"/>
                <a href="https://tomal1.github.io/challage_WK3/" target="_blank"><input className="portoBTN" type="button" value="website"></input></a>
                <a href="https://github.com/Tomal1/challage_WK3" target="_blank"><input className="portoBTN" type="button" value="github"></input></a>
            </figure>
            <figure className="tumbnails">
                <figcaption>Rock, Paper & Scissors</figcaption>             
                <img src={image4} className="thumb4 images"/>
                <a href="https://tomal1.github.io/Rock-Paper-and-Scissors/" target="_blank"><input className="portoBTN" type="button" value="website"></input></a>
                <a href="https://github.com/Tomal1/Rock-Paper-and-Scissors" target="_blank"><input className="portoBTN" type="button" value="github"></input></a>   
            </figure>
            <figure className="tumbnails">
                <figcaption>Work Day Scheduler</figcaption>             
                <img src={image5} className="thumb5 images"/>
                <a href="https://tomal1.github.io/Work-Day-Scheduler/" target="_blank"><input className="portoBTN" type="button" value="website"></input></a>
                <a href="https://github.com/Tomal1/Work-Day-Scheduler" target="_blank"><input className="portoBTN" type="button" value="github"></input></a>
            </figure>
            <figure className="tumbnails">
                <figcaption>Weather App</figcaption>
                <img src={image6} className="thumb6 images"/>
                <a href="https://tomal1.github.io/6_weather_app/" target="_blank"><input className="portoBTN" type="button" value="website"></input></a>
                <a href="https://github.com/Tomal1/6_weather_app" target="_blank"><input className="portoBTN" type="button" value="github"></input></a>
            </figure>
        </div>
    )
}

export default Portfolio;