import React, { useState } from 'react';
import { achievements } from '../../Resources/Achievemnets.jsx';
import SubHeader from '../Sub-Header/SubHeader.jsx';
import './Achievements.css';

const Achievements = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const selectedAchievement = achievements[selectedIndex];

    return (
        <div>
        <SubHeader title="Achievements" />
        <div className="container space">
            <div className="tabs">
            {achievements.map((item, index) => (
                <div
                key={index}
                className={`tab ${selectedIndex === index ? 'active' : ''}`}
                onClick={() => setSelectedIndex(index)}
                >
                {item.name}
                </div>
            ))}
            </div>

            <div className="content-layout">
            <div className="details-column">
                <h3 className="title">{selectedAchievement.name}</h3>
                <p className="description">
                <span className="label">Description:</span> {selectedAchievement.description}
                </p>
                <div
                    className="achievement-details"
                    dangerouslySetInnerHTML={{ __html: selectedAchievement.details }}
                    ></div>
                {/* <p className="label">Skills Learned:</p>
                <div className="skills-grid">
                {selectedAchievement.skills.map((skill, i) => (
                    <div key={i} className="skill-card">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
                </div> */}
                <a
                href={selectedAchievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                >
                View Certificate →
                </a>
            </div>

            <div className="certificate-column">
                <img
                src={selectedAchievement.image}
                alt={selectedAchievement.name}
                className="certificate-image"
                onClick={() => setModalOpen(true)}
                />
            </div>
            </div>

            {modalOpen && (
            <div className="modal" onClick={() => setModalOpen(false)}>
                <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                <img
                src={selectedAchievement.image}
                className="modal-content"
                alt="Certificate"
                onClick={(e) => e.stopPropagation()}
                />
            </div>
            )}
        </div>
        </div>
    );
};

export default Achievements;
