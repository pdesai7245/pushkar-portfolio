import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-darkmaroon text-cream font-inter">
      {/* Background Blob Animation */}
      <div className="absolute -top-32 -left-40 w-[500px] h-[500px] bg-tan rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main content (flex-grow ensures it pushes footer down) */}
      <div className="flex-grow relative z-10">
        {/* Hero Section */}
        <motion.section
          id="home"
          className="pt-24 flex flex-col items-center justify-center h-[80vh] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl font-bold text-tan"
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

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 text-2xl">
            <a
              href="https://github.com/pdesai7245"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tan transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pushkar-desai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tan transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/puss_mutt_kar?igsh=amUwa216bHN4ZzZr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tan transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.section>

        <About />
        <Projects />
        <Contact />
      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}

export default App;
