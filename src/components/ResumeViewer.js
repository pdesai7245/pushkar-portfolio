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

      <button
        onClick={toggleResume}
        className="bg-tan text-darkmaroon text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-cream transition mb-10"
      >
        {showResume ? "Hide Resume" : "View Resume"}
      </button>

      {showResume && (
        <motion.div
          className="flex justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="/Desai_CV.pdf"
            title="Pushkar Resume"
            width="100%"
            height="600px"
            className="max-w-4xl w-full border border-tan rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
}

export default ResumeViewer;
