import React from "react";
import "./about.css";
import ME from "../../assets/FullSizeRender.jpg";
import { RiAwardFill } from "react-icons/ri";
import { AiOutlineGoogle } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year internship at Motion Dime</small>
            </article>
            <article className="about__card">
              <AiOutlineGoogle className="about__icon" />
              <h5>GDSC Core Member</h5>
              <small>2 years</small>
            </article>
            <article className="about__card project__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            A final year engineering student of Information Technology at Dr. D.
            Y. Patil Institute of Technology, Pimpri. Developed and published
            many games and also various Augmented reality applications which
            solves many problems. I also develop cross platfrom mobile
            applications and websites.
          </p>
          <a href="#contact" className="btn btn-primary contact__button">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
