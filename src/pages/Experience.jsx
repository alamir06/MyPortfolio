import { motion } from 'framer-motion';
import '../styles/experience.css';

const experiences = [
  {
    title: 'Frontend Developer',
    org: 'TechNova Solutions',
    date: '2022 - Present',
    description: 'Developed modern web apps using React and TypeScript, implementing reusable components and responsive designs.',
  },
  {
    title: 'Backend Developer Intern',
    org: 'CloudServe Inc.',
    date: '2021 - 2022',
    description: 'Worked on Node.js microservices, database schemas in PostgreSQL, and API integrations with external services.',
  },
  {
    title: 'BSc in Computer Science',
    org: 'Modern Tech University',
    date: '2018 - 2021',
    description: 'Studied software engineering, data structures, and full-stack development. Participated in hackathons and tech events.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience & Education</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
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
