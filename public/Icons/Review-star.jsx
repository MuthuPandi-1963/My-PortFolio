import { useContext, useState } from "react";
import ThemeContext from "../../src/context/themeContext";
import { Star, Star_fill } from "../../src/icons/Icon";
import { div } from "framer-motion/client";


export default function ({className,star,setStar,stars}) {
  const {theme} = useContext(ThemeContext);
  function HandleStar(id,event){
    // event.preventDefault()
    setStar((prevStar)=>{
        let newStar = []
        for (let i = 0; i <star.length; i++) {
            if(i<=id) newStar[i] =true;
            else newStar[i] = false;
        }
        return newStar;
    })
    console.log(star,stars);
    
}
  return (
    
    <div className={`star flex justify-center items-center ${className}`}>
      {star.map((item, id) => (
        <button key={id} onClick={() =>{star[id]==true ? setStar(stars): HandleStar(id)}}>
         {item ?  <Star_fill color = {"Orange"}/> :<Star/> }
        </button>
      ))}
    </div>
  );
}

