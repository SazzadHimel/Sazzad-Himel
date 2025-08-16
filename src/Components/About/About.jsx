import React from 'react';
import SubHeader from '../Sub-Header/SubHeader.jsx';
import './About.css';
import Animation from "../../Animation.json";
import Lottie from "lottie-react"; 

const About = () => {
  return (
    <div>
      <SubHeader title="About Me" />
      <div className="container space">
        <div>
          <h2 class="about-title">
            Full-Stack Developer <span>|</span> MERN <span>|</span> JavaScript <span>|</span> Laravel <span>|</span> PHP <span>|</span> Data Science & Ai <span>|</span> Python
          </h2>
        </div>
        <div className="about">
          <div className="about-left">
            <Lottie animationData={Animation} />
          </div>
          <div className="about-right">
            <p className="about-intro">Hello! I'm <strong>Sazzad Himel</strong>.</p>
            <p>
            Developer with practical experience in <strong>AI, Machine Learning, Deep Learning, and full-stack development </strong>
            using <strong>MERN, Laravel and FastAPI</strong> frameworks. Applied data-driven methods and back-end integration to
            build scalable web applications and AI-based tools. Interested in solving real-world challenges through automation,
            predictive modeling, and robust system design in the field of Data Science & Ai.
            </p>
          </div>
        </div>
      
        <div className="about-content">
          <p className="about-extra">Outside tech, I’m a tea lover and enjoy meeting new people 🤝🍵</p>
          <ul className="experience-list">
            <li><strong>Former Senior Executive</strong> | Creative Department | BRAC University Computer Club <br /> <span>(Oct 2021 - Dec 2024)</span></li>
            <li><strong>Former Senior Executive</strong> | Event Management | BRAC University Research For Development Club <br /> <span>(Apr 2023 - Jun 2024)</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
