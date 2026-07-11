import React from 'react';
import './Logo.css';

const Logo = ({ width = 42, height = 42, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={`custom-logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Background ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="rgba(255, 255, 255, 0.03)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Outer orbits */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="url(#logoGrad)"
        strokeWidth="2.5"
        strokeDasharray="180 70"
        fill="none"
        className="logo-orbit-outer"
        filter="url(#logoGlow)"
      />
      <circle
        cx="50"
        cy="50"
        r="34"
        stroke="url(#logoGrad)"
        strokeWidth="1.5"
        strokeDasharray="100 60"
        fill="none"
        className="logo-orbit-inner"
        opacity="0.7"
      />

      {/* Modern interlocking S and H monogram */}
      <path
        d="M 33,38 C 33,26 48,26 50,33 C 52,40 43,45 40,49 C 37,53 31,59 34,67 C 37,74 52,74 52,62"
        stroke="url(#logoGrad)"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#logoGlow)"
      />
      <path
        d="M 64,28 L 64,72 M 52,50 L 70,50"
        stroke="url(#logoGrad)"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#logoGlow)"
      />
    </svg>
  );
};

export default Logo;
