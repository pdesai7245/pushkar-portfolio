import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 shadow">
      <h1 className="text-2xl font-bold">Pushkar</h1>
      
      <ul className="flex gap-6 items-center text-sm">
        <li>
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </li>
        <li>
          <a 
            href="/Desai_CV.pdf" 
            download 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
