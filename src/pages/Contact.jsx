import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TrackVisibility from 'react-on-screen';
import myImage from "../assets/contact-img.svg";
import '../styles/contact.css';
import emailjs from "emailjs-com"; 

export function Contact() {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");

    try {
      const formdata = {
        ...formDetails,
        date: new Date().toLocaleDateString(),
      };

      await emailjs.send(
        "service_bt8akmv",
        "template_cw16xxp",
        formdata,
        "dJ-CgSLg7T8xrYpwl"
      );

      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully!" });

    } catch (error) {
      setStatus({ success: false, message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
      setButtonText("Send");
    }
  };

  return (
    <section className="contact-section" id="Contact">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-content">
        <TrackVisibility once>
          {({ isVisible }) => (
            <motion.img
              src={myImage}
              alt="Contact"
              className="contact-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
          )}
        </TrackVisibility>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formDetails.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formDetails.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formDetails.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formDetails.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Submitting...' : buttonText}</span>
              </button>

              {status.message && (
                <p className={`status-message ${status.success ? "success" : "danger"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
