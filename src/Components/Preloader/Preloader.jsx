import { useEffect, useRef, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setFading(true);
        setTimeout(onComplete, 700);
      }, 400);
    }
  }, [progress, onComplete]);

  return (
    <div className={`preloader ${fading ? "preloader--fade" : ""}`}>
      <div className="preloader__content">
        <div className="preloader__logo">
          <span className="preloader__logo-text">SH</span>
          <div className="preloader__orbit preloader__orbit--1" />
          <div className="preloader__orbit preloader__orbit--2" />
        </div>
        <p className="preloader__name">Sazzad Himel</p>
        <p className="preloader__tagline">Full-Stack Developer & AI Engineer</p>
        <div className="preloader__bar-wrapper">
          <div
            className="preloader__bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="preloader__percent">{Math.min(Math.floor(progress), 100)}%</p>
      </div>
    </div>
  );
};

export default Preloader;
