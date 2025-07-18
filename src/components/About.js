import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-forest text-cream py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-[#cbd5e1]">
          I’m <span className="font-semibold text-[#38bdf8]">Pushkar Desai</span>, a 3rd-year CSBS student at GITAM University with a passion for software development, blockchain, and sports leadership. I love building impactful digital experiences and organizing large-scale events like Sportika 2025.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
