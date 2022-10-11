import React from "react";
import { useState } from "react";
import SkillBack from "../../../assets/data/skill-back.data.json";

const SkillBackData = (props) => {
  const [skill] = useState(SkillBack)

  return (
    <div className="skill-data">
      <figure class="skill">
        <img src="css/img/logo/backend.svg" alt="backend" class="logo" />
        <h2>Back-end Developer</h2>
        <p>{skill[0].description}</p>
        <h2 class="pink-text">Languages I speak:</h2>
        <p>{skill[0].language}</p>
        <h2 class="pink-text">Dev Tools:</h2>
        <ul>
          <li>{skill[0].devTool}</li>
        </ul>
      </figure>
    </div>
  );
}

export default SkillBackData;