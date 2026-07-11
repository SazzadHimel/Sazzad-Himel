import PropTypes from "prop-types";
import "./Header.css";
import headerImage from "../../assets/Sazzad-Himel.png";
import resumePDF from "../../Documents/SazzadHimel_CV.pdf";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Tilt3D from "../3D/Tilt3D.jsx";

const Header = ({ navigate }) => {
    const handleNavigation = (page) => {
        navigate(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="header container">
            <div className="header-left">
                <Tilt3D max={15} scale={1.06} glare={true} className="profile-tilt-wrapper">
                    <div className="image-glow-container">
                        <img src={headerImage} alt="Profile" className="header-image" />
                    </div>
                </Tilt3D>
            </div>
            <div className="header-right">
                <h1 className="header-name">
                    Hi, I'm <span className="text-gradient">Sazzad Himel</span>
                </h1>
                <p className="header-subtitle">Full-Stack Developer • Tech Enthusiast • Data Science & AI</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/himel.s.hossain" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/sazzad-himel-6205392a3" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                    <a href="https://github.com/SazzadHimel" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                </div>
                <div className="header-cta">
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                        <button className="btn inline-flex items-center gap-2" onClick={() => handleNavigation("home")}>
                            <HiOutlineDocumentText size={20} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default Header;
