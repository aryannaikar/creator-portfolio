
import { motion } from "framer-motion";
import "./YouTube.css";
import indoImg from "../Portfolio/indo.jpeg"; // Using pfp.png as placeholder for indo.jpg if not found

const standouts = [
  {
    title: "7 Businesses With 1$",
    link: "https://www.youtube.com/embed/VZeQ7OhI98g",
    views: "Education / Business"
  },
  {
    title: "The Rock Dish Challenge",
    link: "https://www.youtube.com/embed/JVP0Yv8_CtM",
    views: "Entertainment / Food"
  },
  {
    title: "Public Transportation Adventure",
    link: "https://www.youtube.com/embed/PjymkHCu94o",
    views: "Entertainment / Travel"
  },
  {
    title: "College Sneak Routine",
    link: "https://www.youtube.com/embed/ytFeH8_drZE",
    views: "Vlog / Entertainment"
  }
];

const YouTube = () => {
  return (
    <section id="youtube" className="youtube-section-dedicated">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My YouTube Channel
        </motion.h2>

        <div className="youtube-intro">
          <motion.div
            className="intro-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={indoImg} alt="YouTube Intro" />
          </motion.div>
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="intro-quote">
              "As a video editor and storyteller, my YouTube channel is a space where both worlds come together. It highlights my ability to craft engaging narratives, experiment with formats, and create content that connects with audiences beyond just visuals"
            </p>
          </motion.div>
        </div>

        <motion.h3
          className="standouts-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          The Standouts
        </motion.h3>

        <div className="standouts-grid">
          {standouts.map((video, index) => (
            <motion.div
              key={index}
              className="standout-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="video-wrapper">
                <iframe
                  src={video.link}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.views}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;
