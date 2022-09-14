import React from "react";
import { SiGooglescholar } from "react-icons/si";
import { GoBriefcase } from "react-icons/go";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Personal Journey</h5>
      <h2>My Qualifications</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Education</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiGooglescholar className="experience__details-icon" />
              <div>
                <h4>Dr. D. Y. Patil Institute of Technology</h4>
                <small className="text-light">2019-2023</small>
              </div>
            </article>{" "}
            <article className="experience__details">
              <SiGooglescholar className="experience__details-icon" />
              <div>
                <h4>Modern Junior College</h4>
                <small className="text-light">2017-2019</small>
              </div>
            </article>{" "}
            <article className="experience__details">
              <SiGooglescholar className="experience__details-icon" />
              <div>
                <h4>Spicer Higher Secondary School</h4>
                <small className="text-light">2008-2017</small>
              </div>
            </article>{" "}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Professional</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GoBriefcase className="experience__details-icon" />
              <div>
                <h4>Game and AR Developer at Motion Dime</h4>
                <small className="text-light">2021 - present</small>
              </div>
            </article>{" "}
            <article className="experience__details">
              <GoBriefcase className="experience__details-icon" />
              <div>
                <h4>Facilitator of Android Study Jams and Flutter Festival</h4>
                <small className="text-light">Google Developer Student Club, DIT</small>
              </div>
            </article>{" "}
            <article className="experience__details">
              <GoBriefcase className="experience__details-icon" />
              <div>
                <h4>Core Member</h4>
                <small className="text-light">Google Developer Student Club, DIT</small>
              </div>
            </article>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
