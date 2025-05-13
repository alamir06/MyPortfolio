import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGithub, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNestjs } from 'react-icons/si';
import '../styles/techstack.css';

const techStacks = {
  Frontend: [
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#007ACC" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss color="#38BDF8" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'NestJS', icon: <SiNestjs color="#E0234E" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
  ],
  DevOps: [
    { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
    { name: 'AWS', icon: <FaAws color="#FF9900" /> },
    { name: 'GitHub', icon: <FaGithub color="#181717" /> },
  ],
};

export default function TechStackSection() {
  return (
    <section className="tech-section" id="tech">
      <h2>Tech Stack / Skills</h2>
      <div className="tech-categories">
        {Object.entries(techStacks).map(([category, techs], i) => (
          <motion.div
            key={category}
            className="tech-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3>{category}</h3>
            <div className="tech-list">
              {techs.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-item"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="tech-icon">{tech.icon}</div>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
