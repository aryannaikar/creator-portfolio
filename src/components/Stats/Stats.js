import { motion } from "framer-motion";
import { Eye, Film, Globe } from "lucide-react";
import "./Stats.css";

const stats = [
  { 
    icon: <Eye />, 
    value: "12.5M+", 
    label: "Views Across Platforms", 
    color: "blue" 
  },
  { 
    icon: <Film />, 
    value: "100+", 
    label: "Videos Edited & Produced", 
    color: "purple" 
  },
  { 
    icon: <Globe />, 
    value: "5+", 
    label: "Platforms & Brand Collaborations", 
    color: "orange" 
  }
];

export default function Stats() {
  return (
    <section id="stats" className="stats">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Impact & Reach
      </motion.h2>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={`icon ${s.color}`}>{s.icon}</div>
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
