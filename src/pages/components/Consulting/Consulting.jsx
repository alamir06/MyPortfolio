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
          I have comprehensive experience in <strong>Human Management</strong> and <strong>Team Management</strong>,
          giving me a strong foundation in coordinating and delivering successful projects while aligning with real business goals. 
          I am highly motivated to continue building strong skills in these leadership areas.
        </p>
        <p>
          I’ve provided guidance on the right tools, stacks, and architecture choices 
          for startups and teams — ensuring scalability, cost-effectiveness, and future-proofing. 
          My focus is not only on writing code, but on solving the right problems and leading people effectively.
        </p>
      </motion.div>
    </section>
  );
};

export default ExperienceNote;
