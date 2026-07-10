import { useState } from "react";
import { experience } from "../../Resources/Experiences.jsx";
import Tilt3D from "../3D/Tilt3D.jsx";
import "./Experiences.css";

const Experiences = () => {
  const [selected, setSelected] = useState(0);
  const exp = experience[selected];

  return (
    <div className="container space">
      <div className="section-heading">
        <h2 className="text-gradient">Experiences</h2>
        <div className="section-divider" />
        <p>Real-world projects and contributions I've worked on.</p>
      </div>

      {/* Tabs */}
      <div className="exp-tabs">
        {experience.map((e, i) => (
          <button
            key={i}
            className={`exp-tab ${selected === i ? "exp-tab--active" : ""}`}
            onClick={() => setSelected(i)}
          >
            {e.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <Tilt3D className="glass-panel exp-card" max={4} scale={1.01} glare>
        <div className="exp-card__inner">
          <div className="exp-card__header">
            <h3 className="exp-card__title text-gradient">{exp.title}</h3>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-card__link"
            >
              🔗 Visit Website →
            </a>
          </div>

          <p className="exp-card__desc">{exp.description}</p>

          <div className="exp-card__skills">
            <p className="exp-card__skills-label">Technologies Used</p>
            <div className="exp-card__skills-grid">
              {exp.skills.map((skill, i) => (
                <div key={i} className="exp-skill-chip">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tilt3D>
    </div>
  );
};

export default Experiences;
