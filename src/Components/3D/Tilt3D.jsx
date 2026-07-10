import { useRef } from "react";
import PropTypes from "prop-types";

const Tilt3D = ({
  children,
  max = 12,
  scale = 1.03,
  glare = true,
  className = "",
  style = {},
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const el = cardRef.current;
    const rect = el.getBoundingClientRect();

    // Mouse coordinates relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates around center (from -1 to 1)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Calculate tilt (rotations)
    const rotateX = -((y - yc) / yc) * max;
    const rotateY = ((x - xc) / xc) * max;

    // Apply 3D transform directly to the DOM for high performance (avoiding state triggers)
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

    // Glare position calculation
    if (glare && glareRef.current) {
      const gEl = glareRef.current;
      gEl.style.opacity = "1";
      gEl.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)`;
    }
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = "none";
    if (glare && glareRef.current) {
      glareRef.current.style.transition = "none";
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    // Smooth transition back to neutral
    cardRef.current.style.transition = "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

    if (glare && glareRef.current) {
      glareRef.current.style.transition = "opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
      glareRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: "relative",
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            borderRadius: "inherit",
            opacity: 0,
            mixBlendMode: "overlay",
            willChange: "opacity, background",
            zIndex: 99,
          }}
        />
      )}
    </div>
  );
};

Tilt3D.propTypes = {
  children: PropTypes.node.isRequired,
  max: PropTypes.number,
  scale: PropTypes.number,
  glare: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Tilt3D;
