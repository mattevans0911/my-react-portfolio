import React from "react";
import Cube from "./cube";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <h1 className="title">My name is Matt Evans</h1>
        <div className="about-me">
          <p>
            I am a Full Stack Developer, located in Lexington SC, with a passion
            for solving problems and implementing elegant solutions. <br />
            <br />I have experience working with the following
          </p>
        </div>
        <ul className="language-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Python/Flask</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <a
          className="resume"
          href="https://drive.google.com/file/d/1Q6XDyhT_3P2vFQMioFGoSSPZsT25kYWu/view?usp=sharing"
          target="_blank"
        >
          Download My Resume Here!
        </a>
        <Cube />
      </div>
    </div>
  );
}

export default About;
