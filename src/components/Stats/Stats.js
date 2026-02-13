import { motion } from "framer-motion";
import { Eye, Film, Globe } from "lucide-react";
import "./Stats.css";

const stats = [
  {
    icon: <Eye />,
    value: "1M+",
    label: "Views Across Platforms",
    color: "blue"
  },
  {
    icon: <Film />,
    value: "10k+",
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Impact & Reach
      </motion.h2>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.3 }}
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
