import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      /> */}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          Creating Content <br />
          <span>That Converts</span>
        </h1>
        <p>Video editing, design & social content for brands</p>
      </motion.div>
    </section>
  );
}
