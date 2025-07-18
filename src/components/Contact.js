function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-lg">
          Feel free to reach out if you'd like to collaborate or connect!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
          <a
            href="mailto:pushkardesai@example.com"
            className="bg-gray-700 px-5 py-3 rounded hover:bg-blue-600 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 px-5 py-3 rounded hover:bg-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 px-5 py-3 rounded hover:bg-blue-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
