import React from 'react';
import zemzem from "../assets/image/Zemzem.jpg";
import portfolio from "../assets/image/portfolio.png";

  export const projects = {
    web: [
      {
        id: 1,
        title: "Zemzem Food Complex ",
        description: "Built with React,nestJs, and Mysql with Great Collaboration",
        technologies: ["React", "NestJs", "MYSQL", "📂","🙏"],
        image: zemzem,
        github: "#",
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
       {
        id: 2,
        title: "My Portfolio ",
        description: "Built with React,CSS,Canva with Great Commitment",
        technologies: ["React", "Css", "Canva", "📂","🙏"],
        image: portfolio,
        github: "https://github.com/alamir06/MyPortfolio",
        live: "https://alamirew.technosophia.net/",
        process: [
          "Deep think and analysis of my skill",
          "UI/UX design in Canva",
          "implement  with React and CSS",
          "Deployment on Yegara hosting",
          "get feedback and edit the comment",
        ]
      },
    ],
    mobile: [
      {
        id: 1,
        title: "Cooming Soon",
        description: "Cross-platform health monitoring with wearable integration",
        technologies: ["React Native", "Firebase", "Google  API"],
        // image: "/images/fitness-mobile.jpg",
        github: "#",
        live: "#",
        process: [
          "User flow mapping",
          "Native component development",
          "Health API integration",
          "Offline data sync",
          "App/play Store deployment"
        ]
      },
    ]
  };
  
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