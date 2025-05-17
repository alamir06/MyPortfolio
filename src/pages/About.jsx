import Lottie from 'lottie-react';
import '../styles/about.css';
import devDesk from "../assets/dev-desk.json";
import cvFile from "../assets/Alamir_cv.pdf"; // Ensure your CV file is in the correct path
import { motion } from 'framer-motion';
import { FaDownload, FaReadme, FaUser } from 'react-icons/fa';
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
          <h2>Who AM I!</h2>
          <p>
            I’m <strong>Alamirew Wagaw</strong>, a passionate software engineer who builds beautiful,
            fast, and accessible websites and applications. I specialize in full-stack development,
            blending design with functionality to create high-performing digital experiences.
          </p>
          <p>
            With several completed projects under my belt and strong problem-solving skills, I strive to deliver
            impactful solutions for clients and employers.
          </p>
          
          {/* CV Download Button */}
          <div className='about-btn'>
          <div className="cv-download">
        <a
          href="#about"
          className="download-btn"
        >
          <FaReadme className="download-icon" />
           About Me
        </a>
      </div>
        <div className="cv-download">
  <a href={cvFile} download="Alamirew_Wagaw_Resume.pdf" className="download-btn">
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
