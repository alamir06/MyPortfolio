import Lottie from 'lottie-react';
import '../styles/about.css';
import devDesk from "../assets/dev-desk.json";
import cvFile from "../assets/AlamirewResume.pdf";
import { motion } from 'framer-motion';
import { FaDownload, FaReadme } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="about-content">
        <div className="about-text">
          <h2>Who Am I!</h2>
          <p>
           I'm a Passionate software Engineer who builds beautiful,
            fast, Usable, Secured, Available, Scalable and Reliable websites and Systems. I specialized in full-stack development starting from Requirement Gathering To Maintenance,
            blending API, Database and UI/UX design with functionality to create high-performing digital experiences.
          </p>
          <p>
          My Journey in technology has been driven by a desire to <span className="highlight">learn, grow and improve</span>. 
          I thrive on challenges and enjoy collaborating with others to bring innovative ideas to solve Problems in life With Digital Technology.         
          </p>
          <div className='about-btn'>
          <div className="cv-download">
            <Link to="/about-me" className="download-btn">
            <FaReadme className="download-icon" />
            About Me
          </Link>
          </div>
        <div className="cv-download">
        <a href={cvFile} download="AlamirewResume.pdf" className="download-btn">
        <FaDownload className="download-icon" />
        My Resume
      </a>
      </div>
      </div>
      </div>
      <div className="about-animation">
      <Lottie animationData={devDesk} loop autoplay />
      </div>
      </motion.div>
      </section>
  );
}
