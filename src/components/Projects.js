import { motion } from "framer-motion";

const projects = [
  {
    title: "CNN-based Rice Quality Detection",
    description:
      "Deep learning system that classifies rice grain quality using CNN architecture.",
  },
  {
    title: "Drug Inventory System",
    description:
      "Full-stack secure inventory platform with role-based access and live tracking.",
  },
  {
    title: "Sportika 2025 Website",
    description:
      "I mentored the Sportika website project and was part of the team that built the official event portal.",
    link: "https://namma-sportika.gitam.edu/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex items-center justify-center bg-darkmaroon text-cream px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-tan">Projects</h2>
        <div className="grid gap-10 md:grid-cols-3 px-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-cream/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-cream text-cream hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-cream">
                {project.title}
              </h3>
              <p className="text-sm text-cream mb-2">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tan text-sm font-medium hover:underline"
                >
                  Visit Website
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
