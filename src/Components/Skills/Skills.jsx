import React from 'react';
import { skills } from '../../Resources/Skills.jsx';
import SubHeader from '../Sub-Header/SubHeader.jsx';
import './Skills.css';
import PropTypes from "prop-types";

const Skills = ({ navigate }) => {

  return (
    <div>
      <SubHeader title="Skills Learned" />
      <div className="container space">
        <div>
          <p className="skills-description">
            Bellow is a curated list of technologies and tools I’ve worked with, spanning frontend, backend, databases, APIs, data science, 
            and more. Each one has contributed to shaping my projects and development journey.
          </p>
        </div>

        <div className="skills-gallery">
          {skills.map((skill, index) => (
            <div key={index} className="tech-card">
              <img src={skill.logo} alt={skill.name} className="tech-logo" />
              <p className="tech-title">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className='skills-heading'>
          <h2 className="skills-heading">Want to see these in action?</h2>
          <p className="tech-title">Explore the projects I've built using these technologies.</p>
          <button className="btn" onClick={() => navigate("projects")}>
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default Skills;
