import React from 'react';
import { FiDatabase, FiLayers, FiZap, FiSliders, FiTrendingUp, FiSearch } from 'react-icons/fi';
import { FaBrain, FaRobot } from 'react-icons/fa';
import flower from '../assets/image/flower.jpg';

import p_img2 from '../assets/image/p-image2.png';
import p_img3 from '../assets/image/p-image3.png';
import p_img4 from '../assets/image/p-image4.png';
export const projects = {
  ai: [
    {
      id: 1,
      title: "Predictive Analytics for Flower species classification", 
      description: "Machine learning model for flower species forecasting",
      technologies: ["Python", "TensorFlow", "Pandas", "Flask"],
      image: flower,
      images: [flower, p_img2],
      github: "#",
      live: "#",
      features: [
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
      description: "Coming Soon",
      technologies: ["PyTorch", "OpenCV", "FastAPI", "ONNX"],
      images: [p_img3, p_img4],
      features: [
        "Dataset collection and annotation",
        "Model architecture selection",
        "Training on GPU cluster",
        "Edge deployment optimization",
        "Accuracy benchmarking"
      ]
    }
  ]
};

export const methodology = {
  ai: [
    { title: "Define Objective", icon: <FiSearch />, description: ["Identify business goals", "Define success metrics", "Determine ML constraints"] },
    { title: "Data Preparation", icon: <FiDatabase />, description: ["Dataset acquisition", "Handling missing values", "Exploratory Data Analysis"] },
    { title: "Feature Engineering", icon: <FiLayers />, description: ["Feature selection", "Data transformations", "Dimensionality reduction"] },
    { title: "Prototyping", icon: <FaBrain />, description: ["Algorithm benchmarking", "Baseline evaluation", "Model architecture design"] },
    { title: "Model Training", icon: <FiZap />, description: ["GPU-accelerated learning", "Hyperparameter tuning", "Cross-validation runs"] },
    { title: "Validation", icon: <FiSliders />, description: ["Performance metrics analysis", "Bias and variance checks", "A/B testing procedures"] },
    { title: "Deployment", icon: <FaRobot />, description: ["Endpoint creation (FastAPI)", "Containerization (Docker)", "Cloud provisioning"] },
    { title: "Monitoring", icon: <FiTrendingUp />, description: ["Concept drift detection", "Automated retraining", "Performance logging"] },
  ]
};
