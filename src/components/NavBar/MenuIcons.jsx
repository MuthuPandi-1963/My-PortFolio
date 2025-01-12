import { useContext } from "react";
import { Github, Instagram, LinkedIn, Moon, Sun } from "../icons/Icon";
import ThemeContext from "../ColorTheme/themeContext";


const MenuIconsItems = [
  {
    icon :<Github/> ,
    link : "https://github.com/MuthuPandi-1963"
  },
  {
    icon :<Instagram/> ,
    link : "https://www.instagram.com/__mr.prank/profilecard/?igsh=cmhxeXdqNmV5NzVl"
  },
  {
    icon :<LinkedIn/> ,
    link : "https://www.linkedin.com/in/muthupandi-r-832559325/"
  },
]

export default function MenuIcons() {
    const {theme , setTheme} = useContext(ThemeContext);

    function HandleClick(){
        setTheme(prev=>!prev)
    }
    return (
        <div id="icons" className="flex items-center bg-transparent">
        {theme ? (
          <button onClick={HandleClick } className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Moon/>
          </button>
        ) : (
          <button onClick={HandleClick} className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Sun/>
          </button>
        )}
        <div className="">
          {
          MenuIconsItems.map(({icon,link})=>(
            <>
            <a href={link}>
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            {icon}
          </button>
        </a>
            </>
          ))}</div>
        
        
      </div>
    )
};
