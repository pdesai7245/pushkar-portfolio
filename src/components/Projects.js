import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#1e293b] text-[#f8fafc] py-40 px-6 min-h-screen"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "CNN-based Rice Quality Detection",
              desc: "A deep learning model to classify rice grains based on quality using image processing and CNNs.",
              link: "#",
              label: "View Code"
            },
            {
              title: "Drug Inventory System",
              desc: "A smart full-stack inventory manager for medical stores with secure login, tracking, and billing.",
              link: "#",
              label: "View Code"
            },
            {
              title: "Sportika 2025 Website",
              desc: "Official site for GITAM’s national sports fest with event registration and live results tracking.",
              link: "#",
              label: "View Site"
            },
          ].map((proj, i) => (
            <motion.div
              key={proj.title}
              className="bg-[#0f172a] p-6 rounded-lg shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm mb-4 text-[#cbd5e1]">{proj.desc}</p>
              <a
                href={proj.link}
                className="text-[#38bdf8] hover:text-[#0ea5e9] underline"
              >
                {proj.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
