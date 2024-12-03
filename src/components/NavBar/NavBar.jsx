import { useContext } from "react";
import Header from "./Header";
import MenuIcons from "./MenuIcons";
import MenuItems from "./MenuItems";
import ThemeContext from "../ColorTheme/themeContext";

export default function NavBar() {
    const  { theme }  = useContext(ThemeContext)
    return (
    <div className="sticky top-0 bg-inherit pb-3 pt-2 z-10">
        <nav className={`nav flex items-center py-1 md:py-3  px-2 justify-between md:px-8 sticky top-0  z-50 `}>
            <Header/>
            <MenuItems class ={"hidden lg:block"}/>
            <MenuIcons/>
        </nav>
            <MenuItems class={"lg:hidden block"}/>
    </div>

    )
};
