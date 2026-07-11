import { useState } from "react";
import { skills } from "../../Resources/Skills.jsx";
import "./Skills.css";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  // Dynamically group skills by category to preserve single source of truth
  const frontend = skills.filter((s) =>
    ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"].includes(s.name)
  );
  const backend = skills.filter((s) =>
    ["Node.js", "Express.js", "Python", "PHP", "Laravel", "MongoDB", "MySQL"].includes(s.name)
  );
  const tools = skills.filter((s) => !frontend.includes(s) && !backend.includes(s));

  const categories = [
    { name: "Frontend Development", skills: frontend, color: "indigo" },
    { name: "Backend & Databases", skills: backend, color: "cyan" },
    { name: "Tools, Data & Graphics", skills: tools, color: "pink" },
  ];

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
      // Drag left -> next category
      setActiveIndex((prev) => (prev + 1) % categories.length);
    } else if (dragOffset > threshold) {
      // Drag right -> prev category
      setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
    }
    setDragStart(null);
    setDragOffset(0);
  };

  const getCardStyle = (index) => {
    const N = categories.length;
    let offset = index - activeIndex;

    // Circular rotation wrapping
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
        zIndex: 5,
        opacity: 0.5,
        pointerEvents: "auto",
        visibility: "visible",
        transition: transitionStyle,
      };
    } else {
      return {
        transform: `perspective(1500px) rotateY(${-38 + dragTilt}deg) translate3d(${35 * absOffset + dragTranslate}%, 0, -220px) scale(0.82)`,
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
        <h2 className="text-gradient">Skills & Technologies</h2>
        <div className="section-divider" />
        <p>A curated collection of technologies grouped by category.</p>
      </div>

      {/* Tabs */}
      <div className="skills-tabs">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`skills-tab ${activeIndex === i ? "skills-tab--active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 3D Drag Carousel Container */}
      <div
        className="carousel-3d-container skills-carousel-container"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        style={{ cursor: dragStart !== null ? "grabbing" : "grab", userSelect: "none" }}
      >
        {categories.map((cat, index) => {
          const style = getCardStyle(index);
          const isSelectable = index !== activeIndex;
          return (
            <div
              key={index}
              className={`carousel-3d-card glass-panel skill-category-card skill-card--${cat.color} ${
                index === activeIndex ? "active" : ""
              }`}
              style={style}
              onClick={isSelectable ? () => setActiveIndex(index) : undefined}
            >
              <div className="skill-category-card__inner">
                <h3 className="skill-category-title text-gradient">{cat.name}</h3>

                <div className="skills-inner-grid">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-box" title={skill.desc}>
                      <img src={skill.logo} alt={skill.name} className="skill-item-logo" />
                      <span className="skill-item-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
