import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-nav">
          <div className="footer-link"><a href="#home">Home </a></div>
          <div className="footer-link"><a href="#contact">Projects</a></div>
          <div className="footer-link"><a href="#experience">Educations</a></div>
          <div className="footer-link"><a href="#services">services</a></div>
          <div className="footer-link"><a href="#connect">Contact</a></div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-description">
          <p>
           Feel free to reach out to me for collaboration or just a friendly chat!
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://web.facebook.com/alamir.alex.7"><FaFacebookF /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/alamirewwagaw/"><FaLinkedinIn /></a>
          <a href="https://github.com/alamir06"><FaGithub /></a>
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
