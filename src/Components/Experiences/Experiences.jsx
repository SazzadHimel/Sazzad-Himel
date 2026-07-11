import { useState } from "react";
import { experience } from "../../Resources/Experiences.jsx";
import "./Experiences.css";

const Experiences = () => {
  const [selected, setSelected] = useState(0);
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
      // Drag left -> next experience
      setSelected((prev) => (prev + 1) % experience.length);
    } else if (dragOffset > threshold) {
      // Drag right -> prev experience
      setSelected((prev) => (prev - 1 + experience.length) % experience.length);
    }
    setDragStart(null);
    setDragOffset(0);
  };

  const getCardStyle = (index) => {
    const N = experience.length;
    let offset = index - selected;

    // Circular wrapping logic
    if (offset < -Math.floor(N / 2)) offset += N;
    if (offset > Math.floor(N / 2)) offset -= N;

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
    } else {
      const directionX = offset > 0 ? 1 : -1;
      return {
        transform: `perspective(1500px) rotateY(${-38 * directionX + dragTilt}deg) translate3d(${35 * directionX + dragTranslate}%, 0, -220px) scale(0.82)`,
        zIndex: 5,
        opacity: 0.5,
        pointerEvents: "auto",
        visibility: "visible",
        transition: transitionStyle,
      };
    }
  };

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

      {/* 3D Drag Carousel Content */}
      <div
        className="carousel-3d-container experience-carousel-container"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        style={{ cursor: dragStart !== null ? "grabbing" : "grab", userSelect: "none" }}
      >
        {experience.map((exp, index) => {
          const style = getCardStyle(index);
          const isSelectable = index !== selected;
          return (
            <div
              key={index}
              className={`carousel-3d-card glass-panel exp-card-3d ${
                index === selected ? "active" : ""
              }`}
              style={style}
              onClick={isSelectable ? () => setSelected(index) : undefined}
            >
              <div className="exp-card__inner">
                <div className="exp-card__header">
                  <h3 className="exp-card__title text-gradient">{exp.title}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-card__link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🔗 Visit Website &rarr;
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
