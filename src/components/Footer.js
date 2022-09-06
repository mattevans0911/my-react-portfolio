import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="social-wrapper">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/mevans0911/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div className="github">
          <a href="https://github.com/mattevans0911" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
