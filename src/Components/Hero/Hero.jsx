import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import resumePDF from "../../Documents/SazzadHimel_CV.pdf";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import Tilt3D from "../3D/Tilt3D.jsx";
import PropTypes from "prop-types";
import heroImage from "../../assets/Sazzad-Himel.png";

const TYPING_STRINGS = [
  "Data Analyst",
  "Full-Stack Developer",
  "Machine Learning Expert",
  "Data Science & AI",
];

const Hero = ({ navigateTo }) => {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentStr = TYPING_STRINGS[stringIndex];
    let delay = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentStr.slice(0, charIndex + 1));
        if (charIndex + 1 === currentStr.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(currentStr.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex((i) => (i + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex]);

  return (
    <div className={`hero-wrapper container ${visible ? "hero--visible" : ""}`}>

      {/* Left: Image */}
      <div className="hero-left">
        <Tilt3D max={14} scale={1.05} glare={true} className="hero-img-tilt">
          <div>
            <div className="hero-img-ring hero-img-ring--1" />
            <div className="hero-img-ring hero-img-ring--2" />
            <img src={heroImage} alt="Sazzad Himel" className="hero-img" />
          </div>
        </Tilt3D>
      </div>

      {/* Right: Text */}
      <div className="hero-right">
        <span className="section-label">Welcome to my Portfolio</span>

        <h1 className="hero-name">
          Hi, I'm{" "}
          <span className="text-gradient">Sazzad Himel</span>
        </h1>

        <div className="hero-typing-wrapper">
          <span className="hero-typing-text">{displayText}</span>
          <span className="hero-cursor">|</span>
        </div>

        <p className="hero-bio">
          Passionate about <strong>Data Analysis</strong> with a strong interest in <strong>AI, Machine Learning, and Deep Learning. </strong>
          Skilled in developing data-driven solutions, predictive models, and scalable applications using modern technologies
          such as <strong>FastAPI</strong> and <strong>full-stack development frameworks</strong>. Enthusiastic about extracting insights from data
          and applying AI techniques to solve <strong>real-world problems</strong>.
        </p>

        <div className="hero-tags">
          <span className="tag-badge">🎨 Data Analytics</span>
          <span className="tag-badge">🤖 AI & ML</span>
          <span className="tag-badge">🐍 Python</span>
          <span className="tag-badge">🚀 FastAPI</span>
          <span className="tag-badge">⚡ MERN Stack</span>
        </div>

        <div className="hero-actions">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <button className="btn">
              <HiOutlineDocumentText size={18} style={{ marginRight: 8, verticalAlign: "middle" }} />
              View Resume
            </button>
          </a>
          <button className="btn btn--outline" onClick={() => navigateTo("contact")}>
            Let's Talk
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://www.facebook.com/himel.s.hossain" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/sazzad-himel-6205392a3" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SazzadHimel" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default Hero;
