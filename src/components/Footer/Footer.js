import {
  Linkedin,
  Mail,
  MessageCircle,
  Youtube,
  Twitter
} from "lucide-react";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  const socialLinks = [
    { href: "https://x.com/indominus1x", label: "X / Twitter", icon: <Twitter />, tooltip: "X / Twitter" },
    { href: "https://www.linkedin.com/in/amaanmirza1", label: "LinkedIn", icon: <Linkedin />, tooltip: "LinkedIn" },
    { href: "https://www.behance.net/amaanmirza3", label: "Behance", icon: <span className="behance-icon">Be</span>, tooltip: "Behance Portfolio" },
    { href: "https://youtube.com/@indominuss", label: "YouTube", icon: <Youtube />, tooltip: "YouTube Channel" },
    { href: "mailto:amaanmirza0413@gmail.com", label: "Email", icon: <Mail />, tooltip: "amaanmirza0413@gmail.com" },
    { href: "https://wa.me/919833097622", label: "WhatsApp", icon: <MessageCircle />, tooltip: "WhatsApp Chat" }
  ];

  return (
    <footer className="footer">
      <motion.div
        className="socials"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target={social.href.startsWith('mailto') ? undefined : "_blank"}
            rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            data-tooltip={social.tooltip}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        © 2026 Amaan Mirza. All rights reserved.
      </motion.p>

      <motion.span
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Back to top ↑
      </motion.span>
    </footer>
  );
}
