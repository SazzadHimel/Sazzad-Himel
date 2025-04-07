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
            Full-Stack Developer <span>|</span> MERN <span>|</span> Data Science <span>|</span> Laravel <span>|</span> Python <span>|</span> JavaScript
          </h2>
        </div>
        <div className="about">
          <div className="about-left">
            <Lottie animationData={Animation} />
          </div>
          <div className="about-right">
            <p className="about-intro">Hello! I'm <strong>Sazzad Hossen</strong>.</p>
            <p>
              A dedicated undergraduate student in the Computer Science & Engineering department at <strong>BRAC University</strong>.
              I am committed to excellence, and my versatile skills as a <strong>Web Developer</strong> enable me to craft innovative digital solutions.
              With a deep passion for <strong>Web Design</strong> (Laravel-PHP, MERN-JavaScript), <strong>Machine Learning</strong> (Python), and <strong>Data Science</strong> (Excel, MySQL, NumPy, Seaborn, Pandas),
              I strive to explore and master advancements in these fields, creating impactful and elegant solutions that push boundaries.
            </p>
          </div>
        </div>
      
        <div className="about-content">
          <p className="about-extra">Outside tech, I’m a tea lover and enjoy meeting new people 🤝🍵</p>
          <ul className="experience-list">
            <li><strong>Senior Executive</strong> | Creative Department | BRAC University Computer Club <br /> <span>(October 2023 - November 2024)</span></li>
            <li><strong>Executive</strong> | Graphic Designer | Institute of Young Talent (IYT) <br /> <span>(July 2023 - July 2024)</span></li>
            <li><strong>Senior Executive</strong> | Event Management | BRAC University Research For Development Club <br /> <span>(May 2023 - Feb 2024)</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
