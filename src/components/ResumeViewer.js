import { useState } from "react";
import { motion } from "framer-motion";

function ResumeViewer() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume((prev) => !prev);
  };

  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-darkgreen text-cream px-6 scroll-mt-24"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-tan"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button
          onClick={toggleResume}
          className="bg-tan text-darkmaroon text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-cream transition"
        >
          {showResume ? "Hide Resume" : "View Resume"}
        </button>

        <a
          href="/Desai_Resume.pdf"
          download="Pushkar_Desai_Resume.pdf"
          className="bg-darkmaroon text-tan text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-cream hover:text-darkmaroon transition text-center"
        >
          Download Resume
        </a>
      </div>

      {showResume && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="/Desai_Resume.pdf"
            title="Pushkar Resume"
            className="w-[800px] h-[1130px] border border-tan rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </section>
  );
}

export default ResumeViewer;
