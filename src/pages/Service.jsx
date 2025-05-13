import { motion } from 'framer-motion';

import '../styles/service.css'; // You'll create this next
import webAnimation from '../assets/web.json';
import mobileAnimation from '../assets/mobile.json';
import consultingAnimation from '../assets/consulting.json';
import { Player } from '@lottiefiles/react-lottie-player';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and optimized web apps with modern technologies.',
    animation: webAnimation,
  },
  {
    title: 'Mobile Development',
    description: 'Creating seamless cross-platform mobile experiences.',
    animation: mobileAnimation,
  },
  {
    title: 'Tech Consulting',
    description: 'Offering expert guidance to shape your technology strategy.',
    animation: consultingAnimation,
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        My Services
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Player autoplay loop src={service.animation} className="service-animation" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
