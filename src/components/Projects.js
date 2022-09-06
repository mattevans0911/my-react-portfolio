import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { data } from "./data";

function Projects() {
  const mappedData = data.map((d) => (
    <div key={d.id}>
      <div className="mapped-data">
        <div className="mapped-project-title">{d.name}</div>
        <div className="mapped-project-description">{d.description}</div>
        <a className="github" href={d.github_url} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="project-wrapper">
        <h1 className="project-title">View My Project Repos Here</h1>
        <div className="data-wrapper">
          <div className="data">{mappedData}</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
