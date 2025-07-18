import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-forest text-cream py-20 px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-tan">Contact Me</h2>
        <p className="text-lg mb-4">
          You can reach me at:{" "}
          <a
            href="mailto:pushkardesai123@gmail.com"
            className="text-tan underline hover:text-cream"
          >
            pushkardesai123@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;
