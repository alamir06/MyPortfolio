// components/ExperienceNote.jsx
import React from "react";
import { motion } from "framer-motion";
import "./consulting.css";

const ExperienceNote = () => {
  return (
    <section className="experience-note-container">
      <motion.div
        className="experience-note"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Tech-Driven, People-Focused🅿️</h3>
        <p>
          Although I have less than <strong>4 months of professional experience</strong>,
          I’ve already developed strong skills in <strong>Project Management</strong> and <strong>Technology Consulting</strong>. 
          I understand how to plan, coordinate, and deliver tech projects effectively while 
          aligning with real business goals.
        </p>
        <p>
          I’ve provided guidance on the right tools, stacks, and architecture choices 
          for startups and teams — ensuring scalability, cost-effectiveness, and future-proofing. 
          My focus is not only on writing code, but on solving the right problems.
        </p>
      </motion.div>
    </section>
  );
};

export default ExperienceNote;
