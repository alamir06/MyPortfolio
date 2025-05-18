import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaCode, FaGamepad, FaMusic, FaTractor, FaTelegram, FaYoutube, FaPhone } from 'react-icons/fa';
import './aboutDetal.css'; // We'll create this CSS file next
import myImage from "../../../assets/alamir1.jpg"
import { FaCableCar, FaReadme } from 'react-icons/fa6';
const AboutMe = () => {
  // Skill data for the radial progress bars
  const skills = [
    { name: 'Frontend Development', percent: 85, color: '#61DAFB' },
    { name: 'Backend Developer', percent: 90, color: '#F0DB4F' },
    { name: 'UI/UX Design', percent: 70, color: '#FF4081' },
    { name: 'FullStack Developer', percent: 87.5, color: '#68A063' },
    { name: 'Project Management', percent: 85, color: '#000000' },
     { name: 'Technology Consulting', percent: 87, color: '#4E71FF' },
  ];

  // Favorite things data
  const favorites = [
    { icon: <FaCode />, title: 'Coding', description: 'Building interactive web applications' },
    { icon: <FaGamepad />, title: 'Gaming', description: 'Strategy games and RPGs' },
    { icon: <FaReadme />, title: 'Reading', description: 'Church,philosophy and fiction Books' },
    { icon: <FaTractor />, title: 'Traveling', description: 'Exploring new cultures and places' },
  ];

  return (
    <div className="about-me-container">
      {/* Hero Section */}
      <div className="hero-sections">
        <div className="hero-contents">
          <h1>Get to Know Me</h1>
          <p className="tagline">Developer | Team Leader | Creative Thinker</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-image-container">
            <img 
              src={myImage}
              alt="Profile" 
              className="profile-image"
            />
            <div className="image-overlay"></div>
          </div>
          
          <div className="profile-text">
            <h2>Hello, I'm <span className="highlight">[Alamirew Wagaw]</span></h2>
            <p>
              I'm a passionate developer with a love for creating beautiful, functional digital experiences. 
              With over [X] years in the industry, I've worked on projects ranging from small business websites 
              to large-scale enterprise applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying my other passions listed below.
            </p>
          </div>
        </section>

        {/* Favorites Section */}
    <section className="favorites-section">
  <h3 className="section-title">My Favorite Things</h3>
  <div className="favorites-masonry">
    {favorites.map((item, index) => (
      <div 
        className="favorite-tile" 
        key={index}
        style={{ 
          '--hue': index * 360 / favorites.length,
          '--delay': index * 0.1 + 's'
        }}
      >
        <div className="tile-content">
          <div className="tile-icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
        <div className="tile-overlay"></div>
      </div>
    ))}
  </div>
</section>


        {/* Skills Section */}
        <section className="skills-section">
          <h3 className="section-titles">My Skills</h3>
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

        {/* Social Media Section */}
        <section className="social-section">
          <h3 className="section-title">Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter />
            </a> */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link telegram">
              <FaTelegram />
            </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram />
            </a>
             <a href="tel:+251921991810" target="_blank" rel="noopener noreferrer" className="social-link phone">
              <FaPhone />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;