import { useContext } from "react"; 
import ThemeContext from "../context/themeContext";
import {motion} from 'framer-motion';
const projects = [
    {
      name: "Instagram Clone with ChatBot Integration",
      img:'instagram',
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQL"],
      description: "Developed a fully functional Instagram-like social media application that allows users to create profiles, post pictures, and chat. Integrated a chatbot to assist users with common queries."
    },
    {
      name: "E-commerce Web Application",
      img:"ecommerce",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQL"],
      description: "Built an online shopping platform featuring product listings, user authentication, and a shopping cart. Focused on creating a user-friendly experience and robust backend functionality."
    },
    {
      name: "YouTube Static Website",
      img:'youtube',
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Vercel"],
      description: "Created a responsive static website resembling YouTube, with a navigation bar, video thumbnails, and basic styling. Utilized **React** for structure and **Tailwind CSS** for styling."
    }
  ];
  
export default function Project() {
    const {theme} = useContext(ThemeContext)
    let Shadow = theme ? " box-shadow-lg-light" : " box-shadow-lg-dark";
  let classImg =
  "grid  p-4 mt-8 rounded-2xl md:flex md:flex-nowrap justify-evenly items-center md:gap-x-20 transition-transform hover:scale-110 cursor-pointer"
  classImg += Shadow;
    return(
        <div className="w-3/4 mx-auto pb-10 " id="projects">
            <h1 className="text-3xl text-center md:text-5xl font-bold  md:my-12">Projects</h1>
                
                    {projects.map(({name,img,technologies,description},id)=>(
                      
                        <motion.div 
                        whileInView={{scale:1 , opacity:1}}
                        initial={{scale:0.7 , opacity:0}}
                        transition={{duration:0.7 , ease:'easeInOut',delay:0.2}} className={classImg} key={id}>
                        <img src={`images/${img}.jpg`} alt={img} className="w-full h-full md:w-40 md:h-40 object-cover rounded-xl " />
                        <div className="grid justify-center" >
                            <h1 className="font-black text-2xl my-2">{name}:</h1>
                    <p className="indent-12 text-[16px] tracking-tighter ">{description}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 my-4">{technologies.map((item,id)=> (
                        <p key={id} className="text-[12px] bg-cyan-800 font-semibold px-2 py-1 rounded-lg whitespace-nowrap">{item}</p>
                    ))}
                        </div>
                </div>
                </motion.div> ))}
        </div>
    )
};
