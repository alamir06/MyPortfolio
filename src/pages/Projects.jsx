import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../card/ProjectCard';
import '../styles/project.css';
import { Projects } from '../Data/ProjectData';
import { FaReact, FaTelegram } from 'react-icons/fa';
const tabs = ['Website', 'Software', 'Javascript'];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('Website');
  const filteredProjects = Projects.filter((p) => p.tab === activeTab);

  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="projects-title"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What I've Done!
      </motion.h2>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            id={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgUrl}
            link={project.link}

          />
        ))}
      </motion.div>
    </section>
  );
}
