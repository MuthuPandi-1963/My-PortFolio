export default function MenuItems(props) {
    return (
        <div className={props.class}>
        <ul className="menu flex sm:justify-evenly justify-center gap-x-[1px]  font-mono  tracking-tight px-2 text-[10px] sm:text-xl">
            <li className=""> <a href="#">Home </a></li>
            <li className=""> <a href="#education">Education </a></li>
            <li className=""><a href="#experience">Experience</a></li>
            <li className=""><a href="#skills">Skills</a></li>
            <li className=""><a href="#projects">Projects</a></li>
            <li className=""><a href="#reviews">Reviews</a></li>
            
        </ul>
    </div>
    )
};