import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-darkgreen text-cream px-6 scroll-mt-24">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          A <span className="font-semibold">final-year CSBS student</span> at GITAM University with a strong drive for
          <span className="font-semibold"> tech innovation</span> and <span className="font-semibold">entrepreneurship</span>. 
          Experienced in <span className="font-semibold">full-stack development</span>, building 
          <span className="font-semibold"> event platforms</span>, and leading impactful 
          <span className="font-semibold"> campus-wide initiatives</span>. A 
          <span className="font-semibold"> former Student Sports Associate</span> now focused on crafting 
          <span className="font-semibold"> scalable digital products</span> with clean design and real-world value.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
