import Lottie from "lottie-react";
import Animation from "../../Animation.json";
import Tilt3D from "../3D/Tilt3D.jsx";
import "./About.css";

const About = () => {
  return (
    <div className="container space">
      <div className="section-heading">
        <h2 className="text-gradient">About Me</h2>
        <div className="section-divider" />
        <p>Passionate developer, lifelong learner, and tea enthusiast 🍵</p>
      </div>

      <div className="about-layout">
        {/* Left Column: Lottie Animation with glowing frame */}
        <div className="about-lottie-col">
          <div className="about-lottie-wrapper">
            <div className="about-lottie-aura" />
            <Lottie animationData={Animation} className="about-lottie" />
          </div>
        </div>

        {/* Right Column: Bio Deck & Stats Dashboard */}
        <div className="about-bio-col">
          <Tilt3D className="glass-panel about-bio-card" max={5} scale={1.01} glare>
            <div className="about-bio-inner">
              <p className="about-intro">
                Hello! I'm <span className="text-gradient">Sazzad Himel</span>.
              </p>

              <p className="about-bio">
                Passionate about <strong>Data Analysis</strong> with a strong interest in <strong>AI, Machine Learning, and Deep Learning. </strong>
                Skilled in developing data-driven solutions, predictive models, and scalable applications using modern technologies
                such as <strong>FastAPI</strong> and <strong>full-stack development frameworks</strong>. Enthusiastic about extracting insights from data
                and applying AI techniques to solve <strong>real-world problems</strong>.
              </p>

              {/* Statistics Counter Grid */}
              <div className="about-stats-grid">
                <div className="about-stat-item">
                  <div className="about-stat-icon">💻</div>
                  <div className="about-stat-info">
                    <h4 className="about-stat-number text-gradient">2+ Years</h4>
                    <p className="about-stat-label">Coding Practice</p>
                  </div>
                </div>

                <div className="about-stat-item">
                  <div className="about-stat-icon">🚀</div>
                  <div className="about-stat-info">
                    <h4 className="about-stat-number text-gradient">15+ Completed</h4>
                    <p className="about-stat-label">Projects Managed</p>
                  </div>
                </div>

                <div className="about-stat-item">
                  <div className="about-stat-icon">🏆</div>
                  <div className="about-stat-info">
                    <h4 className="about-stat-number text-gradient">5+ Professional</h4>
                    <p className="about-stat-label">Certifications</p>
                  </div>
                </div>

                <div className="about-stat-item">
                  <div className="about-stat-icon">⚡</div>
                  <div className="about-stat-info">
                    <h4 className="about-stat-number text-gradient">3+ frameworks</h4>
                    <p className="about-stat-label">FastAPI, MERN, Laravel</p>
                  </div>
                </div>
              </div>

              {/* Tech Chips */}
              <div className="about-chips">
                <span className="about-chip about-chip--indigo">🚀 Full-Stack</span>
                <span className="about-chip about-chip--cyan">🤖 AI & ML</span>
                <span className="about-chip about-chip--pink">🐍 Python</span>
                <span className="about-chip about-chip--violet">⚡ FastAPI</span>
              </div>
            </div>
          </Tilt3D>
        </div>
      </div>
    </div>
  );
};

export default About;
