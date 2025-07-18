import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m <span className="font-semibold">Pushkar Desai</span>, a 3rd-year CSBS student at GITAM University with a passion for software development, blockchain, and sports leadership. I love building things that matter.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
