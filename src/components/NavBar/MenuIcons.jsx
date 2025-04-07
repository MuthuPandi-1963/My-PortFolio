import { useContext } from "react";
import ThemeContext from "../ColorTheme/themeContext";
import { SiLeetcode } from "react-icons/si";
import {DarkMode, LightMode ,Instagram , GitHub ,LinkedIn } from '@mui/icons-material';
const MenuIconsItems = [
  {
    icon :<SiLeetcode className="text-xl"/> ,
    link : "https://leetcode.com/u/mr_prank__/"
  },
  {
    icon :<GitHub className="text-[10px]"/> ,
    link : "https://github.com/MuthuPandi-1963"
  },
  
  {
    icon :<LinkedIn className="text-[10px]"/> ,
    link : "https://www.linkedin.com/in/muthupandi-r-832559325/"
  },
  {
    icon :<Instagram className="text-[10px]"/> ,
    link : "https://www.instagram.com/__mr.prank/profilecard/?igsh=cmhxeXdqNmV5NzVl"
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
            <DarkMode className="text-[10px]" />
          </button>
        ) : (
          <button onClick={HandleClick} className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <LightMode className="text-[10px]"/>
          </button>
        )}
        <div className="flex items-center">
          {
          MenuIconsItems.map(({icon,link},id)=>(
            <a href={link} key={id} className="">
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            {icon}
          </button>
        </a>
          ))}</div>
        
        
      </div>
    )
};
