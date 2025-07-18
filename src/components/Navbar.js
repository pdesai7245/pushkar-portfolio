import React from "react";

function Navbar() {
  return (
    <nav className="bg-forest text-cream fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-tan">&lt;Pushkar&gt;</h1>

        {/* Nav Links */}
        <div className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="#home" className="hover:text-tan transition-colors">Home</a>
          <a href="#about" className="hover:text-tan transition-colors">About</a>
          <a href="#projects" className="hover:text-tan transition-colors">Projects</a>
          <a href="#contact" className="hover:text-tan transition-colors">Contact</a>
          <a
            href="/Desai_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tan text-darkmaroon px-4 py-1.5 rounded hover:bg-cream hover:text-darkmaroon transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
