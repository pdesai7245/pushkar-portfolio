import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-[#100C0D] text-cream py-4 border-t border-[#1e293b] text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="text-sm tracking-wide">
        Crafted with <span className="text-pink-400">passion</span> ✨ by{" "}
        <span className="text-[#CC8B65] font-bold">&lt;Pushkar&gt;</span>
      </p>
    </motion.footer>
  );
}

export default Footer;
