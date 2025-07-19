import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-darkgreen text-cream px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-tan">Contact Me</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          You can reach me at{" "}
          <a
            href="mailto:pushkardesai123@gmail.com"
            className="underline text-tan hover:text-cream transition"
          >
            pushkardesai123@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;
