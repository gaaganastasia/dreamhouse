import React from "react";
import "./Main.css";
import photo1 from '../../images/photo-1586023492125-27b2c045efd7.jfif';

function Main() {
  return(
    <div className="main">
      <div className="main__background">
        <button type="button" className="main__left-btn">&lt;</button>
        <button type="button" className="main__right-btn">&gt;</button>
      </div>
      <div className="main__container">
        <h1 className="main__title">WE MAKE YOUR</h1>
        <h2 className="main__title"><span>DREAM HOUSE</span></h2>
        <p className="main__subtitle">We Have largest Team to create your Dream Building. We are AlwyesWanted to Your Trusted Business Partner</p>
        <button className="main__contact-btn">CONTACT NOW</button>
      </div>
      <img className="main__img" src={photo1} alt="фото домов"></img>
    </div>
  )
}

export default Main;