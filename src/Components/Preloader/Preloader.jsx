import { useEffect, useState } from "react";
import Logo from "../Logo/Logo.jsx";
import "./Preloader.css";

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
        return p + Math.random() * 12 + 2; // Smooth counting speed
      });
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setFading(true);
        setTimeout(onComplete, 800);
      }, 350);
    }
  }, [progress, onComplete]);

  // SVG parameters for circular loader
  const size = 150;
  const radius = 64;
  const strokeWidth = 3.5;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`preloader ${fading ? "preloader--fade" : ""}`}>
      <div className="preloader__content">
        <div className="preloader__loader-wrapper">
          {/* SVG Progress Circle */}
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="preloader__circle-svg"
          >
            <defs>
              <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            {/* Background track circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Active circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="url(#circleGrad)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              fill="none"
              className="preloader__circle-fill"
            />
          </svg>

          {/* Logo element sitting in the center of the loading progress circle */}
          <div className="preloader__center-logo">
            <Logo width={68} height={68} />
          </div>
        </div>

        {/* Text descriptions */}
        <div className="preloader__text-block">
          <h2 className="preloader__name">Sazzad Himel</h2>
          <p className="preloader__tagline">Data Analyst & AI Engineer</p>
          <div className="preloader__percentage-label">
            {Math.min(Math.floor(progress), 100)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;