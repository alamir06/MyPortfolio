import React from 'react';
import { FiDatabase, FiLayers, FiZap, FiSliders, FiTrendingUp, FiSearch } from 'react-icons/fi';
import { FaBrain, FaChartBar, FaDatabase, FaPython, FaRobot } from 'react-icons/fa';
import flower from '../assets/image/flower.jpg';
import p_img2 from '../assets/image/flowe1.png';
import p_img3 from '../assets/image/flower2.png';
import p_img4 from '../assets/image/flower3.png';
import railwayMain from '../assets/image/railwayMain.png';
import railway1 from '../assets/image/railway1.png';
import railway2 from '../assets/image/railway2.png';
import railway3 from '../assets/image/railway3.png';
import railway4 from '../assets/image/railway4.png';
import railway5 from '../assets/image/railway5.png';
import railway6 from '../assets/image/railway6.png';


import { SiPython, SiTensorflow, SiPandas, SiFlask, SiPytorch, SiOpencv, SiFastapi, SiOnnx, SiScikitlearn } from 'react-icons/si';

export const projects = {
  ai: [
    {
      id: 1,
      title: "Predictive Analytics for Flower species classification", 
      description: "Machine learning model for flower species forecasting",
      technologies: [
        <><SiPython color="#3776AB" /> Python</>,
        <><SiTensorflow color="#FF6F00" /> TensorFlow</>,
        <><SiPandas color="#150458" /> Pandas</>,
        <><SiFlask color="#000000" /> Flask</>
      ],
      image: flower,
      images: [flower, p_img2,p_img3,p_img4],
      github: "#",
      live: "#",
      features: [
        "This project involves a comprehensive machine learning pipeline that begins with extensive data collection and preprocessing, followed by thorough exploratory data analysis. The core development process includes rigorous feature engineering, model selection, and tuning to ensure optimal results. Finally, the system encompasses complete model training and validation, paired with robust API development for seamless integration and continuous performance monitoring."
      ]
    },
    {
    id: 2, // Adjust the ID based on your array
    title: "Predictive Analysis for Railway System",
    description: "An advanced machine learning pipeline built with Python and TensorFlow, employing deep learning and tree-based models for railway operational forecasting.",
    technologies: [
      <><FaPython color="#3776AB" /> Python</>,
      <><SiScikitlearn color="#F7931E" /> Scikit-learn</>,
      <><SiTensorflow color="#FF6F00" /> TensorFlow</>,
      <><FaDatabase color="#336791" /> Pandas</>,
      <><FaChartBar color="#FF9900" /> Data Analytics</>
    ],
    image: railwayMain, 
    features: [
      "The Railway Predictive Analysis project is a comprehensive machine learning architecture designed to forecast railway operations through rigorous data science methodologies. The pipeline begins with detailed dataset preprocessing, which handles feature encoding, scaling, and target preparation. At its core, the project evaluates multiple sophisticated algorithms, including Artificial Neural Networks (ANN) using TensorFlow/Keras alongside powerful Tree-based models such as Random Forest and Gradient Boosting Regressors. To guarantee high accuracy and prevent overfitting, the system performs extensive hyperparameter tuning and cross-validation. All results are heavily supported by deep visual analytics—plotting training vs. validation loss curves and learning graphs—culminating in an authoritative performance comparison to determine the most reliable predictive model."
    ],
    images: [railwayMain, railway1, railway2, railway3, railway4, railway5, railway6], 
    github: "https://github.com/alamir06/railway-predictive-analysis", 
    live: "https://github.com/alamir06/railway-analysis-api" 
},
    {
      id: 3,
      title: "Computer Vision System",
      description: "Coming Soon",
      technologies: [
        <><SiPytorch color="#EE4C2C" /> PyTorch</>,
        <><SiOpencv color="#5C3EE8" /> OpenCV</>,
        <><SiFastapi color="#009688" /> FastAPI</>,
        <><SiOnnx color="#005CED" /> ONNX</>
      ],
      images: [p_img3, p_img4],
      features: [
        "This Computer Vision System utilizes an end-to-end development cycle starting with meticulous dataset collection and annotation to ensure high-quality training inputs. The project focuses on rigorous model architecture selection, followed by intensive training on a high-performance GPU cluster. To guarantee real-world effectiveness, the system undergoes extensive edge deployment optimization and precise accuracy benchmarking."
      ]
    }
  ]
};

export const methodology = {
  ai: [
    { title: "Define Objective", icon: <FiSearch />, description: ["Identify business goals","Define success metrics", "Determine ML constraints","Dataset acquisition","Identify the problem on which the model will be trained"] },
    { title: "Data Preparation", icon: <FiDatabase />, description: [ "Handling missing values", "Dimensionality reduction", "Exploratory Data Analysis","Noise Reduction","Data Visualization"] },
    { title: "Feature Engineering", icon: <FiLayers />, description: ["Feature selection", "Data transformations","Feature Scaling","Feature Creation","Outlier Detection","Feature Importance"] },
    { title: "Model Selection", icon: <FiLayers />, description: ["Algorithm selection", "Model architecture design","Model Design & Optimization"] },
    { title: "Prototyping", icon: <FaBrain />, description: ["Showcase Algorithm", "Baseline evaluation", "Detail Model architecture design",] },
    { title: "Model Training", icon: <FiZap />, description: ["GPU-accelerated learning", "Hyperparameter tuning", "Cross-validation runs","Fit Model with Train Data","Evaluate Model with Train Data"] },
    { title: "Validation", icon: <FiSliders />, description: ["Performance metrics analysis", "Bias and variance checks", "A/B testing procedures","Evaluate Model with Test Data","Compare Model with Test Data"] },
    { title: "Deployment", icon: <FaRobot />, description: ["Endpoint creation (FastAPI)", "Containerization (Docker)", "Cloud provisioning"] },
    { title: "Monitoring", icon: <FiTrendingUp />, description: ["Concept drift detection", "Automated retraining", "Performance logging"] },
  ]
};
