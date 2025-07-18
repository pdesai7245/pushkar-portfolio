import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="relative overflow-hidden bg-gradient-animate text-white min-h-screen font-inter">
      {/* Floating Animated Blob */}
      <div className="animated-blob"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="pt-24 flex flex-col items-center justify-center h-[80vh] text-center z-10 relative"
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

      {/* Other Sections */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
