import { motion } from 'framer-motion';
import '../styles/experience.css';
import {Experiences} from '../Data/ExerienceData';

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
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.org}</h4>
              <span className="timeline-date">{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
