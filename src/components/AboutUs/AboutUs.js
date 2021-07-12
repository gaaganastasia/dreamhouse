import React from "react";
import "./AboutUs.css";
import photo1 from "../../images/photo-1586105251261-72a756497a11.jfif";

function AboutUs() {
  return(
    <div className="block" id="about">
      <div className="block__background block__background_about-us"></div>
      <img className="block__img block__img_about-us" alt="фото дома" src={photo1}></img>
      <div className="block__container block__container_about-us">
        <p className="block__header">About Us</p>
        <div className="block__line"></div>
        <h2 className="block__title">We are the best interoir Design Agency in the world.</h2>
        <p className="block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          Excepteur sint occaecat cupidatat non proident, </p>

          <p className="block__text">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          Ut enim ad minim veniam, </p>  

          <p className="block__text">eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default AboutUs;