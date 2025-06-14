import React, { useState } from 'react';
import { FiCpu, FiCode, FiDatabase, FiLayers, FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import './software.css'; 
import aa from '../../../assets/image/aa.jpg'; 
import Footer from '../../components/FooterDetails/FooterDetails';
import flower from '../../../assets/image/flower.jpg'; 
import { GiBasket } from 'react-icons/gi';
import bole from "../../../assets/image/bole.png";
import Technsophia from "../../../assets/image/Technosophia.png";

const SoftwareAIShowcase = () => {
  const [activeTab, setActiveTab] = useState('software');
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data
  const projects = {
    software: [
      {
        id: 1,
        title: "Hotel StreamLine Platform",
        description: "Scalable business management solution with microservices architecture",
        technologies: ["TypeScript", "NestJs", "typeorm", "PostgreSQL", "Docker",],
        image: aa,
        github: "https://github.com/Timewize-Systems/gpiisms-dev_api",
        live: "https://github.com/Timewize-Systems/gpiisms-dev_api",
        process: [
          "Requirements Gather and analysis with stakeholders",
          "System architecture design",
          "CI/CD pipeline implementation",
          "Microservices development",
          "Load testing and optimization",
          "Deployment on cloud infrastructure",
          "Monitoring and maintenance"
        ]
      },
      {
              id: 2,
              title: "Customer Feedback monitoring System",
              description: "Built with React, NestJs, and Postgress with Great Collaboration",
              technologies: ["React", "NestJs", "Postgress", "📂"],
              image: bole,
              github: "#",
              live: "https://cfmsui.technosophia.net/",
              process: [
                "Discuss with The client to understand the requirements",
                "Market research and competitive analysis",
                "UI/UX design in Figma",
                "Frontend development with React",
                "Backend API development with NestJs",
                "Database integration with Postgress",
                "Deployment on  Yegara hosting",
                "Testing and bug fixing",
              ]
            },
            {
                    id: 3,
                    title: "Technosophia IT Solutions ",
                    description: "Built with React, NestJs, and Postgress with Great Collaboration",
                    technologies: ["React", "NestJs", "Postgress", "📂","🙏"],
                    image: Technsophia,
                    github: "#",
                    live: "https://technosophia.net/",
                    process: [
                      "discuss with The Technosophia Team to understand the requirements",
                      "UI/UX design in Figma",
                      "Frontend development with React",
                      "Backend API development with NestJs for  Blog and Portfolio",
                      "Database integration with Postgress for Blog",
                      "Deployment on  Yegara hosting",
                      "Testing and bug fixing",
                    ]
                  },
    ],
    ai: [
      {
        id: 1,
        title: "Predictive Analytics for Flower species classification", 
        description: "Machine learning model for flower species forecasting",
        technologies: ["Python", "TensorFlow", "Pandas", "Flask"],
        image: flower,
        github: "#",
        live: "#",
        process: [
          "Data collection and preprocessing",
          "Exploratory data analysis",
          "Model selection and tuning",
          "Feature engineering",
          "Model training and validation",
          "API development for integration",
          "Performance monitoring"
        ]
      },
      {
        id: 2,
        title: "Computer Vision System",
        description: "Cooming Soon",
        technologies: ["PyTorch", "OpenCV", "FastAPI", "ONNX"],
        // image: "/images/cv-system.jpg",
        // github: "#",
        // live: "#",
        process: [
          "Dataset collection and annotation",
          "Model architecture selection",
          "Training on GPU cluster",
          "Edge deployment optimization",
          "Accuracy benchmarking"
        ]
      }
    ]
  };

  // Development methodology
  const methodology = {
    software: [
      { title: "Planning", icon: <FiCpu />, description: "Project scoping and requirements" },
      { title: "Requirment Gathering", icon: <GiBasket />, description: "Requirement gathering and anlalysis" },
      { title: "Architecture", icon: <FiLayers />, description: "System design and planning" },
      { title: "Development", icon: <FiCode />, description: "Clean code implementation" },
      { title: "Testing", icon: "🧪", description: "Automated test suites" },
      { title: "Deployment", icon: "🚀", description: "CI/CD pipelines" },
      { title: "Maintenance", icon: "🔧", description: "Ongoing support and updates" }

    ],
    ai: [
      { title: "Data Collection", icon: "📊", description: "Gathering datasets" },
      { title: "Research", icon: "🔍", description: "Literature review" },
      { title: "Prototyping", icon: "🧠", description: "Model experimentation" },
      { title: "Training", icon: "⚡", description: "GPU-accelerated learning" },
      { title: "Evaluation", icon: "📏", description: "Model performance assessment" },
      { title: "Deployment", icon: "🤖", description: "Production integration" },
      { title: "Monitoring", icon: "📈", description: "Model performance tracking" },
    ]
  };

  return (
    <div className="software-ai-showcase">
      <div className="showcase-header">
        <h2>Software & AI Development</h2>
        <p>End-to-end solutions from system architecture to intelligent algorithms</p>
      </div>

      <div className="tab-nav">
        <button 
          className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`}
          onClick={() => setActiveTab('software')}
        >
          <FiCpu className="tab-icon" />
          Software Engineering
        </button>
        <button 
          className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          <FiDatabase className="tab-icon" />
          AI Development
        </button>
      </div>

      {/* Methodology */}
<div className="methodology-section">
  <h3>My {activeTab === 'software' ? 'Software' : 'AI'} Development Approach</h3>
  <div className="methodology-grid">
    {methodology[activeTab].map((step, index) => (
      <div key={index} className="mesob-wrapper">
        {/* <div className="mesob-base" /> */}
        {/* <div className="arrow-forward" /> */}
        <div className="methodology-card">
          <div className="step-icon">{step.icon}</div>
          <h4>{step.title}</h4>
          <p>{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Projects */}
      <div className="projectss-sections">
        <h3>Featured {activeTab === 'software' ? 'Software' : 'AI'} Projects</h3>
        <div className="projectss-grid">
          {projects[activeTab].map(project => (
            <div 
              key={project.id} 
              className="projectss-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="projectss-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="projectss-content">
                <div className="projectss-header">
                  <h4>{project.title}</h4>
                  <div className="projectss-links">
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
        <div className="projectss-modal">
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

export default SoftwareAIShowcase;