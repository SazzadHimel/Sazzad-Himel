import React from 'react';
import { experience } from '../../Resources/Experiences.jsx';
import SubHeader from '../Sub-Header/SubHeader.jsx';
import './Experiences.css';

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  const selectedExperience = experience[selectedItemIndex];
  const images = selectedExperience.images.slice(0, 9);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => setSelectedImageIndex(null);

  const goToPrev = () =>
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const goToNext = () =>
    setSelectedImageIndex((prev) => (prev + 1) % images.length);

  return (
    <div>
      <SubHeader title="Experiences" />
      <div className="container space">
        <div className="tabs">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`tab ${selectedItemIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedItemIndex(index)}
            >
              {exp.name}
            </div>
          ))}
        </div>

        <div className="content-layout">
          <div className="details-column">
            <h3 className="title">{selectedExperience.title}</h3>
            <p className="description">
              <span className="label">Description:</span> {selectedExperience.description}
            </p>
            <a
              className="link"
              href={selectedExperience.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website →
            </a>

            <p className="label">Skills Used:</p>
            <div className="skills-grid">
              {selectedExperience.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.logo} alt={skill.name} className="tech-logo" />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-column">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Experience ${idx}`}
                className="gallery-image"
                onClick={() => handleImageClick(idx)}
              />
            ))}
          </div>
        </div>

        {selectedImageIndex !== null && (
          <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <button className="nav prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>‹</button>
            <img
              className="modal-content"
              src={images[selectedImageIndex]}
              alt="Zoomed"
            />
            <button className="nav next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>›</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiences;
