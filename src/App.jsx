import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experiences from "./Components/Experiences/Experiences.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Achievements from "./Components/Achievements/Achievements.jsx";
import CanvasBackground from "./Components/3D/CanvasBackground.jsx";
import Preloader from "./Components/Preloader/Preloader.jsx";

const SECTIONS = ["hero", "about", "skills", "experiences", "achievements", "projects", "contact"];

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection Observer to track active section & trigger vertical animations
  useEffect(() => {
    if (!loaded) return;

    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
              entry.target.classList.add("section--in-view");
            }
          });
        },
        { threshold: 0.15 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [loaded]);

  const navigateTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!loaded) {
    return <Preloader onComplete={() => setLoaded(true)} />;
  }

  return (
    <div className="app-wrapper">
      <CanvasBackground />
      <Navbar activeSection={activeSection} navigateTo={navigateTo} />

      <main>
        <section id="hero" className="page-section">
          <Hero navigateTo={navigateTo} />
        </section>

        <section id="about" className="page-section">
          <About />
        </section>

        <section id="skills" className="page-section">
          <Skills />
        </section>

        <section id="experiences" className="page-section">
          <Experiences />
        </section>

        <section id="achievements" className="page-section">
          <Achievements />
        </section>

        <section id="projects" className="page-section">
          <Projects />
        </section>

        <section id="contact" className="page-section">
          <Contact />
        </section>
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
