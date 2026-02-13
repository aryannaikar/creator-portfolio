import {
  Linkedin,
  Mail,
  MessageCircle,
  Youtube,
  Twitter
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">

        {/* X (Twitter) */}
        <a
          href="https://x.com/indominus1x"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          data-tooltip="X / Twitter"
        >
          <Twitter />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/amaanmirza1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          data-tooltip="LinkedIn"
        >
          <Linkedin />
        </a>

        {/* Behance */}
        <a
          href="https://www.behance.net/amaanmirza3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
          data-tooltip="Behance Portfolio"
        >
          <span className="behance-icon">Be</span>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@indominuss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          data-tooltip="YouTube Channel"
        >
          <Youtube />
        </a>

        {/* Email */}
        <a
          href="mailto:amaanmirza0413@gmail.com"
          aria-label="Email"
          data-tooltip="amaanmirza0413@gmail.com"
        >
          <Mail />
        </a>

        {/* WhatsApp (Replace with real number) */}
        <a
          href="https://wa.me/919833097622"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          data-tooltip="WhatsApp Chat"
        >
          <MessageCircle />
        </a>
      </div>

      <p>© 2026 Amaan Mirza. All rights reserved.</p>

      <span
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top ↑
      </span>
    </footer>
  );
}
