import { useState } from "react";
import { achievements } from "../../Resources/Achievemnets.jsx";
import "./Achievements.css";

const COLORS = ["indigo", "cyan", "pink", "violet", "emerald"];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleStart = (clientX) => {
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX) => {
    if (dragStart === null) return;
    const diff = clientX - dragStart;
    // Limit dragOffset to prevent dragging cards completely off the screen
    setDragOffset(Math.max(-280, Math.min(280, diff)));
  };

  const handleEnd = () => {
    if (dragStart === null) return;
    const threshold = 65;
    if (dragOffset < -threshold) {
      // Drag left -> next card
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    } else if (dragOffset > threshold) {
      // Drag right -> prev card
      setActiveIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    }
    setDragStart(null);
    setDragOffset(0);
  };

  const getCardStyle = (index) => {
    const N = achievements.length;
    let offset = index - activeIndex;

    // Circular rotation offsets
    if (offset < -Math.floor(N / 2)) offset += N;
    if (offset > Math.floor(N / 2)) offset -= N;

    const absOffset = Math.abs(offset);
    const isDragging = dragStart !== null;

    // Calculate interactive drag adjustments (scaled down for natural movement)
    const dragTilt = isDragging ? dragOffset * 0.08 : 0;
    const dragTranslate = isDragging ? (dragOffset / window.innerWidth) * 100 : 0; // in percentage of viewport

    // Smooth transition unless actively dragging
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
      // Left stacked cards
      return {
        transform: `perspective(1500px) rotateY(${38 + dragTilt}deg) translate3d(${-35 * absOffset + dragTranslate}%, 0, -220px) scale(0.82)`,
        zIndex: 10 - absOffset,
        opacity: absOffset > 1 ? 0 : 0.5,
        pointerEvents: "auto",
        visibility: absOffset > 1 ? "hidden" : "visible",
        transition: transitionStyle,
      };
    } else {
      // Right stacked cards
      return {
        transform: `perspective(1500px) rotateY(${-38 + dragTilt}deg) translate3d(${35 * absOffset + dragTranslate}%, 0, -220px) scale(0.82)`,
        zIndex: 10 - absOffset,
        opacity: absOffset > 1 ? 0 : 0.5,
        pointerEvents: "auto",
        visibility: absOffset > 1 ? "hidden" : "visible",
        transition: transitionStyle,
      };
    }
  };

  return (
    <div className="container space">
      <div className="section-heading">
        <h2 className="text-gradient">Achievements</h2>
        <div className="section-divider" />
        <p>Professional certifications and courses I've completed.</p>
      </div>

      {/* Tabs */}
      <div className="achievements-tabs">
        {achievements.map((item, i) => (
          <button
            key={i}
            className={`achievements-tab ${activeIndex === i ? "achievements-tab--active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* 3D Drag Carousel Container */}
      <div
        className="carousel-3d-container achievements-carousel-container"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        style={{ cursor: dragStart !== null ? "grabbing" : "grab" }}
      >
        {achievements.map((item, i) => {
          const style = getCardStyle(i);
          const isSelectable = i !== activeIndex;
          const themeColor = COLORS[i % COLORS.length];
          return (
            <div
              key={i}
              className={`carousel-3d-card glass-panel achievement-card-3d achievement-card--${themeColor} ${
                i === activeIndex ? "active" : ""
              }`}
              style={style}
              onClick={isSelectable ? () => setActiveIndex(i) : undefined}
            >
              <div className="achievement-card__top-bar" />
              <div className="achievement-card__inner">
                {/* Certificate Preview Column (Click to Zoom) */}
                <div
                  className="achievement-card__preview"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent modal click from selecting card
                    setZoomedImg(item.image);
                  }}
                  title="Click to zoom certificate"
                  style={{ cursor: "zoom-in" }}
                >
                  <img src={item.image} alt={item.name} className="achievement-card__image" />
                  <div className="achievement-card__image-overlay">
                    <span>🔍 Click to View Full Size</span>
                  </div>
                </div>

                {/* Information Column */}
                <div className="achievement-card__info">
                  <h3 className="achievement-card__name">{item.name}</h3>
                  <p className="achievement-card__desc">{item.description}</p>

                  <div
                    className="achievement-card__details"
                    dangerouslySetInnerHTML={{ __html: item.details }}
                  />

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`achievement-card__btn achievement-card__btn--${themeColor}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Verify Certificate &rarr;
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* High-Fidelity Lightbox Modal */}
      {zoomedImg && (
        <div className="certificate-lightbox" onClick={() => setZoomedImg(null)}>
          <button
            className="certificate-lightbox__close"
            onClick={() => setZoomedImg(null)}
            aria-label="Close Preview"
          >
            &times;
          </button>
          <div className="certificate-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImg} alt="Certificate Full View" className="certificate-lightbox__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
