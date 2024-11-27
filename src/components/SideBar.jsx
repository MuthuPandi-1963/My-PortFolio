export  function NavMenu() {
    return(
        <div className="lg:hidden">
            <SideBar/>
        </div>
    )
};

export default function SideBar() {
    return(
        <div className="">
            <ul className="menu flex sm:justify-evenly justify-center gap-x-1 font-semibold tracking-wider px-3 text-[12px] sm:text-xl">
                <li className=""> <a href="#">Home </a></li>
                <li className=""> <a href="#">Education </a></li>
                <li className=""><a href="#experience">Experience</a></li>
                <li className=""><a href="#skills">Skills</a></li>
                <li className=""><a href="#projects">Projects</a></li>
            </ul>
        </div>
    )
};

