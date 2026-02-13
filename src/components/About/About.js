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
          I’m a Mumbai based filmmaker, video editor, and content creator who believes storytelling should feel real not manufactured. From shooting short films on a phone with limited resources to crafting cinematic brand content and high retention YouTube videos, I focus on creativity over convenience.
        </p>
        <p>
          I’ve worked across directing, cinematography, editing, and scripting, collaborating with influencers, producing sponsored projects, and managing social media campaigns with a premium, cinematic approach. My style is heavily inspired by character driven storytelling and grounded visuals, blending emotion, humor, and realism into every frame.
        </p>
        <p>
          Whether it’s a narrative short film, a branded piece, or digital content, my goal is simple:
          make people feel something before they even realize why.
        </p>

        <a href="#contact" className="hire-btn">
          <button>Hire Me</button>
        </a>

      </motion.div>
    </section>
  );
}
