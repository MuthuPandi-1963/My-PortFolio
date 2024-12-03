export default function MenuItems(props) {
    return (
        <div className={props.class}>
        <ul className="menu flex sm:justify-evenly justify-center gap-x-1 font-semibold tracking-wider px-2 text-[12px] sm:text-xl">
            <li className=""> <a href="#">Home </a></li>
            <li className=""> <a href="#">Education </a></li>
            <li className=""><a href="#experience">Experience</a></li>
            <li className=""><a href="#skills">Skills</a></li>
            <li className=""><a href="#projects">Projects</a></li>
        </ul>
    </div>
    )
};