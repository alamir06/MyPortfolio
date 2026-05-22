import React from 'react';
import { FaSearch, FaPaintBrush, FaLaptopCode, FaRocket, FaWrench, FaMobileAlt, FaPencilRuler, FaCode, FaBoxOpen, FaHeadset, FaCheckCircle, FaSyncAlt,FaFolderOpen, FaReact, FaCss3, FaDatabase, FaUser, FaBrain } from 'react-icons/fa';
import zemzem from "../assets/image/Zemzem.jpg";
import portfolio from "../assets/image/portfolio.png";
import Technsophia from "../assets/image/Technosophia.png";
import Technsophia1 from "../assets/image/Technosophia1.jpg";
import Technsophia2 from "../assets/image/Technosophia2.jpg";
import Technsophia3 from "../assets/image/Technosophia3.jpg";
import Technsophia4 from "../assets/image/Technosophia4.jpg";
import p_image1 from "../assets/image/p-image1.png";
import p_image2 from "../assets/image/p-image2.png";
import p_image3 from "../assets/image/p-image3.png";
import p_image4 from "../assets/image/p-image4.png";
import zemzem1 from "../assets/image/zemzem1.jpg";
import zemzem2 from "../assets/image/zemzem2.jpg";
import zemzem3 from "../assets/image/zemzem3.jpg";
import zemzem4 from "../assets/image/zemzem4.jpg";
import zemzem5 from "../assets/image/zemzem5.jpg";
import zemzem6 from "../assets/image/zemzem6.jpg";
  export const projects = {
    web: [
      {
        id: 1,
        title: "My Portfolio ",
        description: "Built with React,CSS,Canva with Great Commitment",
        technologies: [
          <><FaFolderOpen color="#FFCA28" /> Portfolio</>,
          <><FaReact color="#61DAFB" /> React</>,
          <><FaCss3 color="#1572B6" /> CSS3</>,
          <><FaBrain color="#FF6B6B" /> Logic</>
        ],
        image: portfolio,
        features: [
           "Shows my projects and skills: ",
           "Multi-Discipline Project Showcase: ",
           "Dedicated Data Layer: ",
           "Interactive Modal Galleries: ",
           "Methodology Breakdown: ",
           "Provides an  CV Download: ",
           "Demonstrates responsive UI/UX principles: "],
        images: [portfolio, p_image1, p_image2,p_image3,p_image4],
        github: "https://github.com/alamir06/MyPortfolio",
        live: "https://alamirew.technosophia.net/"
      },
      {
        id: 2,
        title: "Technosophia IT Solutions ",
        description: "Built with React, NestJs, and Postgress with Great Collaboration",
        technologies: [
          <><FaFolderOpen color="#FFCA28" /> Corporate</>,
          <><FaReact color="#61DAFB" /> React</>,
          <><FaCss3 color="#1572B6" /> CSS3</>,
          <><FaUser color="#98D8C8" /> Client</>
        ],
        image: Technsophia,
        features: ["Corporate landing page and service offering display", "Dynamic blog and portfolio content management", "Secure back-office admin dashboard"],
        images: [Technsophia,Technsophia1,Technsophia2,Technsophia3,Technsophia4],
        github: "https://github.com/alamir06",
        live: "https://technosophia.net/"
      },
      {
        id: 3,
        title: "Zemzem Food Complex ",
        description: "Built with React,nestJs, and Mysql with Great Collaboration",
        technologies: [
          <><FaFolderOpen color="#FFCA28" /> Enterprise</>,
          <><FaReact color="#61DAFB" /> React</>,
          <><FaCss3 color="#1572B6" /> CSS3</>,
          <><FaUser color="#98D8C8" /> Admin</>
        ],
        image: zemzem,
        features: [
          "Modern & Responsive UI seamlessly designed with React 19, Vite, and Tailwind CSS",
          "Dynamic Hero Carousel displaying high-quality imagery highlighting core values",
          "Detailed Product Showcase for premium Wheat Flour, Semolina, and Whole Grains",
          "Interactive Contact forms paired with an integrated Google Maps view",
          "Fluid SPA Navigation paired with dynamic multi-language switching capabilities",
          "Interactive 'Grains to Gold' manufacturing process timeline and Testimonials"
        ],
        images: [zemzem, zemzem2,zemzem1, zemzem3, zemzem4, zemzem5, zemzem6],
        github: "https://github.com/alamir06",
        live: "https://zemzem.technosophia.net/"
      }
    ]
  };
  
  export const methodology = {
    web: [
      { title: "Planning & Requirements", icon: <FaSearch />, description: ["Sprint Planning", "Backlog Creation", "User Story Mapping"] },
      { title: "Design & Prototyping", icon: <FaPaintBrush />, description: ["UI/UX Wireframing", "Architecture Setup", "Interactive Mockups"] },
      { title: "Agile Development", icon: <FaLaptopCode />, description: ["Sprint Execution", "Frontend & Backend Coding", "Version Control"] },
      { title: "Testing & QA", icon: <FaCheckCircle />, description: ["Unit Testing", "User Acceptance Testing", "Bug Squashing"] },
      { title: "Deployment & Launch", icon: <FaRocket />, description: ["CI/CD Pipeline", "Production Release", "Server Configuration"] },
      { title: "Review & Maintenance", icon: <FaSyncAlt />, description: ["Sprint Review", "Iterative Updates", "Ongoing Support"] }
    ],
    mobile: [
      { title: "Planning & Scoping", icon: <FaSearch />, description: ["Platform Strategy", "Feature Prioritization", "Requirements Analysis"] },
      { title: "UI/UX Design", icon: <FaPencilRuler />, description: ["Mobile-first Prototyping", "Navigation Flow", "User Experience Validation"] },
      { title: "Iterative Development", icon: <FaCode />, description: ["Native/Cross-platform Coding", "API Integration", "State Management"] },
      { title: "Quality Assurance", icon: <FaCheckCircle />, description: ["Device Testing", "Performance Profiling", "Security Audits"] },
      { title: "App Store Deployment", icon: <FaBoxOpen />, description: ["App Store Optimization", "Beta Distribution", "Final Release"] },
      { title: "Feedback & Updates", icon: <FaSyncAlt />, description: ["User Feedback Tracking", "Version Upgrades", "Continuous Improvement"] }
    ]
  };