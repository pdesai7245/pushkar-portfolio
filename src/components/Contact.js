import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-[#f8fafc] py-40 px-6 min-h-screen"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-lg text-[#cbd5e1]">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
          <a
            href="mailto:your.email@example.com"
            className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-6 py-3 rounded-lg transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
