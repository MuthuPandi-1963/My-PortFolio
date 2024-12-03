import { useContext } from "react";
import { Github, Instagram, LinkedIn, Moon, Sun } from "../icons/Icon";
import ThemeContext from "../ColorTheme/themeContext";

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
        <a href="https://github.com/MuthuPandi-1963">
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Github/>
          </button>
        </a>
        <a href="https://www.instagram.com/__mr.prank/profilecard/?igsh=cmhxeXdqNmV5NzVl">
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Instagram/>
          </button> 
        </a>
        <a href="https://www.linkedin.com/in/muthupandi-r-832559325/">
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <LinkedIn/>
          </button>
        </a>
      </div>
    )
};
