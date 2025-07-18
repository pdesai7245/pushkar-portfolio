import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-[#0f172a]/80 backdrop-blur border-t border-[#1e293b] text-center py-6 text-[#cbd5e1] text-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="tracking-wide">
        Crafted with <span className="text-pink-400">passion</span> ✨ by{" "}
        <span className="text-[#38bdf8] font-bold">&lt;Pushkar&gt;</span>
      </p>
    </motion.footer>
  );
}

export default Footer;
