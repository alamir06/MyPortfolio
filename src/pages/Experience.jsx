import { motion } from 'framer-motion';
import '../styles/experience.css';
import {Experiences} from '../Data/ExerienceData';
import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience & Education</h2>
      <div className="timeline">
        {Experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dots" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
           <div className="time-org">
  {exp.timeorg.map((item, index) => (
    <React.Fragment key={index}>
      <div className="time-item">
        <h4>{item.org}</h4>
        <span className="timeline-date">{item.date}</span>
      </div>
      {index < exp.timeorg.length - 1 && <div className="vertical-line" />}
    </React.Fragment>
  ))}
</div>

            <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
