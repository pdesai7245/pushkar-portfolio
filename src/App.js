import Navbar from "./components/Navbar";
import CursorHint from "./components/CursorHint";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ResumeViewer from "./components/ResumeViewer";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-cream font-inter bg-darkmaroon relative z-0">
      {/* Background Animation */}
      <div className="absolute -top-32 -left-40 w-[500px] h-[500px] bg-tan rounded-full opacity-20 blur-3xl animate-pulse z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="snap-start h-screen flex flex-col items-center justify-center text-center relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-5xl font-bold text-tan min-h-[64px]" // height ensures no layout shift
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typewriter
            options={{
              strings: [
                "Hi, I'm Pushkar Desai",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 30,
              pauseFor: 10000,
            }}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Strategist | Technologist | Sportsperson
        </motion.p>

        <div className="flex space-x-6 mt-6 text-2xl z-10">
          <a
            href="https://github.com/pdesai7245"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tan transition"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/pushkar-desai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tan transition"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://www.instagram.com/puss_mutt_kar?igsh=amUwa216bHN4ZzZr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tan transition"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </motion.section>

      {/* Scroll-snapping Sections */}
      <section id="about" className="snap-start h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="skills" className="snap-start h-screen flex items-center justify-center">
        <Skills />
      </section>

      <section id="experience" className="snap-start h-screen flex items-center justify-center">
        <Experience />
      </section>

      <section id="projects" className="snap-start h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section id="resume" className="snap-start h-screen flex items-center justify-center">
        <ResumeViewer />
      </section>

      <section id="contact" className="snap-start h-screen flex items-center justify-center">
        <Contact />
      </section>

      <section className="snap-start h-fit">
        <Footer />
        <CursorHint />
      </section>
    </div>
  );
}

export default App;
