import React from "react";
import '../../assets/css/components/Skill.css';
import SkillFrontData from "./SkillData/SkillFrontData";
import SkillBackData from "./SkillData/SkillBackData";


const Skill = () => {
  return (
    <div className="skills">
      <div className="column">
        <SkillBackData />
      </div>
      <div className="column">
        <SkillFrontData/>
      </div>
    </div>
)};

export default Skill;