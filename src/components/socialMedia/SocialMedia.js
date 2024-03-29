import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

export default function socialMedia() {
  return (
    <div className="social-media-div">

      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gitlab ?
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      :
      null }

    </div>
  );
}