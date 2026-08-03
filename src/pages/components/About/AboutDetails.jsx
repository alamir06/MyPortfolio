import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaCode, FaGamepad, FaMusic, FaTractor, FaTelegram, FaYoutube, FaPhone, FaChurch, FaSchool, FaBook, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import './aboutDetal.css'; 
import myImage1 from "../../../assets/alamir1.jpg"
import myImage6 from "../../../assets/alamir gawen.jpg"
import myImage2 from "../../../assets/alamir2.jpg"
import myImage3 from "../../../assets/alamir3.jpg"
import myImage4 from "../../../assets/alamir4.jpg"
import myImage5 from "../../../assets/alamir5.jpg"
import myImage7 from "../../../assets/alamir7.jpg"
import myImage8 from "../../../assets/INSEApanle.jpg"
import { skills, groupedTechSkills, favorites } from '../../../Data/AboutDetails';
import {motion} from "framer-motion"

const images = [myImage1, myImage2, myImage3, myImage4,myImage5,myImage6,myImage7,myImage8];

const AboutMe = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
 
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

  return (
    <div className="about-me-container">
      <div className="hero-sections">
        <div className="hero-contents">
          <h1>Get to Know Me</h1>
          <p className="tagline">Software Engineer | Team-Leader | Creative Thinker | Problem Solver | Quick Learner | Hardworker | Adaptable | Disciplined | Tech Enthusiast</p>
        </div>
      </div>
      <div className="content-wrapper">
        <section className="profile-section">
          <div className="profile-image-container">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Profile ${index}`} 
                className={`profile-image ${index === currentImgIndex ? 'active' : ''}`}
              />
            ))}
            <div className="image-overlay"></div>
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <div 
                  key={index} 
                  className={`dot ${index === currentImgIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImgIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="profile-text">
            <h2>Hello, I'm <span className="highlight">[Alamirew Wagaw]</span></h2>
            <p>
             <span className="highlight">A</span> Software Engineer with a Strong Passion for Creating Beautiful, Functional Digital Experiences.  I've worked on Projects ranging from Business Websites 
              to large-scale Systems and Applications.
              I specialized in Full-Stack Development,
              blending API, Database, UI/UX design with functionality to create high-performing digital experiences.
              With several completed projects under my experience and strong problem-solving skills, I strive to deliver
              impactful solutions for clients and employers.
             </p>
            <p>
              My Journey in technology has been driven by a desire to <span className="highlight">learn, grow and improve</span>. 
              I thrive on challenges and enjoy collaborating with others to bring innovative ideas to solve Problems in life With Digital Technology. I strongly believe that Collaboration and Good Communication is Key to solve Problems and Success.
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying my other passions listed below.
            </p>
          </div>
        </section>
        <div className="favorites-connector">
       <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,100 C40,0 60,0 100,100" stroke="#ccc" strokeWidth="2" fill="none" />
  </svg>
</div>
    
   <section className={`education-timelines`}>
      <div className="containers">
        <h2 className="section-titles">My Favorite activities</h2>
        <p className="section-subtitles"> <span className="highlight">In</span> Almost My Every Day Journey</p>
         <div className="timeline-containers">
          <div className="timeline-lines"></div>
  
          {favorites.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-items ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="timeline-icons" 
                style={{ backgroundColor: item.color, overflow: 'hidden' }}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  item.icon
                )}
              </div>
            
            <motion.div
            className="timeline-contents"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <div className="timeline-headers">
            <h3>{item.title}</h3>
            <span className="timeline-years">{item.year}</span>
            </div>
              <h4 className="timeline-degrees">{item.qoute}</h4>
                <p className="timeline-descriptions">{item.description}</p>
                <div className="progress-containers">
                <div 
          className="progress-bars" 
          style={{ 
            width: `${100 - index * 25}%`,
            backgroundColor: item.color
          }}
            >
              <span style={{
                color: '#fff',
                fontWeight: 'bold',
                paddingLeft: '8px'
              }}>
              {/* {100 - index * 25}% */}
            </span>
          </div>
          </div>
  </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>

<div className="favorites-connector">
   <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,100 C40,0 60,0 100,100" stroke="#ccc" strokeWidth="2" fill="none" />
      </svg>
        </div>
        <section className="skills-section">
          <h3 className="about-title">General Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="radial-progress" style={{ 
                  '--percent': skill.percent,
                  '--color': skill.color
                }}>
                  <span>{skill.percent}%</span>
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="digital-skills-section">
          <h3 className="about-title">Digital Skills</h3>
          <div className="digital-skills-container">
            {groupedTechSkills.map((group, groupIndex) => (
              <div className="digital-skills-category" key={groupIndex}>
                <h4 className="category-title">{group.category}</h4>
                <div className="digital-skills-box">
                  {group.skills.map((tech, index) => (
                    <div className="digital-skill-item" key={index} style={{ '--color': tech.color }}>
                      <div className="digital-skill-header">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: tech.color, display: 'flex', alignItems: 'center', fontSize: '1.2rem' }}>
                            {tech.icon}
                          </span>
                          {tech.name}
                        </span>
                        <span className="digital-skill-percent">{tech.percent}%</span>
                      </div>
                      <div className="digital-skill-bar-container">
                        <div 
                          className="digital-skill-bar-fill" 
                          style={{ 
                            width: `${tech.percent}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="social-section">
          <h3 className="about-title">Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com/alamir06" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alamirew-wagaw/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter />
            </a>
               <a href="tel:+251921991810" target="_blank" rel="noopener noreferrer" className="social-link phone">
              <FaPhone />
            </a>
              <a href="https://t.me/alamir_tel" target="_blank" rel="noopener noreferrer" className="social-link telegram">
              <FaTelegram />
            </a>
              <a href="https://www.youtube.com/@Akal_Tech" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/alamire06/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;