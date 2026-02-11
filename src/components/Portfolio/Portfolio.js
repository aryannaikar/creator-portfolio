import React, { useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Long Form",
    category: "video",
    views: "Content Editing",
    img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/181517213/Content-Editing"
  },
  {
    title: "Short Form",
    category: "video",
    views: "Reels / Shorts",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/181516523/Short-Form"
  },
  {
    title: "Brand Videos",
    category: "video",
    views: "Commercial",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/211324401/Brand-videos"
  },
  {
    title: "Short Films",
    category: "video",
    views: "Storytelling",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/213844679/Short-Films"
  },
  {
    title: "Street Photography",
    category: "design",
    views: "Photography",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/205588625/Street-Photography"
  },
  {
    title: "Cinematography",
    category: "video",
    views: "Camera Work",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/236982605/Cinematography"
  },
  {
    title: "Cinematics",
    category: "video",
    views: "Visual Mood",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/198099505/Cinematics"
  },
  {
    title: "Music Videos",
    category: "video",
    views: "Artist Projects",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/213820707/Music-videos"
  },
  {
    title: "Gaming",
    category: "content",
    views: "Gameplay Edits",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net/gallery/205588405/Gaming-Videos"
  },
  {
    title: "Introduction",
    category: "content",
    views: "Intro Edits",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
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
