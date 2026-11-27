import { useState } from "react";
import { motion } from "framer-motion";
import "./Brands.css";

import garnierHorizontal from "../../assets/images/brands/garnier-horizontal.jpg";
import garnierVertical from "../../assets/images/brands/garnier-vertical.jpg";
import horizontalTn from "../../assets/images/brands/horizontal-tn.jpg";
import lorealTn from "../../assets/images/brands/loreal-tn.jpg";
import tbTn from "../../assets/images/brands/tb-tn.jpg";
import arTn from "../../assets/images/brands/ar-tn.jpg";
import raviTn from "../../assets/images/brands/ravi-tn.jpg";
import rkTn from "../../assets/images/brands/rk-tn.jpg";
import yashTn from "../../assets/images/brands/yash-tn.jpg";

const brandProjects = [
  {
    id: "spotify-ipop",
    brand: "SPOTIFY",
    title: "IPOP HIGHLIGHT FILM",
    tag: "EVENT COVERAGE",
    format: "HORIZONTAL · 16:9",
    aspect: "horizontal",
    thumbnail: "https://img.youtube.com/vi/hSLok0qZLDE/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/hSLok0qZLDE?autoplay=1",
  },
  {
    id: "garnier-vertical",
    brand: "GARNIER",
    title: "GARNIER INDIA",
    tag: "MOTION GRAPHICS",
    format: "VERTICAL · 9:16",
    aspect: "vertical",
    thumbnail: garnierVertical,
    embedUrl: "https://drive.google.com/file/d/17irZCvw8_hH8b427wZKN0YWbMiymYME3/preview",
  },
  {
    id: "loreal-le15",
    brand: "L'ORÉAL x LE15",
    title: "L'ORÉAL x LE15",
    tag: "SOCIAL CAMPAIGN",
    format: "VERTICAL · 9:16",
    aspect: "vertical",
    thumbnail: lorealTn,
    embedUrl: "https://drive.google.com/file/d/15IkwEzygbzY1qocrgA86XsFhgGM9ztfx/preview",
  },
  {
    id: "techburner-yt",
    brand: "TECHBURNER",
    title: "TECHBURNER FEATURE",
    tag: "YOUTUBE EDIT",
    format: "VERTICAL · 9:16",
    aspect: "vertical",
    thumbnail: tbTn,
    embedUrl: "https://www.youtube.com/embed/YakYZeChGX0?start=107&autoplay=1",
  },
  {
    id: "supertalks-yt",
    brand: "SUPERTALKS",
    title: "SUPERTALKS PODCAST",
    tag: "PODCAST TRAILER",
    format: "HORIZONTAL · 16:9",
    aspect: "horizontal",
    thumbnail: "https://img.youtube.com/vi/dEsH8AyZ63A/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dEsH8AyZ63A?autoplay=1",
  },
  {
    id: "amazon-music-v1",
    brand: "AMAZON MUSIC",
    title: "AMAZON MUSIC SERIES",
    tag: "BRAND CONTENT",
    format: "VERTICAL · 9:16",
    aspect: "vertical",
    thumbnail: arTn,
    embedUrl: "https://drive.google.com/file/d/1JtlC5aEG5Dng3byuOG2YPcYxwQcl5le-/preview",
  },
  {
    id: "flipkart-minutes",
    brand: "FLIPKART MINUTES",
    title: "BURNERBITS CAMPAIGN",
    tag: "COMMERCIAL REEL",
    format: "VERTICAL · 9:16",
    aspect: "vertical",
    thumbnail: raviTn,
    embedUrl: "https://drive.google.com/file/d/1pvvQ7PoxVehdbPnsgagirFyq_XncmfIn/preview",
  },
  {
    id: "amazon-music-v2",
    brand: "AMAZON MUSIC",
    title: "ARTIST SPOTLIGHT",
    tag: "SOCIAL CONTENT",
    format: "VERTICAL · 9:16",
    aspect: "vertical",
    thumbnail: rkTn,
    embedUrl: "https://drive.google.com/file/d/10qdEGZFSoj9R_y3PSe1P_SzQTcc7a2uS/preview",
  },
  {
    id: "bookmyshow-cal",
    brand: "BOOKMYSHOW",
    title: "CALENDAR CAMPAIGN",
    tag: "MOTION GRAPHICS",
    format: "VERTICAL · 9:16",
    aspect: "vertical",
    thumbnail: yashTn,
    embedUrl: "https://drive.google.com/file/d/1GUCnylFoU-3K181Aw6SPqtOYbG5e1sHw/preview",
  },
  {
    id: "garnier-horizontal",
    brand: "GARNIER",
    title: "GARNIER CAMPAIGN FILM",
    tag: "BRAND FILM",
    format: "HORIZONTAL · 16:9",
    aspect: "horizontal",
    thumbnail: garnierHorizontal,
    embedUrl: "https://drive.google.com/file/d/1ngkvC8qP_jYsNky5YjYNibHkVOh7WuOM/preview",
  },
  {
    id: "amazon-music-h",
    brand: "AMAZON MUSIC",
    title: "AMAZON MUSIC HORIZONTAL",
    tag: "HIGHLIGHT FILM",
    format: "HORIZONTAL · 16:9",
    aspect: "horizontal",
    thumbnail: horizontalTn,
    embedUrl: "https://drive.google.com/file/d/1IelHhPcIAEShZkTvH8AZBo0alFvs2TPC/preview",
  },
];

export default function Brands() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="brands" className="brands">
      <div className="brands-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          BRANDS
        </motion.h2>
        <p className="brands-subtitle">BRAND &amp; CLIENT PROJECTS</p>
      </div>

      <div className="brands-grid">
        {brandProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`brand-card ${
              project.aspect === "horizontal"
                ? "brand-card--horizontal"
                : "brand-card--vertical"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (index % 4) * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: false, amount: 0.15 }}
            onClick={() => setActiveVideo(project)}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="brand-card-img"
              loading="lazy"
            />
            <div className="brand-card-overlay" />

            <div className="brand-card-top">
              <span className="brand-name-badge">{project.brand}</span>
              <span className="brand-play-badge">▶</span>
            </div>

            <div className="brand-card-bottom">
              <h3>{project.title}</h3>
              {project.tag && <p className="brand-tag">{project.tag}</p>}
              <span className="brand-format-pill">{project.format}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {activeVideo && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="brand-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="brand-modal-header">
              <div>
                <span className="brand-modal-brand">{activeVideo.brand}</span>
                <h4>{activeVideo.title}</h4>
              </div>
              <button
                className="brand-modal-close"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
              >
                ✕
              </button>
            </div>
            <div className="brand-modal-iframe-wrap">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
