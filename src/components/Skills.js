import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiFigma,
  SiGithub,
  SiAndroid,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaComments, FaJava } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "C", icon: <SiC size={24} /> },
    { name: "C++", icon: <SiCplusplus size={24} /> },
    { name: "Java", icon: <FaJava size={24} /> },
    { name: "Python", icon: <SiPython size={24} /> },
    { name: "Communication", icon: <FaComments size={24} /> },
    { name: "Figma", icon: <SiFigma size={24} /> },
    { name: "App Dev", icon: <SiAndroid size={24} /> },
    { name: "Frontend Dev", icon: <SiHtml5 size={24} /> },
    { name: "CSS", icon: <SiCss3 size={24} /> },
    { name: "Git", icon: <SiGithub size={24} /> },
  ];

  return (
    <section
      id="skills"
      className="bg-forest text-cream py-20 px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-tan">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-darkmaroon px-4 py-3 rounded-lg shadow flex items-center space-x-2 w-full justify-center hover:scale-105 transition"
            >
              <div>{skill.icon}</div>
              <div className="text-sm font-medium">{skill.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
