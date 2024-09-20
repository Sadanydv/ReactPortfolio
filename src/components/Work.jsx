import React, { useState } from "react";
import data from "../assets/data.json";
import image1 from "../assets/left-arrow.png";
import image2 from "../assets/right-arrow.png";

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const totalProjects = data.projects.length;

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  return (
    <div id="work">
      <h2 className="headingwork">Projects</h2>
      <section>
        <article>
          <div key={data.projects[currentProject].title} className="workItem">
            <img
              src={data.projects[currentProject].imgSrc}
              alt={data.projects[currentProject].title}
            />
            <aside>
              <h3 className="projectheading">
                {data.projects[currentProject].title}<span> (Project {data.projects[currentProject].number})</span>
              </h3>
              <p>{data.projects[currentProject].description}</p>
              <a target={"_blank"} href={data.projects[currentProject].url}>
                View Demo
              </a>
            </aside>
          </div>
          <div className="navigation-buttons">
            <button className="button1" onClick={handlePrev}>
              <img src={image1} alt="Previous" />
            </button>
            <button className="button2" onClick={handleNext}>
              <img src={image2} alt="Next" />
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Work;
