import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return(
    <div className="contact-us" id="contact-us">
      <div className="contact-us__info">
        <h2 className="contact-us__header">Contact us</h2>
        <h3 className="contact-us__title">Request a call back</h3>
        <p className="contact-us__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum has been the industry's standard dummy text 
        ever since when an unknown printer took a galley of type and scrambled to make a typespecimen book. It has survived not only five</p>
      </div>
      <form className="contact-us__form">
        <input className="contact-us__business" placeholder="Business planning"></input>
        <input className="contact-us__firstname" placeholder="Firstname"></input>
        <input className="contact-us__lastname" placeholder="Last name"></input>
        <input className="contact-us__email" placeholder="Your Email"></input>
        <input className="contact-us__number" placeholder="Phone number"></input>
        <button type="submit" className="contact-us__submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default ContactUs;