import React from "react";
import "./Company.css";

function Company() {
  return(
    <div className="company">
      <div className="company__header">
        <h2 className="company__text">PT COMPANY</h2>
        <div className="company__line"></div>
      </div>
      <div className="company__container">
        <p className="company__title">1990</p>
        <p className="company__title">54</p>
        <p className="company__title">72</p>
        <p className="company__title">9</p>
        <p className="company__subtitle">We have been trusted for a long time</p>
        <p className="company__subtitle">Customar Happy</p>
        <p className="company__subtitle">Housese we built</p>
        <p className="company__subtitle">Housing Complex</p>
      </div>
    </div>
  )
}

export default Company;