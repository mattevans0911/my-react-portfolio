import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-content-wrapper">
        <h1 className="contact-title">Feel Free To Reach Out!</h1>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          matthewevans0911@gmail.com
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          1(717) 841 6242
        </div>
      </div>
      <div className="map-wrapper">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52933.3104104022!2d-81.26654441798414!3d33.984007711029705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f88d67de76f21d%3A0xa43cfa84b725189c!2sLexington%2C%20SC!5e0!3m2!1sen!2sus!4v1662413346730!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
