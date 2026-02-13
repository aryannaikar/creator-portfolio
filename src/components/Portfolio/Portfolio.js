import React, { useState } from "react";
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
    img: cinematicsImg, // Using cinematics image for cinematography
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

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="projects-section">
      <h2 className="section-title">My Work</h2>

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.views}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
