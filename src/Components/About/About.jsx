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
        <div className="about-lottie-col">
          <Lottie animationData={Animation} className="about-lottie" />
        </div>

        <Tilt3D className="glass-panel about-bio-card" max={6} scale={1.01} glare>
          <div className="about-bio-inner">
            <p className="about-intro">
              Hello! I'm <span className="text-gradient">Sazzad Himel</span>.
            </p>
            <p className="about-bio">
              Developer with practical experience in{" "}
              <strong>AI, Machine Learning, Deep Learning, and full-stack development</strong>{" "}
              using <strong>MERN, Laravel and FastAPI</strong> frameworks. Applied data-driven
              methods and back-end integration to build scalable web applications and AI-based
              tools. Interested in solving real-world challenges through automation, predictive
              modeling, and robust system design.
            </p>

            <div className="about-chips">
              <span className="about-chip about-chip--indigo">🚀 Full-Stack</span>
              <span className="about-chip about-chip--cyan">🤖 AI & ML</span>
              <span className="about-chip about-chip--pink">🐍 Python</span>
              <span className="about-chip about-chip--violet">⚡ MERN</span>
            </div>
          </div>
        </Tilt3D>
      </div>

    </div>
  );
};

export default About;
