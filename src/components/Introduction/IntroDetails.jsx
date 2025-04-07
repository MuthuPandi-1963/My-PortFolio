import { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../ColorTheme/themeContext.jsx";
import Intro from "./Introduction.js";
import { FaDownload } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";

export default function IntroDetails() {
  const { theme } = useContext(ThemeContext);

  let border = theme ? "  border-gray-800" : " border-zinc-400";
  let classBorder =
    "w-full grid md:px-20 justify-items-center justify-between md:flex px-4 pt-6 md:pt-10 border-b-[1px] pb-12";
  classBorder += border;
  return (
    <div className={classBorder}>
      <div className="grid  md:w-3/4 content-center px-10 ">
        <motion.h1
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl tracking-wide md:text-4xl lg:text-5xl  font-bold"
        >
          {Intro.Name}
        </motion.h1>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[16px] md:text-2xl lg:text-3xl xl:4xl tracking-wider my-4 font-black bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text text-transparent whitespace-pre-wrap z-0"
        >
          {" "}
          {Intro.Job_Role}
          
        </motion.p>
        
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-justify tracking-tighter w-full md:mt-10 float-left"
        >
          {Intro.Description}
          <div className="inline-flex items-center gap-x-3 border-b-2 my-4 pl-2 w-fit pr-4 py-2 rounded">
        <p className=" font-medium text-2xl">Resume</p>
        <a
        href="/resume.pdf"
        // download="Muthupandi_Resume.pdf"
        className=" px-2 py-1 bg-slate-300 rounded-lg hover:bg-slate-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdRemoveRedEye className="text-xl text-black" />
         
      </a>
      <a
        href="/resume.pdf"
        download="Muthupandi_Resume.pdf"
        className=" px-2 py-1 bg-slate-300 rounded-lg hover:bg-slate-600"
      >
        <FaDownload className="text-xl text-blue-800" />
      </a>
        </div>
        </motion.p>
        
      </div>
      
      <div className=" lg:w-1/4 my-10 w-3/4">
        <motion.img
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          src={Intro.Image}
          alt="muthupandi"
          className="rounded-lg shadow-md shadow-slate-700 w-full"
        />
      </div>
    </div>
  );
}
