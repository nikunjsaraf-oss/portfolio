import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio assets/p1.png";
import IMG2 from "../../assets/portfolio assets/p2.jpg";
import IMG3 from "../../assets/portfolio assets/p3.png";
import IMG4 from "../../assets/portfolio assets/p4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Furniture AR - Android",
    github: "https://www.github.com",
    demo: "https://www.github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Visiting Card AR - Android",
    github: "https://www.github.com",
    demo: "https://www.github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "The Lost Knight - PC",
    github: "https://www.github.com",
    demo: "https://www.github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Simple Shooter - PC",
    github: "https://www.github.com",
    demo: "https://www.github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Download
                </a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
