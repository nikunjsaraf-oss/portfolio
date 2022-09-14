import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>My Technical Level</h5>
      <h2>Skills</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Development Tools</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unity</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unreal Engine</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Godot</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flutter</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React</p>
            </li>
            <li>
              {" "}
              <BiCheck className="service__list-icon" />
              <p>Blender</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mixamo</p>
            </li>
          </ul>
        </article>{" "}
        <article className="service">
          <div className="service__head">
            <h3>Programming</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>C++, Java, Python and C#</p>
            </li>{" "}
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML, CSS and JavaScript</p>
            </li>{" "}
            <li>
              <BiCheck className="service__list-icon" />
              <p>React JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Structures and Algorithms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Object Oriented Programming</p>
            </li>
          </ul>
        </article>{" "}
        <article className="service">
          <div className="service__head">
            <h3>Computer Science</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Augmented Reality Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Game Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Platform Mobile Application Development</p>
            </li>{" "}
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloud Computing</p>
            </li>{" "}
            <li>
              <BiCheck className="service__list-icon" />
              <p>Machine Learning and Data Science</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development</p>
            </li>
          </ul>
        </article>{" "}
        <article className="service">
          <div className="service__head">
            <h3>Languages</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>English</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hindi</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Marathi</p>
            </li>{" "}
          </ul>
        </article>{" "}
        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Project Management</p>
            </li>{" "}
            <li>
              <BiCheck className="service__list-icon" />
              <p>Event Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Leadership</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Teamwork</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Communication</p>
            </li>{" "}
            <li>
              <BiCheck className="service__list-icon" />
              <p>Time Management</p>
            </li>{" "}
          </ul>
        </article>{" "}
      </div>
    </section>
  );
};

export default Services;
