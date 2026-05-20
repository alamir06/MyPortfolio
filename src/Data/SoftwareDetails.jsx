import React from 'react';
import { FiCpu, FiCode, FiLayers, FiCheckCircle, FiSend, FiTool } from 'react-icons/fi';
import { GiBasket } from 'react-icons/gi';
import aa from '../assets/image/aa.jpg'; 
import bole from "../assets/image/bole.png";
import bole2 from "../assets/image/bole2.png";
import code from "../assets/image/code.png";
import Technsophia from "../assets/image/Technosophia.png";

export const projects = {
  software: [
    {
      id: 1,
      title: "Hotel StreamLine Platform",
      description: "Scalable business management solution with microservices architecture",
      technologies: ["TypeScript", "NestJs", "typeorm", "PostgreSQL", "Docker"],
      image: aa,
      features: ["Real-time room booking and management", "Integrated payment gateway", "Admin dashboard for staff scheduling and reporting"],
      images: [aa, code],
      github: "https://github.com/Timewize-Systems/gpiisms-dev_api",
      live: "https://github.com/Timewize-Systems/gpiisms-dev_api"
    },
    {
      id: 2,
      title: "Customer Feedback monitoring System",
      description: "Built with React, NestJs, and Postgress with Great Collaboration",
      technologies: ["React", "NestJs", "Postgress", "📂"],
      image: bole,
      features: ["Custom feedback submission and routing", "Client portal for data insights and metrics", "Automated survey reporting system"],
      images: [bole, bole2],
      github: "#",
      live: "https://cfmsui.technosophia.net/"
    }
  ]
};

export const methodology = {
  software: [
    { title: "Planning", icon: <FiCpu />, description: ["Project scoping and requirements", "Stakeholder interviews", "Feasibility analysis"] },
    { title: "Requirement Gathering", icon: <GiBasket />, description: ["User persona definition", "Use case specifications", "Technical feasibility assessment"] },
    { title: "Architecture", icon: <FiLayers />, description: ["System design and planning", "Database modeling", "Microservices setup"] },
    { title: "Development", icon: <FiCode />, description: ["Clean code implementation", "API development", "Frontend integration"] },
    { title: "Testing", icon: <FiCheckCircle />, description: ["Automated test suites", "Integration testing", "User acceptance testing (UAT)"] },
    { title: "Deployment", icon: <FiSend />, description: ["CI/CD pipelines", "Cloud infrastructure setup", "Production release"] },
    { title: "Maintenance", icon: <FiTool />, description: ["Ongoing support and updates", "Performance monitoring", "Security patching"] }
  ]
};
