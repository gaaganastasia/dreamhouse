import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

function Header() {
  return(
    <div className="header">
      <h2 className="header__logo">Logo</h2>
      <div className="header__menu-icon"></div>
      <Nav></Nav>
    </div>
  )
}

export default Header;