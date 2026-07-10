import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experiences", label: "Experiences" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeSection, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.documentElement.setAttribute("data-theme", saved ? "dark" : "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setIsMenuOpen(false);
    navigateTo(id);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand" onClick={() => handleNav("hero")}>
        <span className="navbar__brand-text text-gradient">SH</span>
        <span className="navbar__brand-dot" />
      </div>

      <div className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
        <ul>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`navbar__link ${activeSection === id ? "navbar__link--active" : ""}`}
                onClick={() => handleNav(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar__right">
        <button
          className="navbar__theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          <span className="navbar__theme-track">
            <span className={`navbar__theme-thumb ${darkMode ? "navbar__theme-thumb--dark" : ""}`}>
              {darkMode ? "🌞" : "🌙"}
            </span>
          </span>
        </button>

        <button
          className={`navbar__hamburger ${isMenuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
};

export default Navbar;
