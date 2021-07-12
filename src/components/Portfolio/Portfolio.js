import React from "react";
import "./Portfolio.css";
import photo1 from "../../images/photo-1523217582562-09d0def993a6.jfif";
import photo2 from "../../images/photo-1617978241112-898785df45b9.jfif";
import photo3 from "../../images/photo-1562438668-bcf0ca6578f0.jfif";

function Portfolio() {
  return(
    <div className="portfolio" id="portfolio">
      <h3 className="portfolio__title">Portfolio</h3>
      <div className="portfolio__line"></div>
      <p className="portfolio__subtitle">Chake out some of Our Portfolio.</p>
      <div className="portfolio__gallery">
        <img alt="project" src={photo1} className="portfolio__photo1"></img>
        <img alt="project" src={photo2} className="portfolio__photo2"></img>
        <img alt="project" src={photo3} className="portfolio__photo3"></img>
      </div>
    </div>
  )
}

export default Portfolio;