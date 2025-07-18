import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 w-full bg-darkmaroon text-cream py-3 text-center z-50 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-medium">
        Crafted with <span className="text-pink-400">passion</span> ✨ by{" "}
        <span className="text-tan font-bold">&lt;Pushkar&gt;</span>
      </p>
    </motion.footer>
  );
}

export default Footer;
