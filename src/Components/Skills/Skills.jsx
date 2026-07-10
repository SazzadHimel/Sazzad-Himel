import { skills } from "../../Resources/Skills.jsx";
import Tilt3D from "../3D/Tilt3D.jsx";
import "./Skills.css";

const CATEGORY_COLORS = [
  "indigo", "cyan", "pink", "violet", "emerald", "amber",
  "rose", "blue", "indigo", "cyan", "pink", "violet",
  "emerald", "amber", "rose", "blue", "indigo", "cyan", "pink", "violet",
];

const Skills = () => {
  return (
    <div className="container space">
      <div className="section-heading">
        <h2 className="text-gradient">Skills & Technologies</h2>
        <div className="section-divider" />
        <p>A curated collection of technologies I've worked on.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Tilt3D
            key={index}
            className={`glass-panel skill-card skill-card--${CATEGORY_COLORS[index % CATEGORY_COLORS.length]}`}
            max={18}
            scale={1.1}
            glare
          >
            <div className="skill-card__glow" />
            <img src={skill.logo} alt={skill.name} className="skill-card__logo" />
            <p className="skill-card__name">{skill.name}</p>
          </Tilt3D>
        ))}
      </div>
    </div>
  );
};

export default Skills;
