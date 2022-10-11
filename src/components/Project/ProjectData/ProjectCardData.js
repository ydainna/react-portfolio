import React from "react";

const ProjectCardData = (props) => {
  const linkDisabled = props.isDisable ? "disabled" : '';

  return (
    <div className="project-data">
        <div className="box">
          <img src={props.picture} alt="logo-entreprise" />
          <p>{props.description}</p>
          <a className={linkDisabled} href={props.link}>{props.link}</a>
        </div>
    </div>
  );
}

export default ProjectCardData;