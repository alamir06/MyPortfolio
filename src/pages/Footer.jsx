import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'animate.css';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Let's Stay Connected</h2>
          <p>Feel free to reach out to me for collaboration or just a friendly chat!</p>
          <div className="footer-socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h2>Contact Info</h2>
          <p>Email: your.email@example.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Location: City, Country</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 | Your Name | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
