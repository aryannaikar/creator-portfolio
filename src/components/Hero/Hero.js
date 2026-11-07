import { motion } from "framer-motion";
import "./Hero.css";
import heroVideo from "../../assets/videos/website video.mp4";

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
          Crafting Visuals <br />
          <span>Built to be Remembered</span>
        </h1>
        <p>Filmmaking, Video Editing & Content Creation. </p>
      </motion.div>
    </section>
  );
}
