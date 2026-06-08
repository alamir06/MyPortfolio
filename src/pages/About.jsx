import React, { useState } from 'react';
import Lottie from 'lottie-react';
import '../styles/about.css';
import devDesk from "../assets/dev-desk.json";
import cvFile from "../assets/AlamirewResume.pdf";
import europassCv from "../assets/Alamirew Europass CV.pdf";
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaReadme, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function AboutSection() {
  const [showResumeOptions, setShowResumeOptions] = useState(false);

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
            <div className="cv-download" style={{ position: 'relative' }}>
              <button
                type="button"
                className="download-btn"
                onClick={() => setShowResumeOptions(!showResumeOptions)}
              >
                <FaDownload className="download-icon" />
                My Resume
                {showResumeOptions ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
              </button>

              <AnimatePresence>
                {showResumeOptions && (
                  <>
                    <motion.div
                      className="resume-options-wrapper"
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
                      animate={{ opacity: 1, x: 140, y: -20, scale: 1, rotate: -25 }}
                      exit={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{ transformOrigin: "bottom left" }}
                    >
                      <a
                        href={cvFile}
                        download="AlamirewResume.pdf"
                        className="download-btn sub-download-btn"
                      >
                        Normal CV
                      </a>
                      <a
                        href={europassCv}
                        download="Alamirew Europass CV.pdf"
                        className="download-btn sub-download-btn"
                      >
                        Europass CV
                      </a>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
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
