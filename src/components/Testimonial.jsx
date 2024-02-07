import React, { useState } from "react";

const Testimonial = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="testimonial">
      <div className="section-info">
        <h1 style={{ color: "Black" }}>Skills</h1>
        <p style={{ color: "black" }}>What I know?</p>
      </div>

      <div className="skills-row">
        <div className="skills-left-col">
          <p style={{ color: "white" }}>
          As a frontend developer, my expertise spans across HTML, CSS, and JavaScript,
           where I craft engaging user interfaces and ensure seamless user experiences. 
           Through React.js, I implement component-based architecture to build dynamic web 
           applications that are both efficient and scalable. On the backend, I leverage Node.js
            to develop robust server-side solutions, integrating seamlessly with frontend technologies 
            to create full-stack applications.
          </p>
          {showMore && (
            <p style={{ color: "white" }}>
              Here are some additional details about my skills and experience.
              {/* Add more details as needed */}
            </p>
          )}
          <button className="btn" onClick={handleReadMore}>
            {showMore ? "Read less" : "Read more"}
          </button>
        </div>
        <div className="skills-right-col">
          <div className="progress-div">
            <p>
              <span>HTML</span>
              <br />
              <progress value="80" max="100"></progress>
              <span>80%</span>
            </p>

            <p>
              <span>CSS</span>
              <br />
              <progress value="60" max="100"></progress>
              <span>60%</span>
            </p>

            <p>
              <span>JAVASCRIPT</span>
              <br />
              <progress value="80" max="100"></progress>
              <span>80%</span>
            </p>

            <p>
              <span>ReactJs</span>
              <br />
              <progress value="70" max="100"></progress>
              <span>70%</span>
            </p>

            <p>
              <span>NodeJs</span>
              <br />
              <progress value="60" max="100"></progress>
              <span>60%</span>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
