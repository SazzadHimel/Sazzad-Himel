import { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ navigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNavigation = (page) => {
        closeMenu();
        navigate(page);
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar container">
            <div className="brand-name" onClick={() => handleNavigation("home")}>
                Sazzad Hossen.
            </div>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => handleNavigation("home")} className="hover-effect">Home</li>
                    <li onClick={() => handleNavigation("about")} className="hover-effect">About</li>
                    <li onClick={() => handleNavigation("skills")} className="hover-effect">Skills</li>
                    <li onClick={() => handleNavigation("experiences")} className="hover-effect">Experiences</li>
                    <li onClick={() => handleNavigation("projects")} className="hover-effect">Projects</li>
                    <li onClick={() => handleNavigation("contact")} className="hover-effect">Contact</li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bars-icon ${isMenuOpen ? "open" : ""}`}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default Navbar;
