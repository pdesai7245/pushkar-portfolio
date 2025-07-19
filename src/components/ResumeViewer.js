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
      className="bg-darkmaroon text-cream py-20 px-6 scroll-mt-24 text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-tan"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h2>

      <button
        onClick={toggleResume}
        className="bg-tan text-darkmaroon font-semibold px-6 py-2 rounded-full shadow hover:bg-cream transition mb-6"
      >
        {showResume ? "Hide Resume" : "View Resume"}
      </button>

      {showResume && (
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="/Desai_CV.pdf"
            title="Pushkar Resume"
            width="100%"
            height="600px"
            className="max-w-4xl w-full border rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
}

export default ResumeViewer;
