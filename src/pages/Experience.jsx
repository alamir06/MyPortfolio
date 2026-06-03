import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/experience.css';
import { ExperienceList } from '../Data/ExerienceData';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontends = ExperienceList.filter(exp => exp.title.includes('Frontend'));
  const backends = ExperienceList.filter(exp => exp.title.includes('Backend'));

  const renderTimeline = (experiences) => (
    <div className="timeline" style={{ marginBottom: '2rem' }}>
      {experiences.map((exp, index) => (
        <motion.div
          key={`exp-${index}`}
          className="timeline-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            {/* <h3>{exp.title}</h3> */}
            <div className="time-org">
              <div className="time-item">
                <h4>{exp.org}</h4>
                <span className="timeline-date">{exp.date}</span>
              </div>
            </div>
            <ul className="task-list" style={{ marginTop: '1rem', paddingLeft: '1.2rem', color: 'var(--text-color)', lineHeight: '1.6' }}>
              {exp.tasks.map((task, tIdx) => (
                <li key={tIdx} style={{ marginBottom: '0.4rem' }}>{task}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="experience-tabs">
        <button 
          className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          Backend 
        </button>
      </div>

      <div className="experience-layout">
        <div className={`experience-column ${activeTab !== 'frontend' ? 'mobile-hidden' : ''}`}>
          <h3 className="column-title desktop-only">As a Frontend Developer</h3>
          {renderTimeline(frontends)}
        </div>
        <div className={`experience-column ${activeTab !== 'backend' ? 'mobile-hidden' : ''}`}>
          <h3 className="column-title desktop-only">As a Backend Developer</h3>
          {renderTimeline(backends)}
        </div>
      </div>
    </section>
  );
}
