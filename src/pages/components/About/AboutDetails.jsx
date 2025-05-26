
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaCode, FaGamepad, FaMusic, FaTractor, FaTelegram, FaYoutube, FaPhone, FaChurch, FaSchool, FaBook, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import './aboutDetal.css'; 
import myImage from "../../../assets/alamir2.jpg"
import { skills } from '../../../Data/AboutDetails';
import { favorites } from '../../../Data/AboutDetails';
const AboutMe = () => {
 

  return (
    <div className="about-me-container">
      <div className="hero-sections">
        <div className="hero-contents">
          <h1>Get to Know Me</h1>
          <p className="tagline">Developer | Team Leader | Creative Thinker</p>
        </div>
      </div>
      <div className="content-wrapper">
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
              With over [1] years in the industry, I've worked on projects ranging from small business websites 
              to large-scale enterprise applications.
            I specialize in full-stack development,
            blending design with functionality to create high-performing digital experiences.
             With several completed projects under my experience and strong problem-solving skills, I strive to deliver
             impactful solutions for clients and employers.
             </p>
            <p>
              My journey in technology has been driven by a desire to learn and grow. 
              I thrive on challenges and enjoy collaborating with others to bring innovative ideas to life.
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
        <p className="section-subtitles">In almost My Every day Journey</p>
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
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              
              <div className="timeline-contents">
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
    {100 - index * 25}%
  </span>
</div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* <section className="favorites-section">
  <h3 className="about-title">My Favorite activities</h3>
  <div className="favorites-timeline">
    {favorites.map((item, index) => (
      <div className="timeline-item" key={index}>
        {index !== 0 && (
          <div className="connector">
            <div className="line" />
            <div className="icon-wrapper">{item.icon}</div>
            <div className="line" />
          </div>
        )}
        <div className={index % 2 === 0 ? "favorite-card" : "favorite-cards"}>
          <img src={item.image} alt={item.title} className="favorite-image" />
          <div className="favorite-details">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
        
      </div>
    ))}
  </div>
</section> */}
<div className="favorites-connector">
  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,100 C40,0 60,0 100,100" stroke="#ccc" strokeWidth="2" fill="none" />
  </svg>
</div>
        <section className="skills-section">
          <h3 className="about-title">My Skills</h3>
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
        <section className="social-section">
          <h3 className="about-title">Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com/alamir06" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alamirewwagaw/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter />
            </a> */}
               <a href="tel:+251921991810" target="_blank" rel="noopener noreferrer" className="social-link phone">
              <FaPhone />
            </a>
              <a href="https://t.me/alamir_tel" target="_blank" rel="noopener noreferrer" className="social-link telegram">
              <FaTelegram />
            </a>
              <a href="https://www.youtube.com/@Alak_studio8495" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/alam_irew/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;