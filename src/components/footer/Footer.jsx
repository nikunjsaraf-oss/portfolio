import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <a href="/#">
          Nikunj
        </a>
      </div>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/#achievements">Achievements</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
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
        <a
          href="https://nikunj-saraf.itch.io/"
          target="_blank"
          rel="noreferrer"
        >
          <FaItchIo />
        </a>
        <a
          href="https://www.instagram.com/nikunjsaraf22/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>{" "}
        <a
          href="https://twitter.com/NikunjSaraf18"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nikunj Saraf. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
