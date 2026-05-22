import { motion } from 'framer-motion';
import '../styles/experience.css';
import { ExperienceList } from '../Data/ExerienceData';
import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      
      {/* Experience Section */}
      <h2>Experience</h2>
      <div className="timeline" style={{ marginBottom: '4rem' }}>
        {ExperienceList.map((exp, index) => (
          <motion.div
            key={`exp-${index}`}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
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

    </section>
  );
}
