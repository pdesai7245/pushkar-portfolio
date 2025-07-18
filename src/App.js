import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-24 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Hi, I'm Pushkar Desai</h1>
      <p className="mt-4 text-xl">Student | Developer | Sports Leader</p>
    </section>


      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
