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
import zemzem1 from "../assets/image/Zemzem1.jpg";
import zemzem2 from "../assets/image/Zemzem2.jpg";
import zemzem3 from "../assets/image/Zemzem3.jpg";
import zemzem4 from "../assets/image/Zemzem4.jpg";
import zemzem5 from "../assets/image/Zemzem5.jpg";
import zemzem6 from "../assets/image/Zemzem6.jpg";
  export const projects = {
    web: [
      {
        id: 1,
        title: "My Portfolio ",
        description: "Built with React,Manual CSS,Stitch Design with Great Vision",
        technologies: [
          <><FaFolderOpen color="#FFCA28" /> Portfolio</>,
          <><FaReact color="#61DAFB" /> React</>,
          <><FaCss3 color="#1572B6" /> CSS3</>,
          <><FaBrain color="#FF6B6B" /> Logic</>
        ],
        image: portfolio,
        features: [
          "An Interactive Personal Portfolio designed to showcase my Projects, Skills, and Experience while demonstrating modern, responsive UI/UX principles. This Portfolio features a Multi-Discipline Project Showcase powered by a Dedicated Section, complete with Interactive Modal Galleries for exploring detailed Description. It also provides a clear methodology breakdown outlining my development process, alongside an easily accessible CV download functionality for recruiters and clients."
        ],
        images: [portfolio, p_image1, p_image2,p_image3,p_image4],
        github: "https://github.com/alamir06/MyPortfolio",
        live: "https://alamirew.technosophia.net/"
      },
      {
        id: 2,
        title: "Technosophia IT Solutions ",
        description: "Built with React, Manual CSS, React-Motion, and Collaboration with Team",
        technologies: [
          <><FaFolderOpen color="#FFCA28" /> Corporate</>,
          <><FaReact color="#61DAFB" /> React</>,
          <><FaCss3 color="#1572B6" /> CSS3</>,
          <><FaUser color="#98D8C8" /> Client</>
        ],
        image: Technsophia,
        features: [
          "A Professional Corporate Website Providing a Landing Page and Service Offering Display to engage potential clients. The website demonstartes the Organization Servises,Projects,Vision,Mission,Goals,Team,Contact Information,Blog,Portfolio,Testimonials,Client Feedback."
        ],
        images: [Technsophia,Technsophia1,Technsophia2,Technsophia3,Technsophia4],
        github: "https://github.com/alamir06",
        live: "https://technosophia.net/"
      },
      {
        id: 3,
        title: "Zemzem Food Complex ",
        description: "Built with React, Manual CSS, Stitch Design, and Collaboration with Team and Client",
        technologies: [
          <><FaFolderOpen color="#FFCA28" /> Enterprise</>,
          <><FaReact color="#61DAFB" /> React</>,
          <><FaCss3 color="#1572B6" /> CSS3</>,
          <><FaUser color="#98D8C8" /> Client</>
        ],
        image: zemzem,
        features: [
          "An enterprise Website featuring a modern, responsive UI effortlessly designed with React, Vite, and Manual CSS. The frontend engages users via a dynamic hero carousel highlighting the company's core values, leading into a detailed product showcase for items like premium Wheat Flour, Semolina, and Whole Grains. The Website guarantees fluid Single Page Application (SPA) navigation. Additionally, it features an interactive 'Grains to Gold' manufacturing timeline, customer testimonials, and fully integrated contact forms paired with a Google Maps view for accessible customer connectivity."
        ],
        images: [zemzem, zemzem2,zemzem1, zemzem3, zemzem4, zemzem5, zemzem6],
        github: "https://github.com/alamir06",
        live: "https://zemzem.technosophia.net/"
      }
    ]
  };
  
  export const methodology = {
    web: [
      { title: "Planning & Requirements", icon: <FaSearch />, description: ["Presenting Ideas In Meeting", "Discussion", "Planning The Project With Client & Team ", "Understanding Client Needs","Understanding The Organization Business Rules","Requirement Analysis and Understanding", "Ready To Start The Project"] },
      { title: "Design & Prototyping", icon: <FaPaintBrush />, description: ["UI/UX Designing of Requirements","Prototyping The Requirements by Designing","Architecture Setup", "Interactive Design"] },
      { title: "Development & Implementation", icon: <FaLaptopCode />, description: ["Environment Setup", "Frontend Development ", "Version Control Using Git,Github,Gitlab"] },
      { title: "Testing & QA", icon: <FaCheckCircle />, description: ["Unit Testing","Integration Testing","System Testing", "User Acceptance Testing", "Bug Fixing","Ensure The Project is Bug Free"] },
      { title: "Deployment & Launch", icon: <FaRocket />, description: ["CI/CD Pipeline", "Production Release", "Server Configuration","Ensure The Project is Live"] },
      { title: "Review & Maintenance", icon: <FaSyncAlt />, description: ["System Review", "Iterative Updates","check with Client Feedback","maintain Client Feedback","Ongoing Support","Ensure The Project is Running Smoothly"] }
    ]
  };