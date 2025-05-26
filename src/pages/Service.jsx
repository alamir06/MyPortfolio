import { motion } from 'framer-motion';

import '../styles/service.css'; // You'll create this next
import { Player } from '@lottiefiles/react-lottie-player';
import {ServiceData} from "../Data/ServiceData"
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Services() {
  return (
    <section className="services-section" id="services">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="section-titles"
      >
       How Can I help You?
      </motion.h2>
      <div className="services-grid">
        {ServiceData.map((service, index) => (
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
          <Link to={service.link} className="service-link">
          <FaArrowAltCircleRight /> Explore More
          </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
