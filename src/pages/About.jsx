import Lottie from 'lottie-react';
import '../styles/about.css';
import devDesk from "../assets/dev-desk.json";
import cvFile from "../assets/AlamirewResume.pdf";
import { motion } from 'framer-motion';
import { FaDownload, FaReadme, FaUser } from 'react-icons/fa';
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
            I’m <strong>Alamirew Wagaw</strong>, a passionate software engineer who builds beautiful,
            fast, and accessible websites and applications. I specialize in full-stack development,
            blending design with functionality to create high-performing digital experiences.
          </p>
          <p>
            With several completed projects under my experience and strong problem-solving skills, I strive to deliver
            impactful solutions for clients and employers.
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
