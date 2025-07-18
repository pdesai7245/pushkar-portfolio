import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-darkmaroon/80 backdrop-blur border-t border-forest text-center py-6 text-cream text-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="tracking-wide">
        Crafted with <span className="text-tan">passion</span> ✨ by{" "}
        <span className="text-tan font-bold">&lt;Pushkar&gt;</span>
      </p>
    </motion.footer>
  );
}

export default Footer;
