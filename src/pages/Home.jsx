import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { FaEye, FaChevronDown } from 'react-icons/fa';
import Animtion from '../assets/Animation.json';
import '../styles/home.css';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FloatingMessage } from './FloatingMessage';
import { CustomCursor } from './CustomeCursor';


const messages = [
  "I'm a Software Engineer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Full-Stack Dev",
  "Tech Explorer",
];

const steps = [
  'Understand Problem',
  'Requirement Gathering',
  'Design',
  'Implementation',
  'Deployment',
  'Maintenance',
];
export default function Home() {

    const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFlipped(false);
      }, 5000); // match flip duration
    }, 10000);
    return () => clearInterval(interval);
  }, []);
 const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % (steps.length + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page relative">
      <section className="hero">
           <CustomCursor />
         <FloatingMessage />
        {/* Lottie Animated Background */}
        <div className="lottie-bg">
          <Lottie animationData={Animtion} loop autoplay />
        </div>

        {/* Animated background circles */}
        <div className="hero-bg">
          <div className="circle1"></div>
          <div className="circle2"></div>
           <div className="circle3"></div>
        </div>


 <div
      className={`circle-flip-wrapper ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="circle-flip-inner">
        <div className="circle-front"></div>
        <div className="circle-back">
          <div className="back-content">
            <span>{messages[currentIndex]}</span>
            <div className="social-icons">
              <a href="https://github.com/alamir06" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/alamirewwagaw/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Hero Content */}
       <div className="timeliness-wrapper"> 
          <div className="vertical-linesss" />
  <div className="timeliness">
   
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-name">
        Hi,
         I'm Alamirew Wagaw
      </h1>
      <h2 className="hero-title">
        Software Engineer
      </h2>

      <div className="process-flow">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index < visibleIndex ? 'visible' : ''}`}
          >
            {step}
            {index < steps.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>


          <a
            href="#projects"
            className="cta-button"
          >
            <FaEye className="text-xl"  />
           My Work
          </a>
        </motion.div>
        </div>
</div>
        {/* Scroll Down Indicator */}
        <div className="scroll-indicator">
          {/* <a href='#footer'></a> */}<FaChevronDown />
        </div>
      </section>
    </div>
  );
}
