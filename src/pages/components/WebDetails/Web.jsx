import React, { useState } from 'react';
import { FiGlobe, FiSmartphone, FiGithub, FiExternalLink, FiX, FiCode } from 'react-icons/fi';
import './web.css'
import { projects, methodology } from '../../../Data/WebDetails'; // Adjust the import path as necessary
import Footer from '../../components/FooterDetails/FooterDetails';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import ExperienceNote from '../Consulting/Consulting';

const DevelopmentShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const activeTab = 'web';

  return (
    <div className="dev-showcase">
      {/* Header */}
      <div className="showcase-header">
        <h2>Website Development Approach</h2>
        <p>From concept to deployment, here's how I build digital experiences</p>
      </div>

      {/* Methodology */}
      <div className="methodology-section">
        <div className="methodology-flow">
          {methodology[activeTab].map((step, index) => (
            <React.Fragment key={index}>
              <div className="methodology-step">
                <div className="step-icon">{step.icon}</div>
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <ul className="step-description-list">
                    {step.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < methodology[activeTab].length - 1 && (
                <div className="step-arrow">➔</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="project-section">
        <h3>Featured Projects</h3>
        <div className="project-cards">
          {projects[activeTab].map(project => (
            <div 
              key={project.id} 
              className="project-cardeach"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <div className="project-links">
                    {project.github && <a href={project.github}><FiGithub /></a>}
                    {project.live && <a href={project.live}><FiExternalLink /></a>}
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
                <button className="download-btn" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }} onClick={() => setSelectedProject(project)}>
                  View Project Details
                  <FiCode />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              <FiX />
            </button>
            
            <h3>{selectedProject.title}</h3>
            
            <div className="modal-image" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
              <ProjectCarousel images={selectedProject.images || [selectedProject.image]} />
            </div>
            
            <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-color)', textAlign: 'center' }}>{selectedProject.description}</p>
            
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div style={{ marginBottom: '2rem', textAlign: 'left', background: 'rgba(0,0,0,0.03)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--hero-title-color)' }}>Key Functionalities:</h4>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-color)', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} style={{ lineHeight: '1.5' }}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="tech-tags" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            
            <div className="modal-footer">
              {selectedProject.github && (
                <a href={selectedProject.github} className="download-btn" target="_blank" rel="noreferrer">
                  <FiGithub /> View Code
                </a>
              )}
              {selectedProject.live && (
                <a href={selectedProject.live} className="download-btn" target="_blank" rel="noreferrer">
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <ExperienceNote />
      <Footer />
    </div>
  );
};

export default DevelopmentShowcase;