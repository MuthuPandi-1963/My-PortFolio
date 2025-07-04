import ThemeContext from "../ColorTheme/themeContext.jsx";
import { motion } from "framer-motion";
import projects from "./Project.js";
import { useContext } from "react";

export default function ProjectSection() {
  const { theme } = useContext(ThemeContext);

  const shadowClass = theme ? "box-shadow-lg-light" : "box-shadow-lg-dark";
  const cardClass =
    "grid p-4 mt-8 rounded-2xl md:flex md:flex-nowrap justify-evenly items-center md:gap-x-20 transition-transform hover:scale-105 cursor-pointer " +
    shadowClass;

  const buttonClass =
    "px-3 py-1 rounded-lg font-semibold text-sm border hover:scale-105 transition-transform";

  return (
    <div className="md:w-3/4 w-[90%] mx-auto pb-10" id="projects">
      <h1 className="text-3xl text-center md:text-5xl font-bold md:my-12">
        Projects
      </h1>

      {projects.map(
        (
          { name, image, technologies, description, live, github },
          id
        ) => (
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            className={cardClass}
            key={id}
          >
            <img
              src={image}
              alt={`${name} thumbnail`}
              className="w-full h-full md:w-40 md:h-40 object-cover rounded-xl"
            />

            <div className="grid justify-center md:flex-1 md:pl-4">
              <h2 className="font-black text-2xl my-2">{name}</h2>
              <p className="indent-8 text-[16px] tracking-tight leading-snug">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 my-4">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[12px] bg-cyan-800 text-white font-semibold px-2 py-1 rounded-lg whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-2 flex-wrap">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonClass} bg-green-600 text-white border-transparent`}
                  >
                    Live Demo
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonClass} bg-transparent text-green-600 border-green-600 dark:text-green-400 dark:border-green-400`}
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
