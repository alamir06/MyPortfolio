import React, { useState } from 'react';
import { FiCode, FiSmartphone, FiGlobe, FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import './web.css'
import { projects, methodology } from '../../../Data/WebDetails'; // Adjust the import path as necessary
import Footer from '../../components/FooterDetails/FooterDetails';
const DevelopmentShowcase = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div className="dev-showcase">
      {/* Header */}
      <div className="showcase-header">
        <h2>My Development Process</h2>
        <p>From concept to deployment, here's how I build digital experiences</p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-nav">
        <button 
          className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
          onClick={() => setActiveTab('web')}
        >
          <FiGlobe className="tab-icon" />
          Web Development
        </button>
        <button 
          className={`tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          <FiSmartphone className="tab-icon" />
          Mobile Development
        </button>
      </div>

      {/* Methodology */}
      <div className="methodology-section">
        <h3>My {activeTab === 'web' ? 'Web' : 'Mobile'} Development Approach</h3>
        <div className="methodology-grid">
          {methodology[activeTab].map((step, index) => (
            <div key={index} className="methodology-card">
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="projects-section">
        <h3>Featured {activeTab === 'web' ? 'Web' : 'Mobile'} Projects</h3>
        <div className="projects-grid">
          {projects[activeTab].map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
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
                <button className="view-process-btn">
                  View development process
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
            
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            
            <h4>Development Process</h4>
            <ul className="process-steps">
              {selectedProject.process.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ul>
            
            <div className="modal-footer">
              {selectedProject.github && (
                <a href={selectedProject.github} className="github-btn">
                  <FiGithub /> View Code
                </a>
              )}
              {selectedProject.live && (
                <a href={selectedProject.live} className="live-btn">
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
          <Footer />
    </div>

  );
};

export default DevelopmentShowcase;