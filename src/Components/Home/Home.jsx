import Header from '../Header/Header.jsx';
import Animation from "../../Animation.json";
import Lottie from "lottie-react";
import './Home.css';
import '../About/About.css'; // Load shared About styles
import PropTypes from "prop-types";
import Tilt3D from "../3D/Tilt3D.jsx";

const Home = ({ navigate }) => {
    return (
        <div>
            <Header navigate={navigate} />
            <div className="container space">
                <div className="about">
                    <div className="about-left">
                        <Lottie animationData={Animation} className="about-lottie" />
                    </div>
                    <Tilt3D className="glass-panel about-right" max={6} scale={1.01} glare={true}>
                        <h2 className="about-title-banner" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                            Full-Stack Developer <span className="title-slash">|</span> MERN <span className="title-slash">|</span> JavaScript <span className="title-slash">|</span> Laravel <span className="title-slash">|</span> PHP <span className="title-slash">|</span> Data Science & AI <span className="title-slash">|</span> Python
                        </h2>
                        <p className="about-intro">Hello! I'm <strong className="text-gradient">Sazzad Himel</strong>.</p>
                        <p>
                            Developer with practical experience in <strong>AI, Machine Learning, Deep Learning, and full-stack development </strong>
                            using <strong>MERN, Laravel and FastAPI</strong> frameworks. Applied data-driven methods and back-end integration to
                            build scalable web applications and AI-based tools. Interested in solving real-world challenges through automation,
                            predictive modeling, and robust system design in the field of Data Science & AI.
                        </p>
                    </Tilt3D>
                </div>

                <Tilt3D className="glass-panel skills-heading-card" max={4} scale={1.01} glare={true} style={{ marginTop: '50px', padding: '40px', width: '100%', textAlign: 'center' }}>
                    <h2 className="skills-heading text-gradient" style={{ fontSize: '2rem', marginBottom: '10px' }}>Want to see my works?</h2>
                    <p className="tech-title" style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-muted)' }}>Explore the projects I've built using some technologies.</p>
                    <button className="btn" onClick={() => navigate("projects")}>
                        View Projects
                    </button>
                </Tilt3D>
            </div>
        </div>
    );
};

Home.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default Home;
