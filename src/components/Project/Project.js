import React from "react";
import '../../assets/css/components/Project.css';
import ProjectCardData from "./ProjectData/ProjectCardData";
import { useState } from "react";
import ProjectCard from "../../assets/data/project.data.json";

const Project = () => {
  const [projects] = useState(ProjectCard);

  return (
    <div class="projects">
      <div class="heading">
        <h2>My Recent Work</h2>
        <p>Here are a few projects I've worked on recently. Want to see more? Email me.</p>
      </div>
      <div class="contents">
      {projects.map((project) => 
        <ProjectCardData
          picture={project.picture}
          description={project.description}
          link={project.link}
          isDisable={project.isDisable}
        />
      )}
    </div>
    </div>
)};

export default Project;