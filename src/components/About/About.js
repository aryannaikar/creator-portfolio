import { motion } from "framer-motion";
import "./About.css";
import pfp from "../../assets/images/pfp.png"; // ✅ correct import

export default function About() {
  return (
    <section className="about">
      <motion.img
        src={pfp}   // ✅ use variable here
        alt="Amaan Mirza"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Amaan Mirza</h2>
        <h4>Available for Freelance</h4>

        <p>
          Filmmaker, Editor & Visual Storyteller based in Mumbai.
          I specialize in long-form content, short-form reels,
          brand commercials, and cinematic storytelling.
        </p>

        <p>
          My work has generated millions of views and helped brands
          and creators scale their digital presence through powerful visuals.
        </p>

        <button className="hire-btn">Hire Me</button>
      </motion.div>
    </section>
  );
}
