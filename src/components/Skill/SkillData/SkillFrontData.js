import React from "react";
import { useState } from "react";
import SkillFront from "../../../assets/data/skill-front.data.json";

const SkillFrontData = (props) => {
  const [skill] = useState(SkillFront)

  return (
    <div className="skill-data">
      <figure className="skill">
        <img src="css/img/logo/frontend.svg" alt="frontend" className="logo"/>
        <h2>Front-end Developer</h2>
        <p>{skill[0].description}</p>
        <h2 className="pink-text">Languages I speak:</h2>
        <p>{skill[0].language}</p>
        <h2 className="pink-text">Dev Tools:</h2>
        <ul id="front-dev-tools">
          <li>{skill[0].devTool}</li>
        </ul>
      </figure>
    </div>
  );
}

export default SkillFrontData;