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
        id: 2,
        title: "Technosophia IT Solutions ",
        description: "Built with React, NestJs, and Postgress with Great Collaboration",
        technologies: ["React", "NestJs", "Postgress", "📂","🙏"],
        image: Technsophia,
        github: "https://github.com/TechnoSophia-Solutions/TS-portfolio",
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
      {
        id: 3,
        title: "Zemzem Food Complex ",
        description: "Built with React,nestJs, and Mysql with Great Collaboration",
        technologies: ["React", "NestJs", "MYSQL", "📂"],
        image: zemzem,
        github: "https://github.com/TechnoSophia-Solutions/ZFC-N/tree/main/ZFC-UI",
        live: "https://zemzem.technosophia.net/",
        process: [
          "Market research and competitive analysis",
          "UI/UX design in Figma",
          "Frontend development with React",
          "Backend API development with NestJs",
          "Database integration with MySQL",
          "Deployment on Yegara hosting",
          "Testing and bug fixing",
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
          "App/play Store deployment"
        ]
      },
      // Add more mobile projects...
    ]
  };

  // Development methodology
  export const methodology = {
    web: [
      { title: "Discovery", icon: "🔍", description: "Requirement Gather and analysis" },
      { title: "Design", icon: "🎨", description: "UI/UX prototyping" },
      { title: "Development", icon: "💻", description: "Agile implementation" },
      { title: "Deployment", icon: "🚀", description: "CI/CD setup" },
      { title: "Maintenance", icon: "🔧", description: "Ongoing support" }
    ],
    mobile: [
      { title: "Research", icon: "📱", description: "Platform patterns identificatin" },
      { title: "Prototyping", icon: "✏️", description: "Interactive designs" },
      { title: "Development", icon: "📲", description: "Native coding" },
      { title: "Publishing", icon: "📦", description: "App store release" },
      { title: "Support", icon: "🛠️", description: "User feedback and updates" }
    ]
  };