import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { easeInOut, motion } from "framer-motion"
export default function About() {
    const {theme}= useContext(ThemeContext)
    // useEffect(()=>{},[The])
    let border = theme ? "  border-gray-800" : " border-zinc-400"
    let classBorder ="w-full grid md:px-20 justify-items-center justify-between md:flex px-4 pt-6 md:pt-10 border-b-[1px] pb-12"
    classBorder+=border
    return(
        <div className={classBorder}>
            <div className="grid  md:w-3/4 content-center px-10 ">
                <motion.h1  initial={{x:-100 , opacity:0}}
                animate={{x:0,opacity:1,transition:{duration:0.5,delay:0.2 , ease:easeInOut}}}
                className="text-3xl tracking-wide md:text-4xl lg:text-5xl  font-bold">Muthupandi</motion.h1>
                <motion.p 
                initial={{x:-100 , opacity:0}}
                animate={{x:-10,opacity:1,transition:{duration:0.5,delay:0.7}}}
                className="text-[16px] md:text-2xl lg:text-3xl xl:4xl tracking-wider my-4 font-black bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text text-transparent whitespace-pre-wrap z-0"> Technical Trainer & Full-Stack Developer</motion.p>
                <motion.p
                initial={{x:-100 , opacity:0}}
                animate={{x:0,opacity:1,transition:{duration:0.5,delay:1.2}}} className="text-justify tracking-tighter w-full md:mt-10 float-left">I’m a MERN, Python, and .NET Full-Stack Developer, currently a Technical Trainee at NetworkZ Systems. I specialize in building scalable, efficient web applications with React, Node.js, Express, Django, and ASP.NET. I also have strong knowledge of SQL and NoSQL databases and enjoy exploring new technologies to solve challenges</motion.p>
            </div>
            <div className=" lg:w-1/4 my-10 w-3/4">
            <motion.img 
            initial={{x:100 , opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5,delay:1.7}}} src="images/Meduke.jpg" alt="muthupandi" className="rounded-lg shadow-md shadow-slate-700 w-full"/></div>
        </div>
    )
};
