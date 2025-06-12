import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaEye, FaChevronDown,FaGithub, FaLinkedin, FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa';
import Animtion from '../assets/Animation.json';
import '../styles/home.css';
import { useEffect, useState } from 'react';
import { FloatingMessage } from './FloatingMessage';
import { CustomCursor } from './CustomeCursor';


const messages = [
  "I'm a Software Engineer",
  "UI/UX Desinger",
  "Open Source Contributor",
  "Full-Stack Developer",
  "Tech Explorer",
];
const stairLetterPositions = [
  { top: -90, left: 470 },
  { top: -50, left: 430 },
  { top: 100, left: 300 },
  { top: 150, left: 240 },
  { top: 200, left: 180 },
  { top: 250, left: 120 },
  { top: 300, left: 60 },
  { top: 350, left: 0 },
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
  const [visibleIndex, setVisibleIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFlipped(false);
      }, 5000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
           {/* <FloatingMessage /> */}
      
        <div className="lottie-bg">
          {/* <Lottie animationData={Animtion} loop autoplay /> */}
          
        </div>

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
   
          <div className="timeliness-wrapper"> 
          <div className="vertical-linesss" />
           <div className="timeliness">
              <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
                              <div className="timeline-dot" />
            <h1 className="hero-name">
              Hi,I'm Alamirew Wagaw
            </h1>
          <h2 className="hero-title">
            Software Engineer
          </h2>

{/* 
<div className="staircase-word">
  {'Software'.split('').map((char, index) => (
    <span
      key={index}
      className="stair-letter"
      style={{
        top: `${stairLetterPositions[index].top}px`,
        left: `${stairLetterPositions[index].left}px`,
      }}
    >
      {char}
    </span>
  ))}
</div> */}

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
        <div className="scroll-indicator">
          <FaChevronDown />
               <div className='nav-social'>
                  <a href='https://t.me/alamir_tel'><FaTelegram /></a>  
                  <a href='https://www.instagram.com/alam_irew/'><FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/alamirewwagaw/" target="_blank"><FaLinkedin /></a>
                  <a href="https://github.com/alamir06" target="_blank"><FaGithub /></a>
                  <a href="https://www.youtube.com/@Alak_studio8495" target="_blank"><FaYoutube /></a> 
                  </div>
        </div>
      </section>
    </div>
  );
}
