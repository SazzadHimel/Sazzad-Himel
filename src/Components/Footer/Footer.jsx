import './Footer.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Footer = ({ navigate }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleNavigation = (page) => {
        navigate(page);
        scrollToTop();
    };

    return (
        <footer>
            <div className="footer">
                <div className="brand-name footer-column" onClick={() => handleNavigation("home")}>
                    Sazzad Himel.
                </div>
                <div className="footer-column">
                    <p>Full-Stack Developer • Tech Enthusiast • Data Scientist
                        <br/> Dhaka 1217, Bangladesh
                    </p>
                </div>
                <div className="footer-column socials-column">
                    <p>Connect me:</p>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/himel.s.hossain" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.linkedin.com/in/sazzad-hossen-6205392a3" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/SazzadHimel" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; Sazzad Himel {new Date().getFullYear()} - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default Footer;
