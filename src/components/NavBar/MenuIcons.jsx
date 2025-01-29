import { useContext } from "react";
import ThemeContext from "../ColorTheme/themeContext";

import {DarkMode, LightMode ,Instagram , GitHub ,LinkedIn } from '@mui/icons-material';
const MenuIconsItems = [
  {
    icon :<GitHub className="text-[10px]"/> ,
    link : "https://github.com/MuthuPandi-1963"
  },
  {
    icon :<Instagram className="text-[10px]"/> ,
    link : "https://www.instagram.com/__mr.prank/profilecard/?igsh=cmhxeXdqNmV5NzVl"
  },
  {
    icon :<LinkedIn className="text-[10px]"/> ,
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
            <DarkMode className="text-[10px]" />
          </button>
        ) : (
          <button onClick={HandleClick} className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <LightMode className="text-[10px]"/>
          </button>
        )}
        <div className="">
          {
          MenuIconsItems.map(({icon,link},id)=>(
            <a href={link} key={id}>
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            {icon}
          </button>
        </a>
          ))}</div>
        
        
      </div>
    )
};
