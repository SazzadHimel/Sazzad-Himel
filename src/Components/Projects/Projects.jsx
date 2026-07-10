import React, { useState } from 'react';
import { projects } from '../../Resources/Project.jsx';
import './Projects.css';
import Tilt3D from '../3D/Tilt3D.jsx';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const selectedProject = projects[selectedItemIndex];

  return (
    <div>
      <div className="container space">
        <div className="section-heading">
          <h2 className="text-gradient">Projects</h2>
          <div className="section-divider" />
          <p>Projects I've worked on.</p>
        </div>
        <div className="tabs">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`tab ${selectedItemIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedItemIndex(index)}
            >
              {project.name}
            </div>
          ))}
        </div>

        <div className="content-layout">
          <Tilt3D className="glass-panel details-column" max={5} scale={1.01} glare={true}>
            <div className="details-inner">
              <h3 className="title text-gradient">{selectedProject.title}</h3>
              <p className="description">
                <span className="label">Description:</span> {selectedProject.description}
              </p>

              <a
                className="visit-link"
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link →
              </a>

              <p className="label skills-label">Skills Used:</p>
              <div className="skills-grid">
                {selectedProject.skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt3D>
        </div>
      </div>
    </div>
  );
};

export default Projects;
