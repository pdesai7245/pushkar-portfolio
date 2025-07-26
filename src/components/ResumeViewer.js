import { motion } from "framer-motion";

function ResumeViewer() {
  const openInNewTab = () => {
    window.open("/Desai_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="resume"
      className="w-full bg-darkgreen text-cream px-6 py-20 scroll-mt-24"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-tan text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <button
          onClick={openInNewTab}
          className="bg-tan text-darkmaroon text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-cream transition"
        >
          View Resume
        </button>

        <a
          href="/Desai_Resume.pdf"
          download="Pushkar_Desai_Resume.pdf"
          className="bg-darkmaroon text-tan text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-cream hover:text-darkmaroon transition text-center"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeViewer;
