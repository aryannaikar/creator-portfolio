import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

// Import local images
import brandVideosImg from "../../assets/images/BRAND VIDEOS.png";
import gamingImg from "../../assets/images/GAMING.png";
import musicVideosImg from "../../assets/images/MUSIC VIDEOS.png";
import photographyImg from "../../assets/images/PHOTOGRAPHY.png";
import cinematicsImg from "../../assets/images/cinematics.png";
import introductionImg from "../../assets/images/introduction.png";
import shortFilmsImg from "../../assets/images/short films.png";
import shortFormImg from "../../assets/images/short form.png";
import longFormImg from "../../assets/images/long form.png";
import cinematicImg from "../../assets/images/VIDEOGRAPHY.png";

const projects = [
  {
    title: "Long Form",
    category: "video",
    views: "Content Editing",
    img: longFormImg,
    link: "https://www.behance.net/gallery/181517213/Content-Editing"
  },
  {
    title: "Short Form",
    category: "video",
    views: "Reels / Shorts",
    img: shortFormImg,
    link: "https://www.behance.net/gallery/181516523/Short-Form"
  },
  {
    title: "Brand Videos",
    category: "video",
    views: "Commercial",
    img: brandVideosImg,
    link: "https://www.behance.net/gallery/211324401/Brand-videos"
  },
  {
    title: "Short Films",
    category: "video",
    views: "Storytelling",
    img: shortFilmsImg,
    link: "https://www.behance.net/gallery/213844679/Short-Films"
  },
  {
    title: "Street Photography",
    category: "design",
    views: "Photography",
    img: photographyImg,
    link: "https://www.behance.net/gallery/205588625/Street-Photography"
  },
  {
    title: "Cinematography",
    category: "video",
    views: "Camera Work",
    img: cinematicImg,
    link: "https://www.behance.net/gallery/236982605/Cinematography"
  },
  {
    title: "Cinematics",
    category: "video",
    views: "Visual Mood",
    img: cinematicsImg,
    link: "https://www.behance.net/gallery/198099505/Cinematics"
  },
  {
    title: "Music Videos",
    category: "video",
    views: "Artist Projects",
    img: musicVideosImg,
    link: "https://www.behance.net/gallery/213820707/Music-videos"
  },
  {
    title: "Gaming",
    category: "content",
    views: "Gameplay Edits",
    img: gamingImg,
    link: "https://www.behance.net/gallery/205588405/Gaming-Videos"
  },
  {
    title: "Introduction",
    category: "content",
    views: "Intro Edits",
    img: introductionImg,
    link: "https://www.behance.net/gallery/240644035/Introduction-videos"
  }
];


const categories = ["all", "video", "design", "content"];

// Behance Icon Component
const BehanceIcon = () => (
  <svg
    className="behance-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="projects-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        My Work
      </motion.h2>

      {/* CATEGORY BUTTONS */}
      <motion.div
        className="category-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {categories.map((cat, index) => (
          <button
            key={index}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </motion.div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <BehanceIcon />
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.views}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
