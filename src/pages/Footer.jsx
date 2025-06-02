import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTelegram,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div class="wave-layer wave1"></div>
    <div class="wave-layer wave2"></div>
    <div class="wave-layer wave3"></div>
    <div class="wave-layer wave4"></div>
    <div class="wave-layer wave5"></div>
      <footer className="footer">
         <hr className="footer-divider" />

        <div className="footer-nav">
          <div className="footer-link"><a href="#home">Home </a></div>
          <div className="footer-link"><a href="#projects">Projects</a></div>
          <div className="footer-link"><a href="#experience">Educations</a></div>
          <div className="footer-link"><a href="#services">services</a></div>
          <div className="footer-link"><a href="#contact">Contact</a></div>
        </div>

       
        <div className="footer-description">
          <p>
           Feel free to reach out to me for collaboration or just a friendly chat!
          </p>
        </div>
        <div className="footer-socials">
          <a href="https://web.facebook.com/alamir.alex.7" target="_blank"><FaFacebookF /></a>
          <a  href="https://t.me/alamir_tel"  target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://www.instagram.com/alam_irew/" target="_blank"><FaInstagram /></a>
           <a href="https://www.youtube.com/@Alak_studio8495" target="_blank"><FaYoutube/></a>
          <a href="https://www.linkedin.com/in/alamirewwagaw/" target="_blank"><FaLinkedinIn /></a>
          <a href="https://github.com/alamir06" target="_blank"><FaGithub /></a>
         {/* <a href="tel:+251921991810"><FaPhone /></a> */}

        </div>

        <div className="footer-bottom">
          <p>
            @2025 :&nbsp;Alamirew wagaw
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
