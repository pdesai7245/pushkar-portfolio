import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-darkmaroon text-cream py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-tan"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            className="bg-forest p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-tan">
              CNN-based Rice Quality Detection
            </h3>
            <p className="text-sm mb-4">
              Classifies rice grains based on quality using deep learning and
              CNN.
            </p>
            <a href="#" className="text-cream hover:underline">
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-forest p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-tan">
              Drug Inventory System
            </h3>
            <p className="text-sm mb-4">
              Secure full-stack inventory system with role-based login and
              tracking.
            </p>
            <a href="#" className="text-cream hover:underline">
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-forest p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-tan">
              Sportika 2025 Website
            </h3>
            <p className="text-sm mb-4">
              Official fest website with event registration and results tracking.
            </p>
            <a href="#" className="text-cream hover:underline">
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
