import { useContext } from 'react';
import skills from './SkillsList';
import {motion} from 'framer-motion';
import ThemeContext from '../ColorTheme/themeContext';

export default function Skills() {
    const { theme } = useContext(ThemeContext);
    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
          y: [10, -10],
          transition: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse",
          },
        },
      });
    
      const shadowClass = theme ? " box-shadow-lg-light" : " box-shadow-lg-dark";
      const classImg = `
        p-4 rounded-2xl shadow-xl shadow-slate-800 transition-transform 
        cursor-pointer hover:scale-125 ease-out duration-300 ${shadowClass}`;
    
      return (
        <div
          className="grid justify-center justify-items-center py-12 md:mt-12 overflow-x-hidden"
          id="skills"
        >
          <h1 className="text-3xl text-center md:text-5xl font-bold my-16">
            Technologies Known
          </h1>
    
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center flex-wrap md:gap-12 md:w-3/4 gap-6"
          >
            {skills.map((skill, id) => (
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                key={id}
                className={`${classImg} flex items-center`}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 md:w-[80px]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
    )
};
