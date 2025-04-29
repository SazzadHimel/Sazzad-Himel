import PropTypes from "prop-types";
import "./Header.css";
import headerImage from "../../assets/SazzadHimel.jpg";
import resumePDF from "../../Documents/SazzadHimel_CV.pdf";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

const Header = ({ navigate }) => {
    const handleNavigation = (page) => {
        navigate(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="header container">
            <div className="header-left">
                <img src={headerImage} alt="Profile" className="header-image" />
            </div>
            <div className="header-right">
                <h1>
                    <span className="skills-heading">Hi, I'm Sazzad Himel</span>
                </h1>
                <p>Full-Stack Developer • Tech Enthusiast • Data Science & Ai</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/himel.s.hossain" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/sazzad-hossen-6205392a3" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/SazzadHimel" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
                <div>
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                        <button className="btn" onClick={() => handleNavigation("home")}>
                            <HiOutlineDocumentText className="inline mr-2"/> Resume
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
