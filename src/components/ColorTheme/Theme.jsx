import { useState } from "react";
import ThemeContext from "./themeContext";

export default function Theme({children}) {
    const [theme,setTheme] = useState(false);
    const darkTheme = "pb-10 top-0 z-[-2] text-zinc-50 h-[100%] w-[100%] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]";
    const lightTheme = "top-0 z-[-2] h-[100%]  w-[100%] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    let themecolor = theme ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value ={{theme,setTheme}}>
        <div className={themecolor}>
            {children}
        </div>
    </ThemeContext.Provider>
        
    )
};
