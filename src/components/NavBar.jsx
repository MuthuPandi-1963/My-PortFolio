import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { Code, Github, Instagram, LinkedIn,  Moon, Sun } from "../icons/Icon";
import SideBar from "./SideBar";

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  function HandleClick() {
    setTheme((prevTheme) => !prevTheme);
  }
  const color = theme ? "currentcolor" : "white";

  return (
    <nav className={`nav flex items-center py-1 md:py-3  px-2 justify-between md:px-8 sticky top-0  z-50 ${theme ? 'bg-white' : 'bg-black'}`}>
      <div id="logo" className="flex items-center gap-x-2 px-2">
        <img src='https://firebasestorage.googleapis.com/v0/b/dummy-59bd8.firebasestorage.app/o/coder.png?alt=media&token=25975aba-a4b2-4643-95ef-e9b8f50b9ff3' alt="" className="w-8 h-8 md:w-12 md:h-12 rounded-2xl" />
        <h1 className="text-xl md:text-2xl whitespace-nowrap font-bold bg-gradient-to-tr to-indigo-700 tracking-wide">
          Prank Coder
        </h1>
        <Code color={color} />
      </div>
      <div className="hidden lg:block">
      <SideBar/>
      </div>
      <div id="icons" className="flex items-center bg-transparent">
        {theme ? (
          <button onClick={HandleClick } className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Moon color={color} />
          </button>
        ) : (
          <button onClick={HandleClick} className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Sun color={color} />
          </button>
        )}
        <a href="https://github.com/MuthuPandi-1963">
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Github color={color} />
          </button>
        </a>
        <a href="https://www.instagram.com/__mr.prank/profilecard/?igsh=cmhxeXdqNmV5NzVl">
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <Instagram color={color} />
          </button> 
        </a>
        <a href="https://www.linkedin.com/in/muthupandi-r-832559325/">
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <LinkedIn color={color} />
          </button>
        </a>
        {/* <a href="https://www.linkedin.com/in/muthupandi-r-832559325/">
          <button>
            <Menu color={color} w={"30"} h={"30"} />
          </button>
        </a> */}
      </div>
    </nav>
  );
}
