import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nikunj-saraf-92545a191/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/nikunjsaraf-oss/"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a href="https://nikunj-saraf.itch.io/" target="_blank" rel="noreferrer">
        <FaItchIo />
      </a>
    </div>
  );
};

export default HeaderSocials;
