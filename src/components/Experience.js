import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "nammaSPORTIKA Chairman",
    type: "Part-time",
    org: "Directorate of Sports & NCC GITAM",
    date: "Mar 2025 – Mar 2025 · 1 mo",
    desc: "Led the organization of Sportika 2025 with 700+ athletes. Managed Security, Press, External Relations, and Logistics.",
    link: "https://www.instagram.com/p/DHeMM5hziGr/"
  },
  {
    id: 2,
    title: "Student Sports Associate",
    type: "Full-time",
    org: "Directorate of Sports & NCC GITAM",
    date: "Jun 2024 – Mar 2025 · 10 mos",
    desc: "Oversaw 11 SIGs and GSC under OBE domain. Handled sponsorships, partnerships, and MOU collaborations.",
    link: "https://www.instagram.com/p/C9R1LhBpv7f/"
  },
  {
    id: 3,
    title: "GITAM Sports Committee",
    type: "Full-time",
    org: "Directorate of Sports & NCC GITAM",
    date: "Jun 2023 – May 2024 · 1 yr",
    desc: "Executed 50+ recreational events under OFD domain. Documented events per Directorate of Sports guidelines.",
    link: "https://www.instagram.com/p/CvlvDdYNRG5/"
  }
];

function Experience() {
  const [active, setActive] = useState(1);

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-darkgreen text-cream px-4 py-20 scroll-mt-24">
      <motion.h2
        className="text-4xl font-bold mb-8 text-tan"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setActive(exp.id)}
            className={`px-6 py-2 rounded-full border border-tan font-medium transition ${
              active === exp.id ? "bg-tan text-darkmaroon" : "text-cream hover:bg-tan hover:text-darkmaroon"
            }`}
          >
            {exp.title}
          </button>
        ))}
      </div>

      <motion.div
        className="max-w-2xl text-left text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-tan mb-2">{experiences[active - 1].title}</h3>
        <p className="italic text-cream/80 text-sm mb-1">{experiences[active - 1].type}</p>
        <p className="text-sm text-cream/80 mb-1">{experiences[active - 1].org}</p>
        <p className="text-sm text-cream/80 mb-4">{experiences[active - 1].date}</p>
        <p className="mb-4 leading-relaxed">{experiences[active - 1].desc}</p>

        <a
          href={experiences[active - 1].link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-tan hover:text-cream transition text-sm font-medium"
        >
          <FaInstagram className="text-lg" /> View on Instagram
        </a>
      </motion.div>
    </section>
  );
}

export default Experience;
