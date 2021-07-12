import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return(
    <div className="footer">
      <form className="footer__form">
        <input className="footer__input" placeholder="Enter your email address....."></input>
        <button type="submit" className="footer__submit">SUBSCRIBE</button>
      </form>
      <div className="footer__info">
        <div className="footer__block">
          <h3 className="footer__title">Address:</h3>
          <p className="footer__subtitle">55/k Middle Street, Newro JK, New York,USA</p>
        </div>
        <div className="footer__block">
          <h3 className="footer__title">Phone:</h3>
          <p className="footer__subtitle">+54 6593 4564-54 88 5487 3444-54</p>
        </div>
        <div className="footer__block">
          <h3 className="footer__title">Email:</h3>
          <p className="footer__subtitle">tariqul26536@gmail.com info@gmail.com</p>
        </div>
      </div>
      <div className="footer__container">
        <h2 className="footer__logo">Logo</h2>
        <p className="footer__copyright">Copyright@{year}, Ndthwm</p>
      </div>
    </div>
  )
}

export default Footer;