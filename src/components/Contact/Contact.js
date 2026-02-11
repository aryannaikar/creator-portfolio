import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";

// ✅ initialize EmailJS once
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC);

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        e.target
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message ❌");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Let’s Create Together</h2>

      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Tell me about your project"
          rows="5"
          required
        />
        <button type="submit">Send Message →</button>
      </motion.form>
    </section>
  );
}
