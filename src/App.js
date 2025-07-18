import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="pt-24 flex flex-col items-center justify-center h-[80vh] text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi, I'm Pushkar Desai
        </motion.h1>

        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Student | Developer | Sports Leader
        </motion.p>
      </motion.section>

      {/* Other Sections (Already Animated in their own files) */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
