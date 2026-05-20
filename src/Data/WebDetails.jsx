import React from 'react';
import { FaSearch, FaPaintBrush, FaLaptopCode, FaRocket, FaWrench, FaMobileAlt, FaPencilRuler, FaCode, FaBoxOpen, FaHeadset, FaCheckCircle, FaSyncAlt,FaFolderOpen, FaReact, FaCss3, FaDatabase } from 'react-icons/fa';
import zemzem from "../assets/image/Zemzem.jpg";
import portfolio from "../assets/image/portfolio.png";
import Technsophia from "../assets/image/Technosophia.png";
import Technsophia1 from "../assets/image/Technosophia1.jpg";
import Technsophia2 from "../assets/image/Technosophia2.jpg";
import Technsophia3 from "../assets/image/Technosophia3.jpg";
import Technsophia4 from "../assets/image/Technosophia4.jpg";
import p_im5 from "../assets/image/p-im5.png";
import p6 from "../assets/image/p6.png";
import p_image1 from "../assets/image/p-image1.png";
import p_image2 from "../assets/image/p-image2.png";
import p_image3 from "../assets/image/p-image3.png";
import p_image4 from "../assets/image/p-image4.png";

  export const projects = {
    web: [
      {
        id: 1,
        title: "My Portfolio ",
        description: "Built with React,CSS,Canva with Great Commitment",
        technologies: [<FaFolderOpen />,<FaReact />,<FaCss3 />,<FaDatabase/>],
        image: portfolio,
        features: ["Showcases my projects and skills", "Provides an interactive CV view", "Demonstrates responsive UI/UX principles"],
        images: [portfolio, p_image1, p_image2,p_image3,p_image4],
        github: "https://github.com/alamir06/MyPortfolio",
        live: "https://alamirew.technosophia.net/"
      },
      {
        id: 2,
        title: "Technosophia IT Solutions ",
        description: "Built with React, NestJs, and Postgress with Great Collaboration",
        technologies: ["React", "NestJs", "Postgress", "📂","🙏"],
        image: Technsophia,
        features: ["Corporate landing page and service offering display", "Dynamic blog and portfolio content management", "Secure back-office admin dashboard"],
        images: [Technsophia,Technsophia1,Technsophia2,Technsophia3,Technsophia4],
        github: "#",
        live: "https://technosophia.net/"
      },
      {
        id: 3,
        title: "Zemzem Food Complex ",
        description: "Built with React,nestJs, and Mysql with Great Collaboration",
        technologies: [ <FaFolderOpen/>,<FaReact />,<FaCss3 />,<FaDatabase/>],
        image: zemzem,
        features: ["Product catalog showcasing food items", "Online order processing and tracking", "Integration with automated inventory systems"],
        images: [zemzem, p_im5, p6],
        github: "#",
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