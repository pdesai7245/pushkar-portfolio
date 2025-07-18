function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">CNN-based Rice Quality Detection</h3>
            <p className="text-sm mb-4">A deep learning model to classify rice grains based on quality using image processing and CNNs.</p>
            <a href="#" className="text-blue-400 hover:underline">View Code</a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Drug Inventory System</h3>
            <p className="text-sm mb-4">A smart and secure full-stack inventory manager for medical stores with role-based login, tracking, and billing.</p>
            <a href="#" className="text-blue-400 hover:underline">View Code</a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Sportika 2025 Website</h3>
            <p className="text-sm mb-4">Designed and developed the official website for GITAM’s flagship national sports fest with event registration and results tracking.</p>
            <a href="#" className="text-blue-400 hover:underline">View Site</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
