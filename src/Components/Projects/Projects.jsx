import React, { useState } from 'react';
import { projects } from '../../Resources/Project.jsx';
import './Projects.css';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  const handleStart = (clientX) => {
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX) => {
    if (dragStart === null) return;
    const diff = clientX - dragStart;
    setDragOffset(Math.max(-280, Math.min(280, diff)));
  };

  const handleEnd = () => {
    if (dragStart === null) return;
    const threshold = 65;
    if (dragOffset < -threshold) {
      // Drag left -> next project
      setSelectedItemIndex((prev) => (prev + 1) % projects.length);
    } else if (dragOffset > threshold) {
      // Drag right -> prev project
      setSelectedItemIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
    setDragStart(null);
    setDragOffset(0);
  };

  const getCardStyle = (index) => {
    const N = projects.length;
    let offset = index - selectedItemIndex;

    // Circular wrap-around for 360-degree rotation logic
    if (offset < -Math.floor(N / 2)) offset += N;
    if (offset > Math.floor(N / 2)) offset -= N;

    const absOffset = Math.abs(offset);
    const isDragging = dragStart !== null;

    const dragTilt = isDragging ? dragOffset * 0.08 : 0;
    const dragTranslate = isDragging ? (dragOffset / window.innerWidth) * 100 : 0;

    const transitionStyle = isDragging
      ? "none"
      : "transform 0.85s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.85s, visibility 0.85s";

    if (offset === 0) {
      return {
        transform: `perspective(1500px) rotateY(${dragTilt}deg) translate3d(${dragTranslate}vw, 0, 0) scale(1)`,
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto",
        visibility: "visible",
        transition: transitionStyle,
      };
    } else if (offset < 0) {
      return {
        transform: `perspective(1500px) rotateY(${38 + dragTilt}deg) translate3d(${-35 * absOffset + dragTranslate}%, 0, -220px) scale(0.82)`,
        zIndex: 10 - absOffset,
        opacity: absOffset > 1 ? 0 : 0.5,
        pointerEvents: absOffset > 1 ? "none" : "auto",
        visibility: absOffset > 1 ? "hidden" : "visible",
        transition: transitionStyle,
      };
    } else {
      return {
        transform: `perspective(1500px) rotateY(${-38 + dragTilt}deg) translate3d(${35 * absOffset + dragTranslate}%, 0, -220px) scale(0.82)`,
        zIndex: 10 - absOffset,
        opacity: absOffset > 1 ? 0 : 0.5,
        pointerEvents: absOffset > 1 ? "none" : "auto",
        visibility: absOffset > 1 ? "hidden" : "visible",
        transition: transitionStyle,
      };
    }
  };

  return (
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

      {/* 3D Drag Carousel Container */}
      <div
        className="carousel-3d-container project-carousel-container"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        style={{ cursor: dragStart !== null ? "grabbing" : "grab", userSelect: "none" }}
      >
        {projects.map((project, index) => {
          const style = getCardStyle(index);
          const isSelectable = index !== selectedItemIndex;
          return (
            <div
              key={index}
              className={`carousel-3d-card glass-panel project-card-3d ${
                index === selectedItemIndex ? "active" : ""
              }`}
              style={style}
              onClick={isSelectable ? () => setSelectedItemIndex(index) : undefined}
            >
              <div className="details-inner">
                <h3 className="title text-gradient">{project.name}</h3>
                <h4 className="subtitle">{project.title}</h4>
                <p className="description">
                  <span className="label">Description:</span> {project.description}
                </p>

                <div className="project-card-footer">
                  <a
                    className="visit-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub Link &rarr;
                  </a>

                  <div className="skills-row">
                    {project.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="project-skill-badge" title={skill.name}>
                        <img src={skill.logo} alt={skill.name} className="badge-logo" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
