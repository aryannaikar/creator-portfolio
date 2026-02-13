import { motion } from "framer-motion";
import "./Hero.css";
import heroVideo from "../../assets/videos/ESDEE EDIT~2.mp4";

export default function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video-bg"
        src={heroVideo}
      />

      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          Creating Content <br />
          <span>That Converts</span>
        </h1>
        <p>Creative direction, Video editing & Social media visuals daalde</p>
      </motion.div>
    </section>
  );
}
