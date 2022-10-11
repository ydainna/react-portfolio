import React from "react";
import '../../assets/css/components/Skill.css';
import SkillFrontData from "./SkillData/SkillFrontData";
import SkillBackData from "./SkillData/SkillBackData";


const Skill = () => {
  return (
    <div class="skills">
      <div class="column">
        <SkillBackData />
      </div>
      <div class="column">
        <SkillFrontData/>
      </div>
    </div>
)};

export default Skill;