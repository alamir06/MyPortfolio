import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/navbar.css';
import logo from '../assets/alamir1.jpg'; // replace with your actual logo path

const navLinks = ['Home', 'About', 'Projects', 'Services', 'Contact'];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-content">
        {/* Logo and Name */}
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">|Alamirew Wagaw</span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
        {navLinks.map((link,index) => (
        
 <a href={`#${link.toLowerCase()}`} 
 key={index}
 className="nav-link" onClick={() => setMenuOpen(false)}>
  {link}
</a>
))}
        |  <a href="https://github.com/alamir06" target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/alamirewwagaw/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <button className="theme-toggle" onClick={() => setIsDark(prev => !prev)}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hamburger */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="mobile-menu"
        >
          {navLinks.map(link => (
           <a href={`#${link.toLowerCase()}`} className="nav-link" onClick={() => setMenuOpen(false)}>
  {link}
</a>
          ))}
          <div className="mobile-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <button onClick={() => setIsDark(prev => !prev)}>
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
