import React from "react";
import "./Nav.css";

function Nav() {
  return(
    <div className="nav">
      <div className="nav__links">
        <a className="nav__link" href="#about">About</a>
        <a className="nav__link" href="#service">Service</a>
        <a className="nav__link" href="#project">Project</a>
        <a className="nav__link" href="#portfolio">Portfolio</a>
        <a className="nav__link nav__link_light" href="#blog">Blog</a>
        <a className="nav__link nav__link_light" href="#contact-us">Contact Us</a>
      </div>
      <button className="nav__btn" type="button">Sign in</button>
    </div>
  )
}

export default Nav;