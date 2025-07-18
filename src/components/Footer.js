import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="fixed bottom-6 inset-x-0 flex justify-center z-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-darkmaroon text-cream px-6 py-2 rounded-full shadow-lg text-sm tracking-wide">
        Crafted with <span className="text-pink-400">passion</span> ✨ by{" "}
        <span className="text-tan font-bold">&lt;Pushkar&gt;</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
