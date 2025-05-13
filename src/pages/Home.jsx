import { motion } from 'framer-motion';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Animtion from '../assets/Animation.json'
export default function Home() {
  return (
    <div className="page">
    <section className="hero">
       {/* Lottie Animated Background */}
      <div className="lottie-bg">
        <Lottie animationData={Animtion} loop autoplay />
      </div>
      {/* Animated background */}
      <div className="hero-bg">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-name">Hi, I'm Alamirew Wagaw</h1>
        <h2 className="hero-title">Full-Stack Developer</h2>
        <p className="hero-intro">
          I design and build modern, responsive web applications with intuitive user experiences.
        </p>
        <Link to="/projects" className="cta-button">
          View My Work
        </Link>
      </motion.div>
    </section>
    </div>
  );
}

