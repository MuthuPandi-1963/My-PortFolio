import ThemeContext from "../ColorTheme/themeContext.jsx";
import {motion} from 'framer-motion';
import projects from './Project.js';
import { useContext } from 'react';


export default function Project() {
  const { theme } = useContext(ThemeContext);
  let Shadow = theme ? " box-shadow-lg-light" : " box-shadow-lg-dark";
  let classImg =
    "grid  p-4 mt-8 rounded-2xl md:flex md:flex-nowrap justify-evenly items-center md:gap-x-20 transition-transform hover:scale-110 cursor-pointer";
  classImg += Shadow;
  return (
    <div className="w-3/4 mx-auto pb-10 " id="projects">
      <h1 className="text-3xl text-center md:text-5xl font-bold  md:my-12">
        Projects
      </h1>

      {projects.map(({ name, image, technologies, description }, id) => (
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          className={classImg}
          key={id}
        >
          <img
            src={image}
            alt={image}
            className="w-full h-full md:w-40 md:h-40 object-cover rounded-xl "
          />
          <div className="grid justify-center">
            <h1 className="font-black text-2xl my-2">{name}:</h1>
            <p className="indent-12 text-[16px] tracking-tighter ">
              {description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 my-4">
              {technologies.map((item, id) => (
                <p
                  key={id}
                  className="text-[12px] bg-cyan-800 font-semibold px-2 py-1 rounded-lg whitespace-nowrap"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
