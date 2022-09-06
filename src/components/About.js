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
            for solving problems and implementing elegant solutions. I currently
            work at both Code Ninjas and SemperFi Design. <br />
            <br />I have worked with the following languages
          </p>
        </div>
        <ul className="language-list">
          <li>HTML</li>
          <li>SCSS</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <a
          className="resume"
          href="https://drive.google.com/file/d/1A4_FbE-od13dcsmZocf0evrAW0UNKh3z/view?usp=sharing"
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
