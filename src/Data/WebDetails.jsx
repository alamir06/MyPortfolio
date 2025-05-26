import React from 'react';
import zemzem from "../assets/image/Zemzem.jpg";
import Technsophia from "../assets/image/Technosophia.png";
import bole from "../assets/image/bole.png";
  // Project data
  export const projects = {
    web: [
       {
        id: 1,
        title: "Customer Feedback monitoring System",
        description: "Built with React, NestJs, and Postgress with Great Collaboration",
        technologies: ["React", "NestJs", "Postgress", "📂"],
        image: bole,
        github: "https://github.com/TechnoSophia-Solutions/Bole-SubCity-CFMS",
        live: "https://cfmsui.technosophia.net/",
        process: [
          "Market research and competitive analysis",
          "UI/UX design in Figma",
          "Frontend development with React/Redux",
          "Backend API development",
          "Payment integration and testing"
        ]
      },
      {
        id: 2,
        title: "Technosophia IT Solutions Website",
        description: "Built with React, NestJs, and Postgress with Great Collaboration",
        technologies: ["React", "NestJs", "Postgress", "📂"],
        image: Technsophia,
        github: "https://github.com/TechnoSophia-Solutions/TS-portfolio",
        live: "https://technosophia.net/",
        process: [
          "Market research and competitive analysis",
          "UI/UX design in Figma",
          "Frontend development with React/Redux",
          "Backend API development",
          "Payment integration and testing"
        ]
      },
      {
        id: 3,
        title: "Zemzem Food Complex Website",
        description: "Built with React,nestJs, and Mysql with Great Collaboration",
        technologies: ["React", "NestJs", "MYSQL", "📂"],
        image: zemzem,
        github: "https://github.com/TechnoSophia-Solutions/ZFC-N/tree/main/ZFC-UI",
        live: "https://zemzem.technosophia.net/",
        process: [
          "Market research and competitive analysis",
          "UI/UX design in Figma",
          "Frontend development with React/Redux",
          "Backend API development",
          "Payment integration and testing"
        ]
      },
    ],
    mobile: [
      {
        id: 1,
        title: "Cooming Soon",
        // description: "Cross-platform health monitoring with wearable integration",
        technologies: ["React Native", "Firebase", "Google  API"],
        // image: "/images/fitness-mobile.jpg",
        // github: "#",
        // live: "#",
        process: [
          "User flow mapping",
          "Native component development",
          "Health API integration",
          "Offline data sync",
          "App Store deployment"
        ]
      },
      // Add more mobile projects...
    ]
  };

  // Development methodology
  export const methodology = {
    web: [
      { title: "Discovery", icon: "🔍", description: "Requirement analysis" },
      { title: "Design", icon: "🎨", description: "UI/UX prototyping" },
      { title: "Development", icon: "💻", description: "Agile implementation" },
      { title: "Deployment", icon: "🚀", description: "CI/CD setup" }
    ],
    mobile: [
      { title: "Research", icon: "📱", description: "Platform patterns" },
      { title: "Prototyping", icon: "✏️", description: "Interactive designs" },
      { title: "Development", icon: "📲", description: "Native coding" },
      { title: "Publishing", icon: "📦", description: "App store release" }
    ]
  };