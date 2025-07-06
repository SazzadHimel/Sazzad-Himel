import React, { useState } from 'react';
import { projects } from '../../Resources/Project.jsx';
import SubHeader from '../Sub-Header/SubHeader.jsx';
import './Projects.css';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const selectedProject = projects[selectedItemIndex];
  const images = selectedProject.images.slice(0, 9);

  const openModal = (index) => setModalImageIndex(index);
  const closeModal = () => setModalImageIndex(null);
  const showPrev = () =>
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () =>
    setModalImageIndex((prev) => (prev + 1) % images.length);

  return (
    <div>
      <SubHeader title="Projects" />
      <div className="container space">
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
          <div className="details-column">
            <h3 className="title">{selectedProject.title}</h3>
            <p className="description">
              <span className="label">Description:</span> {selectedProject.description}
            </p>

            <a
              className="link"
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Link →
            </a>
            
            <p className="label">Skills Used:</p>
            <div className="skills-grid">
              {selectedProject.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.logo} alt={skill.name} className="tech-logo" />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-column">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Project ${index + 1}`}
                className="gallery-image"
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>

        {modalImageIndex !== null && (
          <div className="modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <button className="nav prev" onClick={(e) => { e.stopPropagation(); showPrev(); }}>‹</button>
            <img
              className="modal-content"
              src={images[modalImageIndex]}
              alt={`Popup ${modalImageIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="nav next" onClick={(e) => { e.stopPropagation(); showNext(); }}>›</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
