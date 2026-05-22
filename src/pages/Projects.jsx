import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/project.css';
import '../pages/components/Software/software.css';
import { Projects } from '../Data/ProjectData';

const tabs = ['System', 'Website', 'ML'];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('System');
  const filteredProjects = Projects.filter(
    (p) => p.tab === activeTab && p.description?.toLowerCase() !== "coming soon"
  );

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
          <div key={index} className="project-cardeach">
            <div className="project-image">
              <img src={project.imgUrl} alt={project.title} />
              <div className="image-overlay"></div>
            </div>
            <div className="project-content">
              <div className="project-header">
                <h4>{project.title}</h4>
                <div className="project-links">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer"><FiExternalLink /></a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies?.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link 
          to={filteredProjects[0]?.detailsLink || '/'} 
          className="download-btn" 
          style={{ display: 'inline-flex', padding: '12px 32px', fontSize: '1rem', textDecoration: 'none', borderRadius: '15px' }}
        >
          See More Projects
        </Link>
      </div>
    </section>
  );
}
