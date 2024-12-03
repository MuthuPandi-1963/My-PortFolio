import MyDetails from "./MyDetails";
import {motion} from 'framer-motion';
export default function AboutMe() {
    return (
        <div className="w-3/4 mx-auto">
        <h1 className="text-2xl text-center md:text-5xl font-bold mt-8 mb-4">About Me</h1>
        <div className="md:flex w-4/4 items-center md:justify-evenly gap-x-6">
            <motion.img src="images/Me.jpg"
            whileInView={{x:0 , opacity:1}} 
             initial={{x:-100 , opacity:0}}
             transition={{duration:0.8 ,delay:0.4}} alt="Pandi"className="self-start w-full md:w-[30%] rounded-xl shadow-lg shadow-zinc-800 " />
            <MyDetails/>

        </div>
    </div>
    )
};
