import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-darkgreen/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-tan">&lt;Pushkar&gt;</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cream text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex ml-auto space-x-6 text-cream font-medium">
          <li><a href="#home" className="hover:text-tan">Home</a></li>
          <li><a href="#about" className="hover:text-tan">About</a></li>
          <li><a href="#skills" className="hover:text-tan">Skills</a></li>
          <li><a href="#experience" className="hover:text-tan">Experience</a></li>
          <li><a href="#projects" className="hover:text-tan">Projects</a></li>
          <li><a href="#resume" className="hover:text-tan">Resume</a></li>
          <li><a href="#contact" className="hover:text-tan">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-darkgreen/90 text-cream px-4 pb-4 space-y-2">
          <li><a href="#home" className="block">Home</a></li>
          <li><a href="#about" className="block">About</a></li>
          <li><a href="#skills" className="block">Skills</a></li>
          <li><a href="#experience" className="block">Experience</a></li>
          <li><a href="#projects" className="block">Projects</a></li>
          <li><a href="#resume" className="block">Resume</a></li>
          <li><a href="#contact" className="block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
