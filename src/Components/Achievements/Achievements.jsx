import { achievements } from "../../Resources/Achievemnets.jsx";
import Tilt3D from "../3D/Tilt3D.jsx";
import "./Achievements.css";

const COLORS = ["indigo", "cyan", "pink", "violet", "emerald"];

const Achievements = () => {
  return (
    <div className="container space">
      <div className="section-heading">
        <h2 className="text-gradient">Achievements</h2>
        <div className="section-divider" />
        <p>Professional certifications and courses I've completed.</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, i) => (
          <Tilt3D
            key={i}
            className={`glass-panel achievement-card achievement-card--${COLORS[i % COLORS.length]}`}
            max={8}
            scale={1.03}
            glare
          >
            <div className="achievement-card__top-bar" />
            <div className="achievement-card__body">
              <div className="achievement-card__icon">🏆</div>
              <h3 className="achievement-card__name">{item.name}</h3>
              <p className="achievement-card__desc">{item.description}</p>

              <div
                className="achievement-card__details"
                dangerouslySetInnerHTML={{ __html: item.details }}
              />

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`achievement-card__btn achievement-card__btn--${COLORS[i % COLORS.length]}`}
              >
                View Certificate →
              </a>
            </div>
          </Tilt3D>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
