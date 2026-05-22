import React from 'react';
import { FiCpu, FiCode, FiLayers, FiCheckCircle, FiSend, FiTool } from 'react-icons/fi';
import { GiBasket } from 'react-icons/gi';
import { SiTypescript, SiNestjs, SiTypeorm, SiPostgresql, SiDocker, SiReact } from 'react-icons/si';
import aa from '../assets/image/aa.jpg'; 
import bole from "../assets/image/bole.png";
import bole2 from "../assets/image/bole2.png";
import code from "../assets/image/code.png";
import hrmsMain from "../assets/image/hrms.png";
import hrms1 from "../assets/image/hrms1.png";
import hrms2 from "../assets/image/hrms2.png";
import hrms3 from "../assets/image/hrms3.png";
import hrms4 from "../assets/image/hrms4.png";
import hrms5 from "../assets/image/hrms5.png";
import hrms6 from "../assets/image/hrms6.png";
import fortuneMain from "../assets/image/fortuneMain.png";
import fortune1 from "../assets/image/fortune1.png";
import fortune2 from "../assets/image/fortune2.png";
import fortune3 from "../assets/image/fortune3.png";
import pharmacyMain from "../assets/image/pharmacyMain.png";
import pharmacy1 from "../assets/image/pharmacy1.png";
import pharmacy2 from "../assets/image/pharmacy2.png";
import pharmacy3 from "../assets/image/pharmacy3.png";
import pharmacy4 from "../assets/image/pharmacy4.png";
import pharmacy5 from "../assets/image/pharmacy5.png";
import { FaChartPie, FaCreditCard, FaDatabase, FaLock, FaNodeJs, FaReact, FaServer } from 'react-icons/fa';

export const projects = {
  software: [
    {
      id: 1,
      title: "Hotel StreamLine Platform",
      description: "Scalable business management solution with microservices architecture",
      technologies: [
        <><SiTypescript color="#3178C6" /> TypeScript</>,
        <><SiNestjs color="#E0234E" /> NestJs</>,
        <><SiTypeorm color="#262627" /> TypeORM</>,
        <><SiPostgresql color="#4169E1" /> PostgreSQL</>,
        <><SiDocker color="#2496ED" /> Docker</>
      ],
      image: aa,
      features: ["Real-time room booking and management", "Integrated payment gateway", "Admin dashboard for staff scheduling and reporting"],
      images: [aa, code],
      github: "https://github.com/Timewize-Systems/gpiisms-dev_api",
      live: "https://github.com/Timewize-Systems/gpiisms-dev_api"
    },
    {
      id: 2,
      title: "Customer Feedback monitoring System",
      description: "A comprehensive platform designed to gather, track, and analyze customer feedback and satisfaction metrics across various departments.",
      technologies: [
        <><FaReact color="#61DAFB" /> React</>,
        <><SiNestjs color="#E0234E" /> NestJs</>,
        <><SiPostgresql color="#4169E1" /> Postgres</>,
        <><FaNodeJs color="#339933" /> NestJS</>,      
        <><FaDatabase color="#336791" /> MySQL</>,
        <><FaChartPie color="#FF9900" /> Analytics</>
      ],
      image: bole,
      features: ["The Customer Satisfaction Monitor System is a dual-interface platform featuring a public-facing application for gathering customer feedback and a dedicated admin portal for management and oversight. It is powered by a robust, role-based access control and JWT-secured backend built with NestJS and TypeORM, ensuring reliable and secure data handling. The system features a real-time analytics and reporting dashboard equipped with dynamic charts to visualize feedback trends, customer ratings, and overall service performance. Under the hood, it utilizes a centralized MySQL database architecture to efficiently store and manage high volumes of operational feedback. The entire experience is delivered through modern, responsive, and highly optimized user interfaces developed using React and Vite."],
      images: [bole, bole2],
      github: "https://github.com/alamir06",
      live: "https://cfmsui.technosophia.net/"
    },
    {
    id: 3,
    title: "Human Resource Management System for Injibara University",
    description: "Enterprise-grade Full-stack HRMS built with React, Node.js/Express, and MySQL for Injibara University.",
    technologies: [
      <><FaReact color="#61DAFB" /> React</>,
      <><FaNodeJs color="#339933" /> NodeJs</>,
      <><FaDatabase color="#336791" /> MySQL</>,
      <><FaLock color="#F2A900" /> Security</>,
      <><FaChartPie color="#FF9900" /> Analytics</>
    ],
    image: hrmsMain, 
    features: [
      "The HRMS is a full-stack, enterprise-grade system that ensures robust security through Role-Based Access Control and features seamless SMTP email integration. It offers comprehensive employee lifecycle management, effortlessly handling department, designation, and directory maintenance. The platform simplifies daily operations with automated attendance tracking, timesheets, and strict policy-driven leave management that includes rollover support. Additionally, it streamlines financial operations through robust payroll processing, managing complex salary calculations, tax deductions, and provident funds. To support organizational growth, the system incorporates a dedicated recruitment module for applicant tracking, evaluation, and third-party outsourcing management. All of these powerful capabilities are tied together by an interactive analytics dashboard utilizing Recharts, complemented by system-wide broadcast and notification features to keep the entire organization informed and connected."
    ],
    images: [hrmsMain, hrms1,hrms2,hrms3,hrms4,hrms5,hrms6], 
    github: "https://github.com/alamir06/HRMS",
    live: "https://hrms-ui-emgn.onrender.com/" 
   },
   {
    id: 4,
    title: "Community Fortune Platform",
    description: "Enterprise-grade competition and Game Management platform built with React, Node.js/Express, and MySQL, fully compliant with UK regulations.",
    technologies: [
      <><FaReact color="#61DAFB" /> React</>,
      <><FaNodeJs color="#339933" /> NodeJs</>,
      <><FaDatabase color="#336791" /> MySQL</>,
      <><FaCreditCard color="#1434CB" /> Payments</>,
      <><FaLock color="#F2A900" /> Security</>,
      <><FaChartPie color="#FF9900" /> Analytics</>
    ],
    image: fortuneMain, 
    features: [
      "The Community Fortune platform is a comprehensive system designed to manage five distinct types of competitions (Paid, Free, Jackpot, Subscription, and Mini-Games) while strictly adhering to UK compliance regulations, including skill questions and audit logging. The system features a robust, secure user wallet integrated with Stripe, PayPal, and Revolut for seamless deposits and withdrawals, governed by role-based access control and JWT authentication. It supports user engagement through an integrated HTML5 game system handling ZIP uploads directly via Cloudinary, automated leaderboards, and an interactive spin-wheel module. Furthermore, it incorporates a dynamic rewards system where odds and multipliers adapt to user subscription tiers (Tier 1, 2, 3), and an advanced analytics dashboard that allows administrators to track metrics on ticket sales, active events, and revenue trends."
    ],
    images: [fortuneMain, fortune1, fortune2, fortune3], 
    github: "https://github.com/alamir06/Community-fortune",
    live: "https://fortune-builder-user.onrender.com/sign-in" 
   },
   {
    id: 5,
    title: "Pharmacy Management System",
    description: "A centralized, multi-role platform that digitizes end-to-end pharmacy operations from procurement to sale, including inventory control, branch governance, and robust analytics.",
    technologies: [
      <><FaReact color="#61DAFB" /> React</>,
      <><FaNodeJs color="#339933" /> Node.js</>,
      <><FaDatabase color="#336791" /> MySQL</>,
      <><FaServer color="#828282" /> Express</>,
      <><FaLock color="#F2A900" /> JWT Security</>,
      <><FaChartPie color="#FF9900" /> Analytics</>
    ],
    image: pharmacyMain, 
    features: [
      "The Pharmacy Management System is a comprehensive platform designed to digitize and streamline operations across single or multi-branch pharmacies. It features a robust, hierarchical security architecture with role-based access control (RBAC) and JWT authentication, supporting tailored workflows for Platform Admins, Pharmacy Owners, Branch Managers, Store Keepers, Pharmacists, and Cashiers. The system centralizes critical operations including medicine and cosmetics inventory control, stock requests, and supplier management to mitigate expiration risks and shortages. It empowers staff with streamlined pipelines for prescription handling, dispensing, and seamless point-of-sale transactions. Furthermore, the platform equips management with dedicated branch-level oversight tools, dynamic pricing controls, and a comprehensive analytics reporting module to track daily sales, user accountability, and overall financial performance in real-time."
    ],
    images: [pharmacyMain, pharmacy1, pharmacy2, pharmacy3, pharmacy4, pharmacy5], 
    github: "https://github.com/alamir06",
    live: "https://github.com/alamir06" 
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
